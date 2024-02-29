import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";

function DetailsCard(props) {
  const show = props.show;
  return (
    <div>
      <Card style={{ height: "900px", width: "600px" }}>
          <Card.Img
            style={{
              width: "100%",
              maxHeight: "600px",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            variant="top"
            src={show["#IMG_POSTER"]}
            alt={show["#TITLE"]}
          />
  
          <Card.Body
            style={{
              maxHeight: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Card.Title
              style={{
                color: "black",
                fontSize: "24px",
                lineHeight: "20px",
                textAlign: "center",
              }}
            >
              {show["#TITLE"]}
            </Card.Title>
            <Card.Text>
              <p>
                <strong>AKA:</strong> {show["#AKA"]}
              </p>
              <p>
                <strong>Year:</strong> {show["#YEAR"]}
              </p>
              <p>
                <strong>Actors:</strong> {show["#ACTORS"]}
              </p>
              <p>
                <strong>Rank in IMDb:</strong> {show["#RANK"]}
              </p>
              <Link to={show["#IMDB_URL"]} target="_blank">
                <Button variant="primary">More info</Button>
              </Link>
            </Card.Text>
          </Card.Body>
        </Card>
  </div>
  );
}

export default DetailsCard;
