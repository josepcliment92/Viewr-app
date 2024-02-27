import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LOCAL_URL from "../utils/databaseLocal";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function ReviewForm(props) {
  const [rating, setRating] = useState(0);
  const [coment, setComent] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComent = {
      rating: rating,
      coment: coment,
      username: username,
      showID: props.showId,
      showTitle: props.showName,
      showImage: props.showImage,
    };

    axios
      .post(`${LOCAL_URL}/reviews`, newComent)
      .then((response) => {
        props.getDataFromServer();
      })
      .catch((error) => {
        navigate("*");
      });
  };

  return (
    <div>
      <h3>Did you like the show? Tell us!</h3>

      <Form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingSelect" label="Works with selects">Rating:</FloatingLabel>
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
          <option value="" selected disabled>Rate this show</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>

        <label>Coment:</label>
        <input
          type="text"
          name="coment"
          value={coment}
          onChange={(e) => setComent(e.target.value)}
        />

        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button type="submit">Add your coment</button>
      </Form>
    </div>
  );
}

export default ReviewForm;
