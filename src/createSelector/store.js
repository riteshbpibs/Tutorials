import { createStore } from "redux";
import { PostReducer } from "./PostReducer";

const store = createStore(PostReducer);

export default store;
