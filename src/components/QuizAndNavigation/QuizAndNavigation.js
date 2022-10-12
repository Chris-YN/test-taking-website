import "./QuizAndNavigation.css";
import { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import AnswerChoices from "./AnswerChoices.js/AnswerChoices";
import Question from "./Question/Question";
import "./QuizAndNavigation.css";
import Navigation from "./Navigation/Navigation";


// QuizAndNavigation.js
const QuizAndNavigation = (props) => {
  console.log(props.testObjArray);
  const [currentQuestionObj, setCurrentQuestionObj] = useState(props.testObjArray[0])

  useEffect(()=>{
    setCurrentQuestionObj(props.testObjArray[props.currentIndex])
  }, [props.currentIndex])

  const questionString = currentQuestionObj.question;
  const answerOptionsArray = currentQuestionObj.answerButtons;
  const testLength = props.testObjArray.length;

  return (
    <div>
      <div className="quizAndChoices">
        <Card>
          <Question
            questionString={questionString}
          ></Question>
        </Card>

        <Card>
          <AnswerChoices
            answerOptionsArray={answerOptionsArray}
          ></AnswerChoices>
        </Card>

      </div>
      <Navigation
        testLength={testLength}
        currentIndex={props.currentIndex}
        setCurrentIndex={props.setCurrentIndex}
      ></Navigation>
    </div>


  );
};

export default QuizAndNavigation;