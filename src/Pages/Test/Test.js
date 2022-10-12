import "./Test.css";
import TopBand from "../../components/TopBanner/TopBand";
import QuizAndNavigation from "../../components/QuizAndNavigation/QuizAndNavigation";


// SignIn.js
const Test = (props) => {
  // console.log(props.testObjArray)
  return (
    <>
      <TopBand></TopBand>
      <QuizAndNavigation 
        testObjArray={props.testObjArray}
      ></QuizAndNavigation>
    </>
  );
};

export default Test;