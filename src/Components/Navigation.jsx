import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Navigation(props) {
  return (
    <>
      <div className="navigation-wrapper">
        <div className="logo">
          <Link to={"/"} className="home-link">
            <label>{props.logo}</label>
          </Link>
        </div>
        <div className="nav">
          <label>{props.name}</label>
          <label>{props.signin}</label>
          <label>{props.signup}</label>
        </div>
      </div>
    </>
  );
}

export default Navigation;
