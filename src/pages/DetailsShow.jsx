import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API_URL from "../utils/api";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";

function DetailsShow() {
  const [show, setShow] = useState([]);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}${params.showId}`)
      .then((response) => {
        setShow(response.data.description[0]);
        //console.log(response.data.description); Averiguar por qué en la consola me sale infinitas veces el mismo array
      })
      .catch((error) => {
        navigate("*");
      });
  });

  if (show === null) {
    return <h3> Cargando... </h3>; // incluir más adelante un Spinner
  }

  return (
    <div key={show["#IMDB_ID"]}>
      <div>
        <img src={show["#IMG_POSTER"]} alt={show["#TITLE"]} width="200px"/>
        <p>{show["#TITLE"]}</p>
        <p>AKA: {show["#AKA"]}</p>
        <p>YEAR: {show["#YEAR"]} </p>
        <p>ACTORS: {show["#ACTORS"]}</p>
        <p>RANKED IN IMDB: {show["#RANK"]}</p>
        <Link to={show["#IMDB_URL"]}> 
          <button>MORE INFORMATION</button>
        </Link>
      </div>

<ReviewForm showId={show["#IMDB_ID"]} showName={show["#TITLE"]} showImage={show["#IMG_POSTER"]} />

    </div>
  );
}

export default DetailsShow;

//En el botón de MORE INFORMATION, hacer que el link se abra en una pestaña nueva para no salir de nuestra página (es un link externo)