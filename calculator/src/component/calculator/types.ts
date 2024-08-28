export interface inputProps {
  inputs: string[];
  operations: string[];
}

export interface ButtonProps {
  value: string[];
  onClick: (value: string) => void;
}

export type CalculatorContextProps = {
  handleInputValue: (value: string) => void;
  handleArithmeticOperation: (actionType: string) => void;
  handleClear: (value: string) => void;
  inputValue: string;
  result: number;
};

export interface State {
  inputValue: string;
  result: number;
}

export type Action =
  | { type: "inputValue"; payload: string }
  | { type: "set_clear" }
  | { type: "arithmetic_operation"; payload: string }
  | { type: "result"; payload: number };
