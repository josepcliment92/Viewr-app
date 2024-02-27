import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import API_URL from "../utils/api";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ShowCard from "../components/ShowCard";


function Home() {
  const [shows, setShows] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/?q=a`) //cambiar el filtro de búsqueda. letra aleatoria + filtro de mejor ranking IMDB 
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
          <ShowCard eachShow={eachShow} />
        );
      })}
    </div>
  );
}

export default Home;
