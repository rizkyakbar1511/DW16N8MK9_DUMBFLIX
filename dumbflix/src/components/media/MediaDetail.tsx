"use client";

import { BASE_WATCH_URL, TMDB_BASE_IMG_URL } from "@/constants";
import { cn, createUrlBuilder, getYear } from "@/lib/utils";
import { getData } from "@/services/api";
import { MergeTypes, Movie, TVSeries, Videos } from "@/types";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import ReactPlayer from "react-player";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import useCarousel from "@/hooks/useCarousel";
import { ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Fade from "embla-carousel-fade";
import MediaDetailSkeleton from "../skeletons/MediaDetailSkeleton";

type MediaDetailProps = {
  id: string;
  type: string;
};

export default function MediaDetail({ id, type }: MediaDetailProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [count, setCount] = useState(0);
  const { api, setApi } = useCarousel();
  const { data: dataVideos, isLoading: isLoadingVideo } = useQuery({
    queryKey: ["videos", id],
    queryFn: ({ queryKey }) =>
      getData<Videos>(
        createUrlBuilder(process.env.NEXT_PUBLIC_TMDB_API_URL)
          .addPathParam(type)
          .addPathParam(queryKey[1])
          .addPathParam("videos")
          .addQueryParam("language", "en-US")
          .build()
      ),
  });

  const { data: dataDetail, isLoading: isLoadingDetail } = useQuery({
    queryKey: ["detail", id],
    queryFn: ({ queryKey }) =>
      getData<MergeTypes<TVSeries, Movie>>(
        createUrlBuilder(process.env.NEXT_PUBLIC_TMDB_API_URL)
          .addPathParam(type)
          .addPathParam(queryKey[1])
          .addQueryParam("language", "en-US")
          .build()
      ),
  });

  const isLoading = isLoadingVideo || isLoadingDetail;

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    api?.on("select", () => {
      setCurrentVideoIndex(api.selectedScrollSnap());
    });
  }, [api]);

  if (isLoading) return <MediaDetailSkeleton />;

  return (
    <>
      {!!dataVideos?.results.length && (
        <div className="h-[calc(50svh-72px)] md:h-[calc(80svh-72px)] lg:h-[calc(100svh-72px)]">
          <ReactPlayer
            playIcon={
              <PlayCircle className="size-28 bg-gradient-to-t from-red-1 to-red-800 rounded-full" />
            }
            width="100%"
            height="100%"
            controls
            light
            url={`${
              BASE_WATCH_URL[
                dataVideos?.results[
                  currentVideoIndex
                ].site.toLocaleLowerCase()! as keyof typeof BASE_WATCH_URL
              ]
            }${dataVideos?.results[currentVideoIndex]?.key}`}
          />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-24 md:gap-20 lg:gap-24 p-10">
        <div
          className={cn(
            "flex max-xs:flex-col max-xs:items-center max-md:order-2 items-start gap-5 md:col-span-3",
            !dataVideos?.results.length && "md:col-span-5"
          )}
        >
          <div className="relative w-full max-w-40 lg:max-w-[200px] h-56 lg:h-[300px] flex-none">
            <Image
              className="rounded-md"
              src={`${TMDB_BASE_IMG_URL}/${dataDetail?.poster_path}`}
              alt={dataDetail?.name! ?? dataDetail?.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <h6 className="text-xl md:text-xl lg:text-2xl font-bold">
              {dataDetail?.name ?? dataDetail?.title}
            </h6>
            <div className="flex items-center gap-3 mt-3 mb-8 text-sm lg:text-base">
              <p className="text-black dark:text-muted-foreground text-shadow-md">
                {getYear(dataDetail?.release_date! ?? dataDetail?.first_air_date)}
              </p>
              <span className="border border-black text-black dark:border-muted-foreground dark:text-muted-foreground rounded-sm py-0.5 px-3 text-shadow-md uppercase">
                {type}
              </span>
            </div>
            <p className="text-black dark:text-white text-ellipsis overflow-hidden line-clamp-6 md:text-sm lg:text-lg">
              {dataDetail?.overview || "No overview yet"}
            </p>
          </div>
        </div>
        {!!dataVideos?.results.length && (
          <Carousel className="max-md:order-1 sm:col-span-2" setApi={setApi} plugins={[Fade()]}>
            <CarouselContent>
              {dataVideos?.results.map(({ key, name }) => (
                <CarouselItem key={key}>
                  <div
                    className={cn(
                      "h-60 sm:h-96 md:h-56 lg:h-72 relative rounded-full after:transition-opacity after:duration-500 after:absolute after:inset-0 after:left-auto after:w-20 after:bg-gradient-to-r after:from-transparent after:to-[#ffffff] dark:after:to-[#000000]  before:absolute before:inset-0 before:right-auto before:w-20 before:transition-opacity before:duration-500 before:bg-gradient-to-l before:from-transparent before:to-[#ffffff] dark:before:to-[#000000] before:z-10",
                      currentVideoIndex > 2 && "after:opacity-0",
                      currentVideoIndex === 0 && "before:opacity-0"
                    )}
                  >
                    <Image
                      className="rounded-md object-cover"
                      src={`${TMDB_BASE_IMG_URL}/${dataDetail?.backdrop_path}`}
                      alt={dataDetail?.name! ?? dataDetail?.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h6 className="mt-3">{name}</h6>
                </CarouselItem>
              ))}
            </CarouselContent>
            {count > 1 && (
              <>
                <Button
                  className={cn("transition-opacity duration-300 absolute top-[40%] left-2", {
                    "opacity-0 pointer-events-none ": currentVideoIndex === 0,
                  })}
                  variant="link"
                  size="icon"
                  onClick={() => api?.scrollPrev()}
                >
                  <ChevronLeft className="size-10 text-red-1" />
                </Button>
                <Button
                  className={cn("transition-opacity duration-300 absolute top-[40%] right-2", {
                    "opacity-0 pointer-events-none": currentVideoIndex + 1 === count,
                  })}
                  variant="link"
                  size="icon"
                  onClick={() => api?.scrollNext()}
                >
                  <ChevronRight className="size-10 text-red-1" />
                </Button>
              </>
            )}
          </Carousel>
        )}
      </div>
    </>
  );
}
