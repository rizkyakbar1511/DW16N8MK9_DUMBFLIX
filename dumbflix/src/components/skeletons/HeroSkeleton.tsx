import { Skeleton } from "../ui/skeleton";

export default function HeroSkeleton() {
  return (
    <div className="p-6">
      <Skeleton className="w-full h-screen" />
    </div>
  );
}
