import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import imageForSignIn from "./assets/signIn.svg";
import comapnyLogo from "./assets/companyLogo.JPG";
import testOwnerLogo from "./assets/testOwnerCompanyLogo.JPG";


// SignIn.js
const SignIn = () => {
  const navigate = useNavigate();


  const startButtonHandler = (event) => {
    navigate("/test");
  }
  return (
    <div>
      <div className="topLogos">
        <img src={comapnyLogo} className="companyLogo" alt="Plus Testing logo" />
        <div className="testOwnerLogoAndName">
          <div className="flexParent">
            <img src={testOwnerLogo} className="testOwnerLogo" alt="TestOwner's Logo" />
            <p>Test for <br /> Company Name</p>
          </div>
        </div>
      </div>

      <div className="signInContent">
        <div className="signInImageAndForm">
          <form action="">
            <input required type="text" id="testerName" />
            <label htmlFor="testerName">Please enter your name</label>

            <input required type="text" id="testerEmail" />
            <label htmlFor="testerEmail">Please enter your email address</label>
            {/* <input type="checkbox" id="accept" name="accept" required /> Accept terms */}
            <button onClick={startButtonHandler}>Begin Test</button>
          </form>

          <img src={imageForSignIn} className="signInImage" alt="Illustration of three people standing">
          </img>
        </div>
      </div>

    </div>
  );
};

export default SignIn;