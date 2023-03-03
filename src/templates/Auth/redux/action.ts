import type * as actionIs from "./interface/actions.interfaces";
import { ActionTypes } from "./interface/actions.interfaces";

export function loginFailure(error: unknown | any): actionIs.Failure {
  return { type: ActionTypes.FAILURE, error, payload: error };
}

export function loginSuccess(): actionIs.Success {
  return { type: ActionTypes.SUCCESS };
}

export function loginRequest(): actionIs.Request {
  return { type: ActionTypes.REQUEST };
}

export function loggedIn(): actionIs.LoggedIn {
  return { type: ActionTypes.LOGGED_IN };
}

export function resetErrors(): actionIs.ResetError {
  return { type: ActionTypes.RESET_ERRORS };
}
