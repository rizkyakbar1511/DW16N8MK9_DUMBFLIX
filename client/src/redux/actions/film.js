import {
  GET_FILMS_ALL,
  GET_FILMS_DETAILS,
  ADD_FILM,
} from "../../constants/types";
import { API, setAuthToken } from "../../config/api";

export const getFilms = () => {
  return {
    type: GET_FILMS_ALL,
    payload: async () => {
      try {
        const { data } = await API.get("/films");
        return data;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) return data.error.message;
        }
      }
    },
  };
};

export const getFilmDetails = (id) => {
  return {
    type: GET_FILMS_DETAILS,
    payload: async () => {
      try {
        const { data } = await API.get(`/film/${id}/episodes`);
        return data;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) return data.message;
        }
      }
    },
  };
};

export const addFilm = (film) => {
  return {
    type: ADD_FILM,
    payload: async () => {
      try {
        const {
          data: { data },
        } = await API.post("/film", film);
        return data;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) return data.message;
        }
      }
    },
  };
};
