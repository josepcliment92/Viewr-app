import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";


function LastReviews(props) {
    
  const review = props.review;

  return (
      <div>
        <Link
          to={`/list-shows/${review.showID}`}
          onClick={(e) => handleSubmit(review.showID)}
          style={{
            textDecoration: "none",
            display: "flex",
            flexDirection: "row",
            border: "0px",
            borderRadius: "1rem",
            margin: "5px",
            backgroundColor: "white",
          }}
        >
          <div>
            <Card style={{ width: "12rem", margin: "0.5em", border: "0px" }}>
              <Card.Img
                style={{
                  height: "18rem",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
                variant="top"
                src={review.showImage}
              />
              <Card.Body
                style={{
                  height: "6rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Card.Title style={{ color: "black" }}>
                  {review.showTitle}
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card
              bg="secondary"
              style={{
                width: "18rem",
                height: "24rem",
                margin: "0.5em",
                color: "white",
              }}
              className="review-home"
            >
              <Card.Header>{review.username}</Card.Header>
              <Card.Body>
                <Card.Title>
                  <strong>Rating: </strong>
                  {review.rating}
                </Card.Title>
                <Card.Text>
                  <strong>Review: </strong> {review.review}
                </Card.Text>
              </Card.Body>
              <Card.Footer>{review.date}</Card.Footer>
            </Card>
          </div>
        </Link>
      </div>
  );
}

export default LastReviews;
