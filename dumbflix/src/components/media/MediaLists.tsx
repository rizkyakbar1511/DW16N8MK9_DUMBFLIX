"use client";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { PropsWithChildren, useEffect, useState } from "react";
import MediaCard from "./MediaCard";
import { useQuery } from "@tanstack/react-query";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn, createUrlBuilder } from "@/lib/utils";
import useCarousel from "@/hooks/useCarousel";
import { motion } from "framer-motion";
import type { UrlObject } from "url";
import MediaListSkeleton from "../skeletons/MediaListSkeleton";
import { getData } from "@/services/api";
import { BaseResponse, MergeTypes, Movie, TVSeries } from "@/types";

type MediaListsProps = PropsWithChildren & {
  type: string;
  list: string;
};

export function MediaLists({ type, list, children }: MediaListsProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const { api, setApi, setIsHovered } = useCarousel();

  const { data, isLoading } = useQuery({
    queryKey: [`${type}_${list}`],
    queryFn: () =>
      getData<BaseResponse<MergeTypes<Movie, TVSeries>>>(
        createUrlBuilder(process.env.NEXT_PUBLIC_TMDB_API_URL)
          .setEndpoint(`/${type}`)
          .addPathParam(list)
          .addQueryParam("language", "en-US")
          .addQueryParam("page", "1")
          .build()
      ),
  });

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (isLoading) return <MediaListSkeleton />;

  return (
    <motion.section
      className="container px-6 pt-8"
      initial="hidden"
      whileInView="visible"
      variants={{ visible: { opacity: 1, x: 0 }, hidden: { opacity: 0, x: "-100%" } }}
      transition={{ duration: 0.5 }}
      viewport={{ margin: "0px 0px -250px 0px", once: true }}
    >
      <div>{children}</div>
      <Carousel
        className={cn(
          "after:absolute after:transition-opacity after:duration-500 after:bg-gradient-to-r after:from-transparent after:to-[#ffffff] dark:after:to-[#000000] to-100% after:w-36 after:right-0 after:top-0 after:z-10 after:h-full",
          { "after:opacity-0": current > 2 }
        )}
        setApi={setApi}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CarouselContent className="px-6">
          {data?.results?.map((result) => (
            <CarouselItem className="basis-1/2 sm:basis-1/4 lg:basis-1/5" key={result.id}>
              <MediaCard
                type={type}
                hovered={hovered}
                setHovered={setHovered}
                index={result.id}
                data={result}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="hidden sm:flex items-center justify-end gap-2 p-4">
        <Button
          className="rounded-full"
          onClick={() => api?.scrollPrev()}
          disabled={current === 1}
          variant="outline"
          size="icon"
        >
          <ArrowLeft className="size-4 md:size-6" />
        </Button>
        <Button
          className="rounded-full"
          onClick={() => api?.scrollNext()}
          disabled={current === count}
          variant="outline"
          size="icon"
        >
          <ArrowRight className="size-4 md:size-6" />
        </Button>
      </div>
    </motion.section>
  );
}

export function MediaListsLink({ title, href }: { title: string; href: string | UrlObject }) {
  return (
    <Button
      variant="link"
      className="group pl-3 mb-5 border-l-4 border-red-600 flex justify-between items-center w-max rounded-none"
      asChild
    >
      <Link className="hover:no-underline" href={href}>
        <h3 className="text-gray-800 dark:text-white font-bold text-2xl">{title}</h3>
        <ChevronRight className="size-8 text-gray-800 dark:text-white ease-in-out delay-100 duration-500 transition -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 ml-1 mt-1" />
      </Link>
    </Button>
  );
}
