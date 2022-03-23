import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { authMiddleware } from "./authMiddleware";
import { cardMiddleware } from "./cardMiddleware";

export const store = createStore(rootReducer, applyMiddleware(authMiddleware));
