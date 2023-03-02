import type { User } from "./index";

export enum ActionTypes {
  FAILURE = "FAILURE",
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  RESET = "RESET",
  LOAD_DATA = "LOAD_DATA",
  LOAD_DATA_SUCCESS = "LOAD_DATA_SUCCESS",
  START_CLOCK = "START_CLOCK",
  TICK_CLOCK = "TICK_CLOCK",
}

export type Action =
  | Failure
  | Increment
  | Decrement
  | Reset
  | LoadData
  | LoadDataSuccess
  | StartClock
  | TickClock;

export interface Failure {
  type: ActionTypes.FAILURE;
  error: Error;
}

export interface Increment {
  type: ActionTypes.INCREMENT;
}

export interface Decrement {
  type: ActionTypes.DECREMENT;
}

export interface Reset {
  type: ActionTypes.RESET;
}

export interface LoadData {
  type: ActionTypes.LOAD_DATA;
}

export interface LoadDataSuccess {
  type: ActionTypes.LOAD_DATA_SUCCESS;
  data: User[];
}

export interface StartClock {
  type: ActionTypes.START_CLOCK;
}

export interface TickClock {
  type: ActionTypes.TICK_CLOCK;
  light: boolean;
  ts: number;
}
