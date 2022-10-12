import "./SignIn.css";
import { useNavigate } from "react-router-dom";


// SignIn.js
const SignIn = (props) => {
  const navigate = useNavigate(); 

  const startButtonHandler = (event) => {
    props.fetchTestsObj();
    navigate("/test");
  }
  return(
    <div>
    <h2>signIn</h2>
    <form>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </form>
    <button onClick={startButtonHandler}></button>
    </div>
  );
};

export default SignIn;