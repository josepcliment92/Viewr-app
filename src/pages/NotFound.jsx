import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function NotFound() {
  return (
    <div>
      <h2>
        <span style={{ color: "red" }}>404</span> - Page Not Found
      </h2>
      <br />
      <p>
        We're sorry 😢 It looks like the page you're looking for doesn't exist.
      </p>
      <p>
        The page may have been removed or it could be temporarily unavailable.
        Try again in a few minutes!
      </p>
      <p>
        You can also go back to our Homepage and keep enjoying the Viewr
        content. Thank you for your patience.
      </p>
      <p>👇</p>
      <Link to={"/home"}>
        <Button>Go back to Homepage</Button>
      </Link>
    </div>
  );
}

export default NotFound;
