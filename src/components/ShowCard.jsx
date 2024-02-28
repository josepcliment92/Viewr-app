import React from 'react'
import { Link } from "react-router-dom";

function ShowCard(props) {
  return (
    <div>
      <Link to={`/list-shows/${props.eachShow["#IMDB_ID"]}`}>
            <div key={props.eachShow["#IMDB_ID"]}>
              <img src={props.eachShow["#IMG_POSTER"]} alt={props.eachShow["#TITLE"]} width="120px" />
              <p>{props.eachShow["#TITLE"]}</p>
              <p>{props.eachShow["#YEAR"]}</p>
            </div>
          </Link>
    </div>
  )
}

export default ShowCard