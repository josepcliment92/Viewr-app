import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import API_URL from "../utils/api";
import axios from "axios";
import ShowCard from "../components/ShowCard";

function ListShows() {
  const [shows, setShows] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}true`) //cambiar el filtro de búsqueda en la URL. Filtro de prueba con true.
      .then((response) => {
        setShows(response.data.description);
      })
      .catch((error) => {
        navigate("*");
      });
  }, []);

  if (shows === null) {
    return <h3> Cargando... </h3>; // incluir más adelante un Spinner
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

export default ListShows;
