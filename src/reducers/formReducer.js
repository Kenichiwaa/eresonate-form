import _ from "lodash";

import { CREATE_FORM, FETCH_FORMS } from "../actions/types";

export default (state = {}, action) => {
  console.log("action", action);
  switch (action.type) {
    case FETCH_FORMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case CREATE_FORM:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
