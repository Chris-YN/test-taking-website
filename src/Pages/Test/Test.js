import "./Test.css";
import TopBand from "../../components/TopBanner/TopBand";
import QuizAndNavigation from "../../components/QuizAndNavigation/QuizAndNavigation";
import { useState } from "react";


// SignIn.js
const Test = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const testLength = props.testObjArray.length;
  console.log("thisOne", testLength);

  return (
    <>
      <TopBand 
        currentIndex={currentIndex}
        testLength={testLength}
      ></TopBand>
      <QuizAndNavigation 
        testObjArray={props.testObjArray}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      ></QuizAndNavigation>
    </>
  );
};

export default Test;