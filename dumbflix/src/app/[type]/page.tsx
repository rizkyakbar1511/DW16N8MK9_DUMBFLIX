import Hero from "@/components/Hero";
import { MediaLists, MediaListsLink } from "@/components/media/MediaLists";
import { notFound } from "next/navigation";

export default function MediaListsPage({ params }: { params: { type: "movie" | "tv" } }) {
  if (!["tv", "movie"].includes(params.type)) notFound();
  return (
    <>
      <Hero type={params.type} />
      <MediaLists type={params.type} list="top_rated">
        <MediaListsLink title="Top Rated" href={`/${params.type}/top_rated`} />
      </MediaLists>
      <MediaLists type={params.type} list="popular">
        <MediaListsLink title="Popular" href={`/${params.type}/popular`} />
      </MediaLists>
      <MediaLists type={params.type} list={params.type === "tv" ? "on_the_air" : "upcoming"}>
        <MediaListsLink
          title="Upcoming"
          href={`/${params.type}/${params.type === "tv" ? "on_the_air" : "upcoming"}`}
        />
      </MediaLists>
      <MediaLists type={params.type} list={params.type === "tv" ? "airing_today" : "now_playing"}>
        <MediaListsLink
          title={params.type === "tv" ? "Airing Today" : "Now Playing"}
          href={`/${params.type}/${params.type === "tv" ? "airing_today" : "now_playing"}`}
        />
      </MediaLists>
    </>
  );
}
