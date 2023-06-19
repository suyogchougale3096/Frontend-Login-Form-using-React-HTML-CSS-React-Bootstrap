import "../App.css";
import NavLink from "./NavLink";
import Logo from "../images/undraw_Aircraft_re_m05i.png";
import "../App.css";

const Header = () => {
  return (
    <div className="header bg-light">
      <div className="container-fluid border">
        <div className="row">
          <div className="col-md-6 pt-3 pb-3">
            <img src={Logo} alt="Logo" className="logo" />
            <span className="fs-3">Shivam Solutions Projects</span>
          </div>
          <div className="col-md-6 pt-3 pb-3">
            <NavLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
