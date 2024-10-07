"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { TMDB_BASE_IMG_URL } from "@/constants";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import Image from "next/image";
import { Button } from "./ui/button";
import { createUrlBuilder, getYear } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import useCarousel from "@/hooks/useCarousel";
import { motion } from "framer-motion";
import HeroSkeleton from "./skeletons/HeroSkeleton";
import { getData } from "@/services/api";
import { BaseResponse, MergeTypes, Movie, TVSeries } from "@/types";
import Link from "next/link";

export default function Hero({ type }: { type: string }) {
  const { setApi, setIsHovered } = useCarousel();
  const { data, isLoading } = useQuery({
    queryKey: [`trending_${type}`],
    queryFn: () =>
      getData<BaseResponse<MergeTypes<TVSeries, Movie>>>(
        createUrlBuilder(process.env.NEXT_PUBLIC_TMDB_API_URL)
          .setEndpoint("/trending")
          .addPathParam(type)
          .addPathParam("day")
          .addQueryParam("language", "en-US")
          .build()
      ),
    select: (data) => ({
      ...data,
      results: data.results.filter(({ media_type }) => media_type !== "person"),
    }),
  });

  if (isLoading) return <HeroSkeleton />;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      <Carousel
        plugins={[
          Autoplay({
            delay: 10000,
          }),
          Fade(),
        ]}
        opts={{
          loop: true,
        }}
        setApi={setApi}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CarouselContent>
          {data?.results?.map((result) => (
            <CarouselItem className="relative min-h-screen" key={result.id}>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#ffffff] from-70% dark:to-[#000000] z-10" />
              <Image
                className="object-cover object-top"
                src={`${TMDB_BASE_IMG_URL}/${result.backdrop_path}`}
                alt={result.title ?? result.name}
                fill
              />
              <div className="container mx-auto absolute z-20 inset-0 p-12 flex flex-col items-start justify-center">
                <div className="md:w-2/3">
                  <h2 className="text-white text-shadow-md text-6xl mb-7">
                    {result.title ?? result.name}
                  </h2>
                  <p className="text-white text-shadow-md">{result.overview}</p>
                  <div className="flex items-center gap-3 mt-3 mb-8">
                    <p className="text-white text-shadow-md">
                      {getYear(result.release_date ?? result.first_air_date)}
                    </p>
                    <span className="border border-white rounded-sm py-0.5 px-3 text-white text-shadow-md uppercase">
                      {result.media_type}
                    </span>
                  </div>
                  <Button asChild className="rounded-sm shadow min-w-56 max-sm:w-full">
                    <Link href={`/${result.media_type}/watch/${result.id}`}>Watch Now</Link>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </motion.section>
  );
}
