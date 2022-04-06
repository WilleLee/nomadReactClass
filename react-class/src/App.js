import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((currentValue) => {
      return counter + 1;
    });
  };


  return (
    <div className="App">
      <h1>current count: {counter}</h1>
      <button onClick={onClick}>click me!</button>
    </div>
  );
}

export default App;
