import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div className="counter">
            <h3>Counter Demo</h3>
            <div className="counter-display">
                <span className="count-number">{count}</span>
            </div>
            <div className="counter-buttons">
                <button onClick={decrement} className="counter-btn decrement">
                    -
                </button>
                <button onClick={reset} className="counter-btn reset">
                    Reset
                </button>
                <button onClick={increment} className="counter-btn increment">
                    +
                </button>
            </div>
            <p className="counter-description">Click the buttons to interact with the counter. This demonstrates React state management!</p>
        </div>
    );
}

export default Counter;
