/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable import/extensions */
import { ActionTypes } from "./interface";
import type * as actionIs from "./interface/actions.interfaces";
import type { User } from "./interface/index";

export function failure(error: unknown | any): actionIs.Failure {
  return {
    type: ActionTypes.FAILURE,
    error,
  };
}

export function increment(): actionIs.Increment {
  return { type: ActionTypes.INCREMENT };
}

export function decrement(): actionIs.Decrement {
  return { type: ActionTypes.DECREMENT };
}

export function reset(): actionIs.Reset {
  return { type: ActionTypes.RESET };
}

export function loadData(): actionIs.LoadData {
  return { type: ActionTypes.LOAD_DATA };
}

export function loadDataSuccess(data: User[]): actionIs.LoadDataSuccess {
  return {
    type: ActionTypes.LOAD_DATA_SUCCESS,
    data,
  };
}

export function startClock(): actionIs.StartClock {
  return { type: ActionTypes.START_CLOCK };
}

export function tickClock(isServer: boolean): actionIs.TickClock {
  return {
    type: ActionTypes.TICK_CLOCK,
    light: !isServer,
    ts: Date.now(),
  };
}
