/* eslint-disable @typescript-eslint/default-param-last */
import { HYDRATE } from "next-redux-wrapper";

import type { Action, AppState } from "./interface";
import { ActionTypes } from "./interface";

export const exampleInitialState: AppState = {
  count: 0,
  error: null,
  lastUpdate: 0,
  light: false,
  placeholderData: null,
};

const reducer = (
  state = exampleInitialState,
  action: Action | { type: typeof HYDRATE; payload: AppState }
): AppState => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case ActionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      };

    case ActionTypes.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 },
      };

    case ActionTypes.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 },
      };

    case ActionTypes.RESET:
      return {
        ...state,
        ...{ count: exampleInitialState.count },
      };

    case ActionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data },
      };

    case ActionTypes.TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.ts, light: !!action.light },
      };

    default:
      return state;
  }
};

export default reducer;
