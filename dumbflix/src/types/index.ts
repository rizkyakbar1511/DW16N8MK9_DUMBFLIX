export type MergeTypes<T, U = {}, V = {}> = Omit<Omit<T, keyof U>, keyof V> & U & V;

type MediaType = "tv" | "movie" | "person";

export type TVSeries = {
  adult: boolean;
  media_type: MediaType;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
};

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  media_type: MediaType;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
};

export type Person = {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string;
  gender: number;
  homepage: string;
  id: number;
  imdb_id: number;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
};

export type People = {
  id: number;
  name: string;
  original_name: string;
  media_type: MediaType;
  adult: boolean;
  popularity: number;
  gender: number;
  known_for_department: string;
  profile_path: string;
  known_for: (TVSeries | Movie)[];
};

export type Genre = {
  id: number;
  name: string;
};

export type Video = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};

export type Videos = {
  id: number;
  results: Video[];
};

export type BaseResponse<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};
