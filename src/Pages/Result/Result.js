import "./Result.css";
import { useNavigate } from "react-router-dom";


// SignIn.js
const Result = () => {
  const navigate = useNavigate();
  const returnButtonHandler = (event) => {
    navigate("/");
  }

  return (
    <>
      <h2>Your score is 100 !!</h2>
      <button onClick={returnButtonHandler}></button>
    </>
  );
};

export default Result;