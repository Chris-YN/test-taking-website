import "./TopBand.css";
import Logo from "./Logo/Logo";
import Timer from "./ProgressTracking/Timer/Timer";
import ProgressBar from "../UI/ProgressBar/ProgressBar";
import QuestionNumberTrack from "./ProgressTracking/QuestionNumberTrack/QuestionNumberTrack";


// TopBand.js
const TopBand = (props) => {

  return (
    <div className="topBand">
      <Logo></Logo>
      <div>
        <Timer></Timer>
        <ProgressBar></ProgressBar>
        <QuestionNumberTrack></QuestionNumberTrack>
      </div>
    </div>

  );
};

export default TopBand;