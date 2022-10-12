import "./App.css"
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import SignIn from "./Pages/SignIn/SignIn";
import TestSelect from "./Pages/TestSelect/TestSelect";
import Test from "./Pages/Test/Test";
import Result from "./Pages/Result/Result";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import QuizBackground from "./components/UI/QuizBackground/QuizBackground";


// App.js
function App() {
  const [testObjArray, setTestobjArray] = useState([])

  // array shuffler for randomizing answere option apear order in test
  const ArrShuffle = (array) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  // axios for fetching question to be used as dummy test, from everyone's favorite API opendb 
  // Categories and difficulties are fixed for convinience. 
  const fetchTestObj = () => {
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
          const updatedQuizAnswers = quizAnswers.map((answer) => {
            if (answer === quizObject.correct_answer) {
              return {
                answerOption: answer,
                isCorrect: true,
              }
            } else {
              return {
                nameOption: answer,
                isCorrect: false,
              }
            }
          })

          quizObject.answerButtons = ArrShuffle(updatedQuizAnswers);
        })
        setTestobjArray(combinedAnswerArr);
      })
      .catch((err) => {
        console.log(err);
      });
  }




  return (
    <QuizBackground className="backgroundDefault">

      <Routes>
        <Route path="/" element={<SignIn
          fetchTestsObj={fetchTestObj}
        />} />
        <Route path="/test-selection" element={<TestSelect />} />
        <Route path="/test" element={<Test
          testObjArray={testObjArray}
        />} />
        <Route path="/Result" element={<Result />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>


    </QuizBackground>
  )
}

export default App;
