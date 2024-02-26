import React from "react";
import { Link } from "react-router-dom";
import appLogo from "../assets/img/viewr-logo.png";
import sloganLogo2 from "../assets/img/slogan-logo-2.png";

function Start() {
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
      <Link to={"/home"}>
        <button style={{backgroundColor: "transparent", borderRadius: "50px", border: "3px solid white"}}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={appLogo} alt="app-logo" height="300px"/>
            <img src={sloganLogo2} alt="slogan-logo" height="200px" style={{marginBottom: "20px"}}/>
          </div>
        </button>
      </Link>
    </div>
  );
}

export default Start;
