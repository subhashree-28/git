import { ButtonProps, inputProps } from "./types";
import "./calculator.css";
import { useCalculatorContext } from "./CalculatorProvider";
import _ from "lodash";

export default function Calculator(props: inputProps) {
  const { inputs, operations } = props;

  const {
    handleInputValue,
    inputValue,
    handleArithmeticOperation,
    handleClear,
    result,
  } = useCalculatorContext();

  const resultArray: string[][] = [];

  const increment = 3;

  for (let i = 0; i < inputs.length; i += increment) {
    resultArray.push(inputs.slice(i, i + increment));
  }

  const handleButtonClick = (value: string) => {
    if (value === "AC") {
      handleInputValue("");
      handleClear("");
    } else if (value === "+/-") {
      const newValue = _.startsWith(inputValue, "-")
        ? inputValue.slice(1)
        : "-" + inputValue;
      handleInputValue(newValue);
    } else if (value === "X") {
      const clearValue = inputValue.slice(0, -1);
      handleInputValue(clearValue);
    } else if (_.includes("%", value)) {
      handleInputValue(inputValue + "%");
      const percent = _.toString(_.divide(_.toInteger(inputValue), 100));
      setTimeout(() => handleInputValue(percent), 500);
    } else if (value === "=") {
      const operators = ["+", "-", "x", "/"];
      const lastOperator = _.findLast(operators, (op) =>
        _.includes(inputValue, op)
      );

      if (lastOperator) {
        handleArithmeticOperation(lastOperator);
      }
    } else {
      handleInputValue(inputValue + value);
    }
  };

  const resultString = typeof result === "number" ? _.toString(result) : result;

  return (
    <div className="calculator_app">
      <input type="text" className="enter_value" value={inputValue} />
      <input type="text" className="result_value" value={resultString} />

      <div className="cal--row">
        {resultArray.map((input) => (
          <Button value={input} onClick={handleButtonClick} />
        ))}
        <div className="cal--col cal--operation">
          {operations.map((operation) => (
            <button
              className="val-button"
              onClick={() => handleButtonClick(operation)}
            >
              {operation}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Button(props: ButtonProps) {
  const { value, onClick } = props;

  return (
    <div className="cal--col">
      {value.map((val) => (
        <button className="val-button" onClick={() => onClick(val)}>
          {val}
        </button>
      ))}
    </div>
  );
}
