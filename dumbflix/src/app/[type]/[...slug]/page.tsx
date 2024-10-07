import MediaDetail from "@/components/media/MediaDetail";
import MediaListsByCategory from "@/components/media/MediaListsByCategory";

export default function MediaDetailPage({
  params,
}: {
  params: { type: "movie" | "tv"; slug: string[] };
}) {
  return params.slug[1] ? (
    <MediaDetail id={params.slug[1]} type={params.type} />
  ) : (
    <MediaListsByCategory type={params.type} slug={params.slug[0]} />
  );
}
