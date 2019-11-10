import { ADD, SUB, RESTART } from "./types";

export const add = () => (dispatch) => {
  dispatch({
    type: ADD
  });
};

export const sub = () => (dispatch) => {
  dispatch({
    type: SUB
  });
};

export const restart = () => (dispatch) => {
  dispatch({
    type: RESTART
  });
};
