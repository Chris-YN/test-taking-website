import "./Navigation.css";
import { useNavigate } from "react-router-dom";


// QuizNavicagiton.js
const QuizNavigation = (props) => {
  const navigate = useNavigate();
  let currentNum = props.currentIndex
  console.log(currentNum);

  const submitHandler = () => {
    navigate("/result")
  };

  const backButtonHandler = () => {
    if (currentNum === 0) {
      return
    } else {
      currentNum--;
      props.setCurrentIndex(currentNum);
    }
  };

  const nextButtonHandler = () => {
    if (currentNum === props.testLength - 1) {
      return
    } else {
      currentNum++;
      props.setCurrentIndex(currentNum)
    }
  };

  return (
    <ul className="quizNavButtonsContainer">
      <button onClick={submitHandler}>Submit Test</button>
      <li><button onClick={backButtonHandler}>Back</button></li>
      <li><button onClick={nextButtonHandler}>Next</button></li>
    </ul>
  );
};

export default QuizNavigation;