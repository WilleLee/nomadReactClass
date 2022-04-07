import { useState } from "react";

function TimeConverter() {
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const onChange = (event) => {
    if(!flipped){
      setMinutes(event.target.value);
    }else{
      setHours(event.target.value);
    }
  };
  const onReset = () => {
    if(!flipped){
      setMinutes(0);
    }else{
      setHours(0);
    }
  };
  const onFlip = () => {
    onReset();
    setFlipped((currentValue) => !currentValue)
  };

  

  return (
    <div className="App">
      <h1>Super Converter</h1>

      <div>
        <label htmlFor="minutes">
          Minutes
        </label>
        <input
          value={!flipped ? minutes : hours * 60}
          onChange={onChange}
          id="minutes"
          type="number"
          placeholder="Minutes"
          disabled={flipped === true}
        />
      </div>

      <h3>you want to convert {minutes} minutes</h3>

      <div>
        <label
          htmlFor="hours"
        >
          Hours
        </label>
        <input
          value={flipped ? hours : Math.round(minutes / 60)}
          onChange={onChange}
          id="hours"
          type="number"
          placeholder="Hours"
          disabled={flipped === false}
        />
      </div>

      <div>
        <button onClick={onReset}>reset</button>
        <button onClick={onFlip}>flip</button>
      </div>

    </div>
  );
}

export default TimeConverter;
