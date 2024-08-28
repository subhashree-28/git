import Calculator from "./component/calculator/Calculator";
import CalculatorProvider from "./component/calculator/CalculatorProvider";
import { inputs, operations } from "./component/calculator/config";

function App() {
  return (
    <div className="App">
      <CalculatorProvider>
        <Calculator inputs={inputs} operations={operations}/>
      </CalculatorProvider>
    </div>
  );
}

export default App;
