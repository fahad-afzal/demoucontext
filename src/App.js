import { useState } from "react";
import Parent from "./Parent";
import ValueContext from "./ValueContext";

function App() {
  // let [number, setNumber] = useState(45);
  let value = 55;
  return (
    <ValueContext.Provider value={value}>
      <div>
        From App.js
        <Parent />
      </div>
    </ValueContext.Provider>
  );
}

export default App;
