import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import API_URL from "../utils/api";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [shows, setShows] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}a`) //cambiar el filtro de búsqueda en la URL. Filtro de prueba con la a.
      .then((response) => {
        setShows(response.data.description);
      })
      .catch((error) => {
        navigate("*");
      });
  }, []);

  if ((shows === null)) {
    return <h3> Cargando... </h3> // incluir más adelante un Spinner
  }

  return (
    <div>
      {shows.map((eachShow) => {
        return (
          <Link to={`/list-shows/${eachShow["#IMDB_ID"]}`}>
            <div key={eachShow["#IMDB_ID"]}>
              <img src={eachShow["#IMG_POSTER"]} alt={eachShow["#TITLE"]} width="120px" />
              <p>{eachShow["#TITLE"]}</p>
              <p>{eachShow["#YEAR"]}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Home;
