import "./styles.css";
import { useMemo, useState } from "react";
function sum(a) {
  console.log("function sum is called..");
  return a * a;
}
export default function App() {
  const [count, setCount] = useState(0);
  const [val, setval] = useState();
  const value = useMemo(() => sum(val), [val]);
  return (
    <div className="App">
      <h1>count:{count}</h1>
      <h1>square:{value}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count +
      </button>
      <input
        type="number"
        value={val}
        onChange={(e) => {
          setval(e.target.value);
        }}
        placeholder="enter number"
      />
    </div>
  );
}
