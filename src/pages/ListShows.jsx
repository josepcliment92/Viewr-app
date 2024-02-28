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

  const lettersNumbers = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
  ];
  
  const randomIndex = Math.floor(Math.random() * lettersNumbers.length);
  const randomResult = lettersNumbers[randomIndex];

  useEffect(() => {
    axios
      .get(`${API_URL}/?q=${randomResult}`) 
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
    <div className="card-home-list-shows">
      {shows.map((eachShow) => {
        return (
          <div key={eachShow["#IMDB_ID"]}>
          <ShowCard eachShow={eachShow} />
          </div>
        );
      })}
    </div>
  );
}

export default ListShows;
