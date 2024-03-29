import Button from "react-bootstrap/esm/Button";
import EditReviewForm from "../components/EditReviewForm";
import { useState } from "react";
import axios from "axios";
import LOCAL_URL from "../utils/databaseLocal";
import Card from "react-bootstrap/Card";
import emptyStar from "../assets/img/star-empty-logo.png";
import filledStar from "../assets/img/star-fill-logo.png";

function ReviewCard(props) {
  const eachReview = props.eachReview;
  const variantsArr = [
    "primary",
    "secondary",
    "success",
    "info",
    "dark",
  ];
  const randomVariant =
    variantsArr[Math.floor(Math.random() * variantsArr.length)];

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
  const date = new Date(eachReview.date);
  const dateToShow = `Date: ${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}, 
  Time: ${date.getHours()}:${date.getMinutes()}`;

  function ratingStars(rating) {
    const starsArray = [];
    for (let i = 0; i < rating; i++) {
      starsArray.push(
        <img
          key={i}
          src={filledStar}
          alt="filled-star"
          style={{
            maxWidth: "10%",
            height: "auto",
            margin: "0 auto",
          }}
        />
      );
    }
    for (let i = rating; i < 5; i++) {
      starsArray.push(
        <img
          key={i}
          src={emptyStar}
          alt="empty-star"
          style={{
            maxWidth: "10%",
            height: "auto",
            margin: "0 auto",
          }}
        />
      );
    }
    return <div>{starsArray}</div>;
  }

  return (
    <div
      key={eachReview.id}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        bg={randomVariant}
        text={randomVariant === "light" ? "dark" : "white"}
        style={{ width: "18rem" }}
        className="mb-2"
      >
        <Card.Header>{eachReview.username}</Card.Header>
        <Card.Body>
          <Card.Title style={{display: "flex", flexDirection: "row"}}>{ratingStars(eachReview.rating)}</Card.Title>
          <Card.Text>
            <strong>Review: </strong> {eachReview.review}
          </Card.Text>
          <div className="d-grid gap-2">
            <Button
              style={{ color: "white" }}
              variant="warning"
              size="lg"
              onClick={handleToggleUpdateForm}
            >
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
        </Card.Body>
        <Card.Footer>{dateToShow}</Card.Footer>
      </Card>
    </div>
  );
}

export default ReviewCard;
