import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import axios from "axios";
import LOCAL_URL from "../utils/databaseLocal";

function EditReviewForm(props) {
  const review = props.review;
  const [rating, setRating] = useState(review.rating);
  const [comment, setComment] = useState(review.review);
  const [username, setUsername] = useState(review.username);

  const handleSubmit = (e) => {
    e.preventDefault();
    const editReview = {
      rating: rating,
      review: comment,
      username: username,
    };
    axios
      .patch(`${LOCAL_URL}/reviews/${review.id}`, editReview)
      .then((res) => {
        props.getDataFromServer();
        props.handleToggleUpdateForm(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRating = (e) => {
    let inputValue = e.target.value;
    setRating(inputValue);
  };

  const handleComment = (e) => {
    let inputValue = e.target.value;
    setComment(inputValue);
  };

  const handleUsername = (e) => {
    let inputValue = e.target.value;
    setUsername(inputValue);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel label="Rate this show:" controlId="floatingSelect">
          <Form.Select type="number" value={rating} onChange={handleRating}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
          .
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
            onChange={handleComment}
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
            onChange={handleUsername}
          />
        </FloatingLabel>

        <div className="d-grid gap-2">
          <Button
            className="btn-edit"
            variant="outline-warning"
            size="lg"
            type="submit"
          >
            Edit review
          </Button>{" "}
          {/* Pendiente modificar el color del botón Edit Review antes de que el ratón se ponga encima (que sea amarillo) */}
        </div>
      </Form>
    </div>
  );
}

export default EditReviewForm;
