import { createStore } from "redux";

import { IState, IAction } from "../interface";

const initialState: IState = {
  list: [],
  filters: [],
};

const reducer = (state: IState = initialState, action: IAction): IState => {
  switch (action.type) {
    default:
      return state;
  }
};

const Store = createStore(reducer);

export default Store;
