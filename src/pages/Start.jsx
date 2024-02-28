import React from "react";
import { Link } from "react-router-dom";
import appLogo from "../assets/img/viewr-logo.png";
import sloganLogo2 from "../assets/img/slogan-logo-2.png";

function Start() {
  return (
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
      <Link to={"/home"}>
        <button style={{backgroundColor: "transparent", borderRadius: "50px", border: "3px solid white"}}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={appLogo} alt="app-logo" style={{maxWidth: "100%", height: "auto", display: "block", margin: "0 auto"}}/>
            <img src={sloganLogo2} alt="slogan-logo" style={{maxWidth: "100%", height: "auto", display: "block", margin: "0 auto"}}/>
          </div>
        </button>
      </Link>
    </div>
  );
}

export default Start;
