import { CREATE_FORM, FETCH_FORMS } from "./types";
import streams from "../apis/streams";

import history from "../history";

export const createForm = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post("/form", { ...formValues, userId });

  dispatch({ type: CREATE_FORM, payload: response.data });
  history.push("/");
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/form");

  dispatch({ type: FETCH_FORMS, payload: response.data });
};
