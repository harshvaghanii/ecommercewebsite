import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import mainReducer from "../reducers";

const store = createStore(
    mainReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))

    // The composeWithDevTools is used to see the visualisation of states in the console tab
);

export default store;
