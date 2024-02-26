import React from "react";
import { Link } from "react-router-dom";

function Start() {
  return (
    <div>
      <Link to={"/home"}>
        <button>INSERT LOGO HERE</button>
      </Link>
    </div>
  );
}

export default Start;
