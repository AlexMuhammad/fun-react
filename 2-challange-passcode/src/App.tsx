import * as React from "react";
import "./App.css";

const password = "1234";
const numberPads = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const steps = [0, 1, 2, 3];

const App = () => {
  const [pressedNumbers, setPressedNumbers] = React.useState<number[]>([]);
  const [isCorrect, setIsCorrect] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");
  const [success, setSuccess] = React.useState<string>("");

  React.useEffect(() => {
    if (pressedNumbers.length === 1) {
      return setError("");
    }

    if (pressedNumbers.length === password.length) {
      if (pressedNumbers.join("") === password) {
        setIsCorrect(true);
        setSuccess("you corrects");
        setPressedNumbers([]);
      } else {
        setIsCorrect(false);
        setError("you are wrong");
        setPressedNumbers([]);
      }
    }
  }, [pressedNumbers]);

  const onPressedPad = (item: number) => {
    setPressedNumbers((curr) => [...curr, item]);
  };

  return (
    <>
      <div style={{ marginBottom: "1rem", color: "#fff" }}>
        {isCorrect ? (
          <span className="success">{success}</span>
        ) : (
          <span className="error">{error}</span>
        )}
      </div>
      <div className="display-pad">
        {steps.map((val, index) => (
          <div key={index} className="value-pad">
            {pressedNumbers[val]}
          </div>
        ))}
      </div>
      <div className="board-pad">
        {numberPads.map((pad, index) => (
          <button key={index} className="pad" onClick={() => onPressedPad(pad)}>
            {pad}
          </button>
        ))}
      </div>
    </>
  );
};

export default App;
