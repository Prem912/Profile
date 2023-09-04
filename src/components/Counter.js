import React, { useState } from "react";
import "./Counter.css";
function Counter() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <div>
        <p className="count">Count: {count}</p>
        <button onClick={incrementCounter}>Increment</button>
      </div>
    </div>
  );
}

export default Counter;
