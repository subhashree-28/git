import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { CalculatorContextProps } from "./types";
import { reducer } from "./calculatorReducer";
import { initialState } from "./config";

export const CalculatorContext = createContext<CalculatorContextProps | null>(
  null
);

export default function CalculatorProvider(props: PropsWithChildren) {
  const { children } = props;

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputValue = (value: string) => {
    dispatch({ type: "inputValue", payload: value });
  };

  const handleClear = (value: string) => {
    dispatch({ type: "set_clear" });
  };

  const handleArithmeticOperation = (actionType: string) => {
    dispatch({ type: "arithmetic_operation", payload: actionType });
  };

  const memoizedValue = useMemo(
    () => ({
      inputValue: state.inputValue,
      result: state.result,
      handleInputValue,
      handleArithmeticOperation,
      handleClear,
    }),
    [state, dispatch]
  );

  return (
    <CalculatorContext.Provider value={memoizedValue}>
      {children}
    </CalculatorContext.Provider>
  );
}

export const useCalculatorContext = () => {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error(
      `useCalculatorContext must be used within a CalculatorProvider`
    );
  }
  return context;
};
