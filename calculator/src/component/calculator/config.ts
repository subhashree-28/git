import { State } from "./types";

export const inputs = [
  "AC",
  "X",
  "+/-",
  "7",
  "8",
  "9",
  "4",
  "5",
  "6",
  "1",
  "2",
  "3",
  "%",
  "0",
  ".",
];

export const operations = [" / ", " x ", " + ", " - ", "="];

export const initialState: State = {
  inputValue: "",
  result: 0,
};
