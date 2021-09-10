import {githubReducer} from "../reducers/github.reducer";
import {createStore} from "redux";

const store = createStore(githubReducer);

export default store;