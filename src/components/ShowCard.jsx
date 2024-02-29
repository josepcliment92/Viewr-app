import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function ShowCard(props) {
  return (
    <Link
      className="card-link"
      to={`/list-shows/${props.eachShow["#IMDB_ID"]}`}
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
      <Card
        style={{ width: "14rem", marginBottom: "2rem", alignSelf: "stretch" }}
      >
        <div style={{ height: "300px", position: "relative" }}>
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
            width="120px"
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
              {props.eachShow["#AKA"]}
            </Card.Title>
          </Card.Body>
      </Card>
    </Link>
  );
}

export default ShowCard;
