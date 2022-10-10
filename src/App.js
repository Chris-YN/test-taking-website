import "./App.css"
import QuizBackground from "./components/UI/QuizBackground/QuizBackground";
import Card from "./components/UI/Card/Card";
import QuizAndNavigation from "./components/QuizAndNavigation/QuizAndNavigation";
import TopBand from "./components/TopBanner/TopBand";
import axios from 'axios';


// App.js
function App() {
  axios({
    url: "https://opentdb.com/api.php",
    method: "GET",
    responseType: "json",
    params: {
      amount: 10,
      category: 26,
      type: "multiple",
      difficulty: "easy",
    },
  })
    .then((response) => {
      const returnedObject = response.data.results;
      const combinedAnswerArr = [...returnedObject];

      combinedAnswerArr.forEach((quizObject) => {
        const quizAnswers = [quizObject.correct_answer, ...quizObject.incorrect_answers];
        const updatedQuizAnswers = quizAnswers.map((quiz) => {
          if (quiz === quizObject.correct_answer) {
            return {
              name: quiz,
              isCorrect: true,
            }
          } else {
            return {
              name: quiz,
              isCorrect: false,
            }
          }
        })
        // quizObject.answerButtons = shuffleArr(updatedQuizAnswers);
      })
      console.log(combinedAnswerArr);
    })
    .catch((err) => {
      console.log(err);
    });



  return (
    <QuizBackground className="backgroundDefault">
      <TopBand></TopBand>

      <QuizAndNavigation></QuizAndNavigation>
    </QuizBackground>
  )
}

export default App;
