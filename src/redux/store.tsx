import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import { reducer } from "./reducer";

const Store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default Store;
