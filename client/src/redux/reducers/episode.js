import { ADD_EPISODE } from "../../constants/types";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  data: {},
};

const ADD_EPISODE_PENDING = `${ADD_EPISODE}_${ActionType.Pending}`;
const ADD_EPISODE_FULFILLED = `${ADD_EPISODE}_${ActionType.Fulfilled}`;
const ADD_EPISODE_REJECTED = `${ADD_EPISODE}_${ActionType.Rejected}`;

const episodeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_EPISODE_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ADD_EPISODE_FULFILLED:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case ADD_EPISODE_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default episodeReducer;
