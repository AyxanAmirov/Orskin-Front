import { createStore } from "redux";
import { isVisibleReducer } from "./reducer";

export const globalStore = createStore(isVisibleReducer)