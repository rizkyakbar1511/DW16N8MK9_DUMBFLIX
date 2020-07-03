import { GET_TRANSACTIONS, UPDATE_TRANSACTION } from "../../constants/types";
import { API } from "../../config/api";

export const getTransactions = () => {
  return {
    type: GET_TRANSACTIONS,
    payload: async () => {
      try {
        const { data } = await API.get("/transactions");
        console.log(data);
        return data;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) return data.error;
        }
      }
    },
  };
};

export const updateTransaction = (id, body) => {
  return {
    type: UPDATE_TRANSACTION,
    payload: async () => {
      try {
        const {
          data: { data },
        } = await API.patch(`/transaction/${id}`, body);
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
