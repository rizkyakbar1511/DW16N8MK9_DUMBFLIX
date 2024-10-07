import Image from "next/image";
import React from "react";
import { cn, getYear } from "@/lib/utils";
import { MergeTypes, Movie, TVSeries } from "@/types";
import { TMDB_BASE_IMG_URL } from "@/constants";
import Link from "next/link";

type CardProps = {
  data: MergeTypes<TVSeries, Movie>;
  index: number;
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  type: string;
};

function Card({ data, index, hovered, setHovered, type }: CardProps) {
  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        className="object-cover absolute inset-0"
        src={`${TMDB_BASE_IMG_URL}/${data.poster_path}`}
        alt={data.name ?? data.title}
        placeholder="empty"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <Link href={`/${type}/watch/${data.id}`} passHref>
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex flex-col justify-end py-8 px-4 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <h6 className="text-sm sm:text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {data.name ?? data.title}
          </h6>
          <p className="text-xs sm:text-base text-white">
            {getYear(data.first_air_date ?? data.release_date)}
          </p>
        </div>
      </Link>
    </div>
  );
}

const MediaCard = React.memo(Card);

export default MediaCard;
