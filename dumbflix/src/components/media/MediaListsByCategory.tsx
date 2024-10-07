"use client";
import { createUrlBuilder } from "@/lib/utils";
import { getData } from "@/services/api";
import { BaseResponse, MergeTypes, Movie, TVSeries } from "@/types";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import MediaCard from "./MediaCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { motion, useAnimationControls } from "framer-motion";

type MediaListsByCategoryProps = {
  slug: string;
  type: string;
};

export default function MediaListsByCategory({ type, slug }: MediaListsByCategoryProps) {
  const controls = useAnimationControls();
  const paginationRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery({
    placeholderData: keepPreviousData,
    queryKey: ["category_lists", slug, page],
    queryFn: () =>
      getData<BaseResponse<MergeTypes<Movie, TVSeries>>>(
        createUrlBuilder(process.env.NEXT_PUBLIC_TMDB_API_URL)
          .addPathParam(type)
          .addPathParam(slug)
          .addQueryParam("language", "en-US")
          .addQueryParam("page", page)
          .build()
      ),
  });

  const getPageNumbers = () => {
    const TMDB_MAX_PAGES = 500;
    const pages: React.JSX.Element[] = [];
    const start = Math.max(2, data?.page! - 2);
    const end = Math.min(TMDB_MAX_PAGES - 1, data?.page! + 2);
    const jump = 5;

    // First page
    pages.push(
      <PaginationItem>
        <PaginationLink href="#" onClick={() => setPage(1)} isActive={data?.page === 1}>
          {1}
        </PaginationLink>
      </PaginationItem>
    );

    // Ellipsis before current range
    if (start > 2)
      pages.push(
        <PaginationItem>
          <PaginationEllipsis
            className="cursor-pointer"
            onClick={() => setPage(Math.max(data?.page! - jump, 1))}
          />
        </PaginationItem>
      );

    // Current range
    for (let i = start; i <= end; i++) {
      pages.push(
        <PaginationItem>
          <PaginationLink href="#" onClick={() => setPage(i)} isActive={data?.page === i}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Ellipsis after current range
    if (end < data?.total_pages! - 1)
      pages.push(
        <PaginationItem>
          <PaginationEllipsis
            className="cursor-pointer"
            onClick={() => setPage(Math.min(data?.page! + jump, TMDB_MAX_PAGES))}
          />
        </PaginationItem>
      );

    // Last page
    if (TMDB_MAX_PAGES > 1)
      pages.push(
        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={() => setPage(TMDB_MAX_PAGES)}
            isActive={data?.page === TMDB_MAX_PAGES}
          >
            {TMDB_MAX_PAGES}
          </PaginationLink>
        </PaginationItem>
      );

    return pages;
  };

  useEffect(() => {
    const handleScroll = () => {
      // const scrollTop = window.scrollY || document.documentElement.scrollTop;
      // const windowHeight = window.innerHeight;
      // const fullHeight = document.documentElement.scrollHeight;
      // // Check if the user is at the bottom of the page
      // if (scrollTop + windowHeight >= fullHeight) {
      //   controls.start({
      //     position: "absolute",
      //     bottom: 0,
      //     transition: { duration: 0.5 },
      //   });
      // } else {
      //   controls.start({
      //     position: "fixed",
      //     bottom: 0,
      //     transition: { duration: 0.5 },
      //   });
      // }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  if (isLoading) return "loading...";

  return (
    <main className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-5 p-10">
      <h1 className="col-span-full text-2xl font-bold">TITLE</h1>
      {data?.results.map((result) => (
        <MediaCard
          key={result.id}
          type={type}
          hovered={hovered}
          setHovered={setHovered}
          index={result.id}
          data={result}
        />
      ))}
      <motion.div
        className="col-span-full sticky bottom-0 left-0 w-full p-4 shadow-md z-50"
        animate={controls}
        ref={paginationRef}
      >
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" onClick={() => setPage((prev) => prev - 1)} />
            </PaginationItem>
            {getPageNumbers().map((page) => page)}
            <PaginationItem>
              <PaginationNext href="#" onClick={() => setPage((prev) => prev + 1)} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </motion.div>
    </main>
  );
}
