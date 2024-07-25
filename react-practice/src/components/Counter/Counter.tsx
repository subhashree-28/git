import React, { useState } from "react";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="App">
      <div className="text">Counter</div>
      <br />
      <div className="counting">{count}</div>
      <button
        className="minusButton"
        onClick={decrement}
        disabled={count === 0}
      >
        -
      </button>
      <button className="plusButton" onClick={increment}>
        +
      </button>
      <br />
      <button className="resetButton" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
