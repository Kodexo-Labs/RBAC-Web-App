/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import produce from "immer";
import identity from "lodash-es/identity";
import { createAction, handleActions } from "redux-actions";

export const createAsyncAction = (type: string, options?: any) =>
  produce({}, (draft: any) => {
    ["request", "success", "failure"].forEach((suffix) => {
      draft[suffix] = createAction(
        `${
          options?.prefix ? `${options.prefix}/` : ""
        }${type}/${suffix}`.toUpperCase(),
        identity
      );
    });
  });

export { createAction, handleActions };
