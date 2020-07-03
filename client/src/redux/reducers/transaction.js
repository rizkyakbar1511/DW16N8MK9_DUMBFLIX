import { GET_TRANSACTIONS, UPDATE_TRANSACTION } from "../../constants/types";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  transactions: null,
  data: {},
};

const GET_TRANSACTIONS_PENDING = `${GET_TRANSACTIONS}_${ActionType.Pending}`;
const GET_TRANSACTIONS_FULFILLED = `${GET_TRANSACTIONS}_${ActionType.Fulfilled}`;
const GET_TRANSACTIONS_REJECTED = `${GET_TRANSACTIONS}_${ActionType.Rejected}`;

const UPDATE_TRANSACTION_PENDING = `${UPDATE_TRANSACTION}_${ActionType.Pending}`;
const UPDATE_TRANSACTION_FULFILLED = `${UPDATE_TRANSACTION}_${ActionType.Fulfilled}`;
const UPDATE_TRANSACTION_REJECTED = `${UPDATE_TRANSACTION}_${ActionType.Rejected}`;

const transactionsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TRANSACTIONS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_TRANSACTIONS_FULFILLED:
      return {
        ...state,
        transactions: payload,
        loading: false,
      };
    case GET_TRANSACTIONS_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case UPDATE_TRANSACTION_PENDING:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_TRANSACTION_FULFILLED:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case UPDATE_TRANSACTION_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default transactionsReducer;
