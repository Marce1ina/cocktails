import { Dispatch } from "./interface";

export const fetchDataAction = async (dispatch: Dispatch) => {
  const URL =
    "https://api.tvmaze.com/singlesearch/shows?q=la-casa-de-papel&embed=episodes";

  const data = await fetch(URL);
  const dataJSON = await data.json();

  return dispatch({
    type: "FETCH_DATA",
    payload: dataJSON._embedded.episodes,
  });
};
