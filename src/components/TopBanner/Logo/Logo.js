import "./Logo.css";
import CompanyLogo from "./assets/companyLogo.JPG";

const Logo = () => {

  return (
    <img className="companyLogo" src={CompanyLogo} alt="Plus testing's logo" />
  );
};

export default Logo;