import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import authReducer from "../reducers/auth";
import filmReducer from "../reducers/film";
import episodeReducer from "../reducers/episode";
import transactionsReducer from "../reducers/transaction";
import promise from "redux-promise-middleware";

// Global state
const reducers = combineReducers({
  auth: authReducer,
  film: filmReducer,
  episode: episodeReducer,
  transactions: transactionsReducer,
});

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, storeEnhancers(applyMiddleware(promise)));

export default store;
