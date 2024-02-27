import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LOCAL_URL from "../utils/databaseLocal";

function ReviewForm(props) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      rating: rating,
      review: review,
      username: username,
      showID: props.showId,
      showTitle: props.showName,
      showImage: props.showImage,
    };

axios.post(`${LOCAL_URL}/reviews`, newReview)
.then((response) => {
console.log(response.data)

}).catch((error) => {
navigate("*")
})

};

  

  return (
    <div>
      <h3>Did you like the show? Tell us!</h3>

      <form onSubmit={handleSubmit}>
        <label>Rating:</label>
        <input
          type="number"
          name="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <label>Review:</label>
        <input
          type="text"
          name="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button type="submit">Add your review</button>
      </form>
    </div>
  );
}

export default ReviewForm;
