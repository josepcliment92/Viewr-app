import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function LastReviews(props) {
  const review = props.review;
  const date = new Date(review.date);
  const dateToShow = `Date: ${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()},`;
  const timeToShow = `Time: ${date.getHours()}:${date.getMinutes()}`;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        minWidth: "200px",
        backgroundColor: "white",
        margin: "5px",
        borderRadius: "10px",
      }}
    >
      <Link
        to={`/list-shows/${review.showID}`}
        onClick={(e) => handleSubmit(review.showID)}
        style={{
          textDecoration: "none",
          width: "200px",
          maxWidth: "100%",
          maxHeight: "400px",
          margin: "5px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Card style={{ flex: 1 }}>
          <div style={{ height: "300px", position: "relative" }}>
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
      </Link>
      <Card
        bg="secondary"
        style={{
          width: "200px",
          maxWidth: "100%",
          maxHeight: "400px",
          margin: "5px",
          color: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Card.Header
          style={{
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {review.username}
        </Card.Header>
        <Card.Body
          style={{
            height: "150px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card.Title style={{ marginBottom: "5px", textAlign: "center" }}>
            <strong>Rating: </strong>
            {review.rating}
          </Card.Title>
          <Card.Text
            style={{
              marginBottom: "5px",
              textAlign: "center",
              overflowY: "auto",
            }}
          >
            <strong>Review: </strong> {review.review}
          </Card.Text>
        </Card.Body>
        <Card.Footer
          style={{
            height: "60px",
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
  );
}

export default LastReviews;
