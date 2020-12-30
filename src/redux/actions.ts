import axios, { AxiosResponse } from "axios";
import { Dispatch, IList, IFilter } from "../interface";

export const GET_NON_ALCOHOLIC = "GET_NON_ALCOHOLIC";
export const GET_ALCOHOLIC = "GET_ALCOHOLIC";
export const SET_FILTER = "SET_FILTER";
export const RESET_FILTER = "RESET_FILTER";
export const RESET_LIST = "RESET_LIST";
export const RESET_STATE = "RESET_STATE";
export const SET_LOADING = "SET_LOADING";

export const getNonAlcoholic = () => (dispatch: Dispatch) =>
  axios
    .get(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
    )
    .then((resp: AxiosResponse<IList>) =>
      dispatch({ type: GET_NON_ALCOHOLIC, payload: resp })
    );

export const getAlcoholic = () => (dispatch: Dispatch) =>
  axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
    .then((resp: AxiosResponse<IList>) =>
      dispatch({ type: GET_ALCOHOLIC, payload: resp })
    );

export const setFilter = (filter: IFilter) => (dispatch: Dispatch) =>
  dispatch({ type: SET_FILTER, payload: filter });

export const resetFilters = () => (dispatch: Dispatch) =>
  dispatch({ type: RESET_FILTER });

export const resetList = () => (dispatch: Dispatch) =>
  dispatch({ type: RESET_LIST });

export const resetState = () => (dispatch: Dispatch) =>
  dispatch({ type: RESET_STATE });

export const setLoading = () => (dispatch: Dispatch) =>
  dispatch({ type: SET_LOADING });
