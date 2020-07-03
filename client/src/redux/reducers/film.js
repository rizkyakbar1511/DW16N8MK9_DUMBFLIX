import {
  GET_FILMS_ALL,
  GET_FILMS_DETAILS,
  ADD_FILM,
} from "../../constants/types";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  loading: true,
  filmsAll: null,
  filmDetails: null,
  data: {},
};

const GET_FILMS_ALL_PENDING = `${GET_FILMS_ALL}_${ActionType.Pending}`;
const GET_FILMS_ALL_FULFILLED = `${GET_FILMS_ALL}_${ActionType.Fulfilled}`;
const GET_FILMS_ALL_REJECTED = `${GET_FILMS_ALL}_${ActionType.Rejected}`;

const GET_FILMS_DETAILS_PENDING = `${GET_FILMS_DETAILS}_${ActionType.Pending}`;
const GET_FILMS_DETAILS_FULFILLED = `${GET_FILMS_DETAILS}_${ActionType.Fulfilled}`;
const GET_FILMS_DETAILS_REJECTED = `${GET_FILMS_DETAILS}_${ActionType.Rejected}`;

const ADD_FILM_PENDING = `${ADD_FILM}_${ActionType.Pending}`;
const ADD_FILM_FULFILLED = `${ADD_FILM}_${ActionType.Fulfilled}`;
const ADD_FILM_REJECTED = `${ADD_FILM}_${ActionType.Rejected}`;

const filmReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_FILMS_ALL_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_FILMS_ALL_FULFILLED:
      return {
        ...state,
        filmsAll: payload,
        loading: false,
      };
    case GET_FILMS_ALL_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case GET_FILMS_DETAILS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_FILMS_DETAILS_FULFILLED:
      return {
        ...state,
        filmDetails: payload,
        loading: false,
      };
    case GET_FILMS_DETAILS_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case ADD_FILM_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ADD_FILM_FULFILLED:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case ADD_FILM_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default filmReducer;
