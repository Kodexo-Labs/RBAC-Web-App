/* eslint-disable @typescript-eslint/default-param-last */
import { HYDRATE } from "next-redux-wrapper";

import type { Action, InitialState } from "./interface";
import { ActionTypes } from "./interface";

export const initialState: InitialState = {
  errors: null,
  loading: false,
};

const reducer = (
  state = initialState,
  action: Action | { type: typeof HYDRATE; payload: InitialState }
): InitialState => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case ActionTypes.FAILURE:
      return {
        ...state,
        ...{ errors: action.payload, loading: false },
      };

    default:
      return state;
  }
};

export default reducer;
