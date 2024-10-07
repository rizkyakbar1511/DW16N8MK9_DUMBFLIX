import { type CarouselApi } from "@/components/ui/carousel";
import { useCallback, useEffect, useRef, useState } from "react";

const DEBOUNCE_DELAY = 200;

export default function useCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [isHovered, setIsHovered] = useState(false);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const debouncedScroll = (direction: "prev" | "next") => {
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);

      debounceTimerRef.current = setTimeout(() => {
        if (api) direction === "prev" ? api.scrollPrev() : api.scrollNext();
      }, DEBOUNCE_DELAY);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!api) return;
      if (event.key === "ArrowLeft") debouncedScroll("prev");
      if (event.key === "ArrowRight") debouncedScroll("next");
    };

    if (isHovered) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    };
  }, [isHovered, api]);

  return {
    api,
    setApi,
    setIsHovered,
  };
}
