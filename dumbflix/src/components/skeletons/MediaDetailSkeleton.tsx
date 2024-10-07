import { Skeleton } from "../ui/skeleton";

export default function MediaDetailSkeleton() {
  return (
    <>
      <div className="h-[calc(50svh-72px)] md:h-[calc(80svh-72px)] lg:h-[calc(100svh-72px)]">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-24 md:gap-20 lg:gap-24 p-10">
        <div className="flex max-xs:flex-col max-xs:items-center max-md:order-2 items-start gap-5 md:col-span-3">
          <Skeleton className="relative w-full max-w-40 lg:max-w-[200px] h-56 lg:h-[300px] flex-none" />
          <div className="w-full">
            <Skeleton className="w-full h-8" />
            <div className="flex gap-4 my-4">
              <Skeleton className="w-24 h-8" />
              <Skeleton className="w-14 h-8" />
            </div>
            <Skeleton className="w-full h-5 mb-2" />
            <Skeleton className="w-full h-5 mb-2" />
            <Skeleton className="w-full h-5 mb-2" />
            <Skeleton className="w-full h-5 mb-2" />
            <Skeleton className="w-44 h-5 mb-2" />
          </div>
        </div>
        <div className="max-md:order-1 sm:col-span-2">
          <Skeleton className="w-full h-60 xs:h-72 md:h-56 lg:h-72 mb-5" />
          <Skeleton className="w-44 h-8" />
        </div>
      </div>
    </>
  );
}
