import "./QuizAndNavigation.css";
import { useState } from "react";
import Card from "../UI/Card/Card";
import AnswerChoices from "./AnswerChoices.js/AnswerChoices";
import Question from "./Question/Question";
import "./QuizAndNavigation.css";
import QuizNavigation from "./QuizNavigation/QuizNavigation";


// QuizAndNavigation.js
const QuizAndNavigation = (props) => {
  const [currentQuestionNum, setCurrentQuestionNum] = useState(1)
  const [currentQuestionObj, setCurrentQuestionObj] = useState(props.testObjArray[0])

  const questionString = currentQuestionObj.testObjArray.question;
  const answerOptionArray = currentQuestionObj.answerButtons;

  return (
    <div>
      <div className="quizAndChoices">
        <Card>
          <Question></Question>
        </Card>

        <Card>
          <AnswerChoices></AnswerChoices>
        </Card>

      </div>
      <QuizNavigation></QuizNavigation>
    </div>


  );
};

export default QuizAndNavigation;