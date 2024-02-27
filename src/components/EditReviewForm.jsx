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
        <FloatingLabel
          controlId="floatingInput"
          label="Rating:"
          className="mb-3"
        >
          <Form.Control type="number" value={rating} onChange={handleRating} />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Comment:"
          className="mb-3"
        >
          <Form.Control type="text" value={comment} onChange={handleComment} />
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
          <Button variant="outline-warning" size="lg" type="submit">
            Edit review
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default EditReviewForm;
