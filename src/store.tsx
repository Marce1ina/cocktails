import * as React from "react";
import { IState, IAction } from "./interface";

const initialState: IState = {
  episodes: [],
  favourites: [],
};

export const Store = React.createContext(initialState);

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    default:
      return state;
  }
};

export const StoreProvider = ({
  children,
}: JSX.ElementChildrenAttribute): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
