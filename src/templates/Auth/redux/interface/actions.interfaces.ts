export enum ActionTypes {
  FAILURE = "FAILURE",
  REQUEST = "REQUEST",
  SUCCESS = "SUCCESS",
  LOGGED_IN = "LOGGED_IN",
  RESET_ERRORS = "RESET_ERRORS",
}

export type Action = Failure | Request | Success | LoggedIn | ResetError;

export interface Failure {
  payload: null | Error;
  type: ActionTypes.FAILURE;
  error: Error;
}

export interface Request {
  type: ActionTypes.REQUEST;
}

export interface Success {
  type: ActionTypes.SUCCESS;
}

export interface LoggedIn {
  type: ActionTypes.LOGGED_IN;
}

export interface ResetError {
  type: ActionTypes.RESET_ERRORS;
}
