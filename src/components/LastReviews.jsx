import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import emptyStar from "../assets/img/star-empty-logo.png";
import filledStar from "../assets/img/star-fill-logo.png";

function LastReviews(props) {
  const review = props.review;
  const date = new Date(review.date);
  const dateToShow = `Date: ${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()},`;
  const timeToShow = `Time: ${date.getHours()}:${date.getMinutes()}`;

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
    return starsArray;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        minWidth: "360px",
        margin: "5px",
        backgroundColor: "white",
        borderRadius: "10px",
      }}
    >
      <Link
        to={`/list-shows/${review.showID}`}
        onClick={(e) => handleSubmit(review.showID)}
        style={{textDecoration: "none", display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",}}
      >
        <div
          style={{
            minWidth: "360px",
            maxWidth: "360px",
            minHeight: "640px",
            margin: "5px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Card>
            <div style={{ height: "540px", position: "relative" }}>
              <Card.Img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
                variant="top"
                src={review.showImage}
              />
            </div>
            <Card.Body
              style={{
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card.Title
                style={{
                  color: "black",
                  fontSize: "16px",
                  lineHeight: "20px",
                  textAlign: "center",
                }}
              >
                {review.showTitle}
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div
          style={{
            textDecoration: "none",
            minWidth: "360px",
            maxWidth: "360px",
            minHeight: "640px",
            display: "flex",
            margin: "5px",
            flexDirection: "column",
          }}
        >
          <Card bg="secondary">
            <Card.Header
              style={{
                height: "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {review.username}
            </Card.Header>
            <Card.Body
              style={{
                height: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card.Text
                style={{
                  textAlign: "center",
                  height: "150px",
                }}
              >
                {ratingStars(review.rating)}
              </Card.Text>
              <Card.Text
                style={{
                  height: "150px",
                  textAlign: "center",
                  overflowY: "auto",
                }}
              >
                <strong>Review: </strong> {review.review}
              </Card.Text>
            </Card.Body>
            <Card.Footer
              style={{
                height: "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {dateToShow}
              <br />
              {timeToShow}
            </Card.Footer>
          </Card>
        </div>
      </Link>
    </div>
  );
}

export default LastReviews;
