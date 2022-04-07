import { memo, useState } from "react";

function Btn({text, changeValue}){
    return (
        <button
            onClick={changeValue}
            style={{
                backgroundColor: "tomato",
                color: "white",
                padding: "10px 20px",
                border: 0,
                borderRadius: 10,
            }}
        >
            {text}
        </button>
    );
}

// if props doesn't change, a component doesn't need to be re-rendered!
const MemorizedBtn = memo(Btn);
// memorized versions of Btn

function App() {
    const [value, setValue] = useState("save changes");
    const changeValue = () => setValue("revert changes");
  

  return (
    <div className="App">
        <div>
            <MemorizedBtn text={value} changeValue={changeValue} />
            <MemorizedBtn text="continue" />
        </div>
    </div>
  );
}

export default App;
