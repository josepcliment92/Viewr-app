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
        justifyContent: "center",
        flexWrap: "wrap",
        minWidth: "360px",
        margin: "5px",
        backgroundColor: "white",
        borderRadius: "10px",
      }}
    >
      <div>
        <Link
          to={`/list-shows/${review.showID}`}
          onClick={(e) => handleSubmit(review.showID)}
          style={{
            textDecoration: "none",
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
        </Link>
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
            <Card.Title
              style={{
                textAlign: "center",
                height: "100px",
              }}
            >
              <strong>Rating: </strong>
              {review.rating}
            </Card.Title>
            <Card.Text
              style={{
                height: "300px",
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
    </div>
  );
}

export default LastReviews;
