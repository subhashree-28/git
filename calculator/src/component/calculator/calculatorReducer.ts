import produce from "immer";
import { Action, State } from "./types";
import _ from "lodash";

export const reducer = produce((state: State, action: Action) => {
  const split_inputValue = _.split(state.inputValue, " ");
  const filteredNumbers = _.filter(
    split_inputValue,
    (value) => !isNaN(Number(value))
  ).map(_.toInteger);
  switch (action.type) {
    case "inputValue":
      state.inputValue = action.payload;
      break;

    case "set_clear":
      state.result = 0;
      break;

    case "arithmetic_operation":
      switch (action.payload) {
        case "+":
          state.result = _.sum(filteredNumbers);
          break;

        case "-":
          state.result = _.reduce(
            filteredNumbers.slice(1),
            (acc, num) => _.subtract(acc, num),
            filteredNumbers[0]
          );

          break;

        case "x":
          state.result = _.reduce(
            filteredNumbers,
            (acc, num) => _.multiply(acc, num),
            1
          );
          break;

        case "/":
          state.result = _.reduce(
            filteredNumbers.slice(1),
            (acc, num) => _.divide(acc, num),
            filteredNumbers[0]
          );
          break;
      }
      break;
  }
});
