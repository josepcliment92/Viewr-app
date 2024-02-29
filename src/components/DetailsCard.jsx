import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";

function DetailsCard(props) {
  const show = props.show;
  return (
    <div>
      <Card style={{ height: "900px", width: "360px" }}>
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
            <strong>AKA:</strong> {show["#AKA"]}
          </Card.Text>
          <Card.Text>
            <strong>Year:</strong> {show["#YEAR"]}
          </Card.Text>
          <Card.Text>
            <strong>Actors:</strong> {show["#ACTORS"]}
          </Card.Text>
          <Card.Text>
            <strong>Rank in IMDb:</strong> {show["#RANK"]}
          </Card.Text>
          <Card.Text>
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
