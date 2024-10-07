import Hero from "@/components/Hero";
import { MediaLists, MediaListsLink } from "@/components/media/MediaLists";

export default async function Home() {
  return (
    <>
      <Hero type="all" />
      <MediaLists type="tv" list="top_rated">
        <MediaListsLink title="TV Series" href="/tv" />
      </MediaLists>
      <MediaLists type="movie" list="top_rated">
        <MediaListsLink title="Movies" href="/movie" />
      </MediaLists>
    </>
  );
}
