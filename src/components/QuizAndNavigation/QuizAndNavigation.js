import "./QuizAndNavigation.css";
import Card from "../UI/Card/Card";
import AnswerChoices from "./AnswerChoices.js/AnswerChoices";
import Question from "./Question/Question";
import "./QuizAndNavigation.css";
import QuizNavigation from "./QuizNavigation/QuizNavigation";


// QuizAndNavigation.js
const QuizAndNavigation = () => {

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