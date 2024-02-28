import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function ShowCard(props) {
  return (
    <Card style={{ width: "14rem", marginBottom: "2rem", alignSelf: "stretch" }}>
      <Link className="card-link" to={`/list-shows/${props.eachShow["#IMDB_ID"]}`}>
        <div key={props.eachShow["#IMDB_ID"]}>
          <Card.Img
            style={{ maxHeight: "17rem", objectFit: "cover" }}
            variant="top"
            src={props.eachShow["#IMG_POSTER"]}
            alt={props.eachShow["#TITLE"]}
            width="120px"
          />
          <Card.Body style={{height: "7rem", display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <Card.Title className="card-title-list">{props.eachShow["#AKA"]}</Card.Title>{" "}
          </Card.Body>
        </div>
      </Link>
    </Card>
  );
}

export default ShowCard;
