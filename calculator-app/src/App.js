import "./style.css";
import { useReducer } from "react";

// reducer function to operate calculator process
// ACTION modifided in in multiple TYPE and PAYLOAD
const ACTIONS = {
  ADD_DIGIT: "add_digit",
  OPERATIONS: "operations",
  CLEAR: "clear",
  DELETE_DIGIT: "delete",
  EVALUATE: "evaluate",
};
function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return;

    case ACTIONS.OPERATIONS:
      return;

    case ACTIONS.EVALUATE:
      return;

    case ACTIONS.CLEAR:
      return;

    case ACTIONS.DELETE_DIGIT:
      return;
  }
}

function App() {
  // state = currentOperand, previousOperand, operation
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="App">
      <div className="calculator-grid">
        {/* output */}
        <div className="output">
          <div className="previous-operand">
            {previousOperand}
            {operation}
          </div>
          <div className="current-operand">{currentOperand}</div>
        </div>
        {/* input */}
        <button className="span-two">AC</button>
        <button>DEL</button>
        <button>/</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>*</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button className="span-two">=</button>
      </div>
    </div>
  );
}

export default App;
