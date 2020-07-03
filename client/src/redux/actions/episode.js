import { ADD_EPISODE } from "../../constants/types";
import { API, setAuthToken } from "../../config/api";

export const addEpisode = (episode) => {
  return {
    type: ADD_EPISODE,
    payload: async () => {
      try {
        const {
          data: { data },
        } = await API.post("/episode", episode);
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
