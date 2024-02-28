import Button from "react-bootstrap/esm/Button";
import EditReviewForm from "../components/EditReviewForm";
import { useState } from "react";
import axios from "axios";
import LOCAL_URL from "../utils/databaseLocal";

function ReviewCard(props) {
  const eachReview = props.eachReview
  const [isUpdateFormShowing, setIsUpdateFormShowing] = useState(false);
  const handleDelete = (e) => {
    axios
      .delete(`${LOCAL_URL}/reviews/${e}`)
      .then(() => {
        props.getDataFromServer();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleToggleUpdateForm = () => {
    setIsUpdateFormShowing(!isUpdateFormShowing);
  };

  return (
    <div key={eachReview.id}>
    <h1>
      <strong>Rating:</strong>
      <br />
      {eachReview.rating}
    </h1>
    <h3>
      <strong>Review:</strong>
      <br />
      {eachReview.review}
    </h3>
    <h3 style={{ marginBottom: "50px" }}>
      <strong>Username:</strong>
      <br />
      {eachReview.username}
    </h3>
    <div className="d-grid gap-2">
      <Button style={{color: "white"}} variant="warning" size="lg" onClick={handleToggleUpdateForm}>
        Edit
      </Button>
      {isUpdateFormShowing === true ? (
      <EditReviewForm
        review={props.eachReview}
        setReview={props.setReview}
        getDataFromServer={props.getDataFromServer}
        handleToggleUpdateForm={handleToggleUpdateForm}
      />
      ) : null}
      <Button
        variant="danger"
        size="lg"
        onClick={(e) => handleDelete(eachReview.id)}
      >
        Delete
      </Button>
    </div>
    <hr />
  </div>
  )
}

export default ReviewCard