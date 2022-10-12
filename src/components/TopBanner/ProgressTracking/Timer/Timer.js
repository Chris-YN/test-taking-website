import "./Timer.css";
import { useState } from "react";
import {useNavigate} from "react-router-dom";


const Timer = (props) => {
  const [minutesLeft, setMinutesleft] = useState(props.testTime)
  const navigate = useNavigate();

  const counter = () => {

    setInterval(() => {
      if (minutesLeft === 0){
        navigate("/result")
      } else {
        setMinutesleft(minutesLeft-1)
      }
    }, 1000 * 60);
  }
  counter();


  return (
    <p>Time left: {minutesLeft} minutes</p>
  );
}

export default Timer;