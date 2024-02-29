import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LOCAL_URL from "../utils/databaseLocal";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function ReviewForm(props) {
  const [rating, setRating] = useState(0);
  const [comment, setComent] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString();

    const newComent = {
      rating: rating,
      review: comment,
      username: username,
      showID: props.showId,
      showTitle: props.showName,
      showImage: props.showImage,
      date: currentDate,
    };

    axios
      .post(`${LOCAL_URL}/reviews`, newComent)
      .then((response) => {
        props.getDataFromServer();
        props.handleToggleAddForm();
      })
      .catch((error) => {
        navigate("*");
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel
          className="mb-3"
          label="Rate this show:"
          controlId="floatingSelect"
        >
          <Form.Select
            size="lg"
            min="0"
            max="5"
            step="1"
            type="number"
            name="rating"
            placeholder="Rate this show"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingTextarea2"
          label="Comment:"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            style={{ height: "100px" }}
            value={comment}
            onChange={(e) => setComent(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Username:"
          className="mb-3"
        >
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FloatingLabel>
        <div className="d-grid gap-2">
          <Button variant="outline-success" size="lg" type="submit">
            Add your comment
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default ReviewForm;
