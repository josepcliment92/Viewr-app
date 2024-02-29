import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Error() {
  return (
    <div>
      <h2>Oh No! It looks like something went wrong</h2>
      <br />
      <p>
        We're sorry 😢 The page you are trying to access may not exist, or there
        may be a temporary issue with our server.
      </p>
      <p>
        We invite you to go back to our Homepage and keep enjoying the Viewr
        content. Thank you!
      </p>
      <p>👇</p>
      <Link to={"/home"}>
        <Button>Go back to Homepage</Button>
      </Link>
    </div>
  );
}

export default Error;
