import "./TopBand.css";
import Logo from "./Logo/Logo";
import Timer from "./ProgressTracking/Timer/Timer";
import ProgressBar from "../UI/ProgressBar/ProgressBar";
import QuestionNumberTrack from "./ProgressTracking/QuestionNumberTrack/QuestionNumberTrack";


// TopBand.js
const TopBand = (props) => {
  // testTime fixed for convinience for now
  // in actual application, testTime variable can point to an actual time that would be in test
  const testTime = 10

  return (
    <div className="topBand">
      <Logo></Logo>
      <div>
        <Timer
          testTime={testTime}
        ></Timer>
        {/* <ProgressBar></ProgressBar> */}
        <QuestionNumberTrack 
          currentIndex={props.currentIndex}
          testLength={props.testLength}
        ></QuestionNumberTrack>
      </div>
    </div>

  );
};

export default TopBand;