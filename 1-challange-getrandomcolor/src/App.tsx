import * as React from "react";
import "./App.css";

const App = (): JSX.Element => {
  const [color, setColor] = React.useState<string>("");
  const [answers, setAnswers] = React.useState<string[]>([]);
  const [isCorrect, setIsCorrect] = React.useState<boolean | undefined>(
    undefined
  );

  const getRandomColor = () => {
    const digits = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    const randomColor = new Array(6)
      .fill("")
      .map(() => digits[Math.floor(Math.random() * digits.length)])
      .join("");
    return `#${randomColor}`;
  };

  const generateColor = () => {
    const actualColor = getRandomColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  };

  React.useEffect(() => {
    generateColor();
  }, []);

  const onChooseAnswer = (answer: string) => {
    if (answer === color) {
      setIsCorrect(true);
      setTimeout(() => {
        generateColor();
      }, 800);
      
      setTimeout(() => {
        setIsCorrect(undefined)
      }, 500);

    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="App">
      <div className="objectColor" style={{ backgroundColor: color }}></div>
      <div>
        {answers.map((answer, index) => (
          <button
            key={index}
            className="btn-answer"
            onClick={() => onChooseAnswer(answer)}
          >
            {answer}
          </button>
        ))}
      </div>
      {isCorrect === true && (
        <span className="correct">"Yes, its correct"</span>
      )}
      {isCorrect === false && (
        <span className="wrong">"No, its wrong"</span>
      )}
    </div>
  );
};

export default App;
