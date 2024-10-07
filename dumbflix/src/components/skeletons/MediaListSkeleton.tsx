import { Skeleton } from "../ui/skeleton";

export default function MediaSkeleton() {
  return (
    <div className="container p-5">
      <Skeleton className="w-1/5 h-11" />
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 mt-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} className="h-80" />
        ))}
      </div>
    </div>
  );
}
