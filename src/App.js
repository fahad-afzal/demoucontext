import { useState } from "react";
import Parent from "./Parent";

function App() {
  let [number, setNumber] = useState(45);
  return (
    <div>
      From App.js
      <Parent num={number} />
      <button
        onClick={() => {
          setNumber(++number);
        }}
      >
        Update Number
      </button>
    </div>
  );
}

export default App;
