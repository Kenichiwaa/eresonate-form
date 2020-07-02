import { CREATE_FORM, FETCH_FORMS } from "./types";
import streams from "../apis/streams";

import history from "../history";

export const createForm = (formValues) => async (dispatch) => {
  const response = await streams.post("/send_report", {
    ...formValues,
  });

  dispatch({ type: CREATE_FORM, payload: response.data });
  alert(JSON.stringify(response.data));
  console.log(JSON.stringify(response.data));
  history.push("/thanks");
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/send_report");

  dispatch({ type: FETCH_FORMS, payload: response.data });
};
