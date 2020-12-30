import { IAction, IState } from "../interface";
import {
  GET_ALCOHOLIC,
  GET_DRINK,
  GET_NON_ALCOHOLIC,
  RESET_FILTER,
  RESET_LIST,
  RESET_STATE,
  SET_FILTER,
  SET_LOADING,
} from "./actions";

const initialState: IState = {
  list: [],
  filter: {},
  item: {},
};

export const reducer = (
  state: IState = initialState,
  action: IAction
): IState => {
  switch (action.type) {
    case GET_NON_ALCOHOLIC:
      return { ...state, list: action.payload.data.drinks, loading: false };
    case GET_ALCOHOLIC:
      return { ...state, list: action.payload.data.drinks, loading: false };
    case SET_FILTER: {
      return { ...state, filter: action.payload };
    }
    case RESET_FILTER: {
      return { ...state, filter: {} };
    }
    case RESET_LIST: {
      return { ...state, list: [] };
    }
    case RESET_STATE: {
      return { list: [], filter: {}, item: {} };
    }
    case SET_LOADING: {
      return { ...state, loading: true };
    }
    case GET_DRINK: {
      return { ...state, item: action.payload.data.drinks[0], loading: false };
    }
    default:
      return state;
  }
};
