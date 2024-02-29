import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function ShowCard(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        minWidth: "360px",
        maxWidth: "360px",
        margin: "5px",
        borderRadius: "10px",
      }}
    >
      <Link
        className="card-link"
        to={`/list-shows/${props.eachShow["#IMDB_ID"]}`}
        style={{
          textDecoration: "none",
          minWidth: "360px",
          maxWidth: "100%",
          minHeight: "680px",
          margin: "5px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Card>
          <div style={{ height: "440px", position: "relative" }}>
            <Card.Img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
              variant="top"
              src={props.eachShow["#IMG_POSTER"]}
              alt={props.eachShow["#TITLE"]}
            />
          </div>
          <Card.Body
            style={{
              height: "200px",
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
              {props.eachShow["#AKA"]}
            </Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default ShowCard;
