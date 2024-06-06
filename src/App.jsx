import { useState } from "react";

import "./App.css";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const handler = (e) => {
    setExpression((prev) => prev + e.target.innerText);
  };
  const evaluate = () => {
    try {
      if (expression.length == 0) {
        throw new Error("Empty String");
      }
      const ans = eval(expression);
      setResult("" + ans);
      console.log(ans);
    } catch (e) {
      setResult("Error");
      console.log(e);
    }
  };
  return (
    <>
      <div className="card">
        <h1>React Calculator</h1>
        <input readOnly type="text" name="" id="exp" value={expression} />
        {result.length > 0 && <p>{result}</p>}
        <div className="keypad">
          <button onClick={handler} className="keys">
            7
          </button>
          <button onClick={handler} className="keys">
            8
          </button>
          <button onClick={handler} className="keys">
            9
          </button>
          <button onClick={handler} className="keys">
            +
          </button>
          <button onClick={handler} className="keys">
            4
          </button>
          <button onClick={handler} className="keys">
            5
          </button>
          <button onClick={handler} className="keys">
            6
          </button>
          <button onClick={handler} className="keys">
            -
          </button>
          <button onClick={handler} className="keys">
            1
          </button>
          <button onClick={handler} className="keys">
            2
          </button>
          <button onClick={handler} className="keys">
            3
          </button>
          <button onClick={handler} className="keys">
            *
          </button>
          <button
            onClick={() => {
              setExpression("");
              setResult("");
            }}
            className="keys"
          >
            C
          </button>
          <button onClick={handler} className="keys">
            0
          </button>
          <button onClick={evaluate} className="keys">
            =
          </button>
          <button onClick={handler} className="keys">
            /
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
