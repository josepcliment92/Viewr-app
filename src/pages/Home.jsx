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
      .get(`${API_URL}/?q=${randomResult}`) // filtrar randomResult por ranking IMDb 
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
