import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API_URL from "../utils/api";
import axios from "axios";
import ShowCard from "../components/ShowCard";
import { TailSpin } from "react-loader-spinner";
import allShowsLogo from "../assets/img/all-shows-logo.png";
import lettersArr from "../utils/lettersArr";
import FilterShows from "../components/FilterShows";

function ListShows() {
  const [shows, setShows] = useState(null);

  const navigate = useNavigate();

  const randomIndex = Math.floor(Math.random() * lettersArr.length);
  const initialRandomLetter = lettersArr[randomIndex];
  const [randomLetter, setRandomLetter] = useState(initialRandomLetter);

  useEffect(() => {
    axios
      .get(`${API_URL}/?q=${randomLetter}`)
      .then((response) => {
        setShows(response.data.description);
      })
      .catch((error) => {
        navigate("*");
      });
  }, [randomLetter]);

  if (shows === null) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TailSpin color={"white"} size={500} />
      </div>
    );
  }

  return (
    <div>
      <div style={{marginBottom: "50px"}}>
        <img
          src={allShowsLogo}
          alt="all-shows-logo"
          style={{
            maxWidth: "100%",
            height: "auto",
            display: "block",
            margin: "0 auto",
          }}
        />
        <FilterShows
          setRandomLetter={setRandomLetter}
          lettersArr={lettersArr}
          randomLetter={randomLetter}
          setShows={setShows}
        />
      </div>
      <div className="card-home-list-shows">
        {shows.map((eachShow) => {
          return (
            <div key={eachShow["#IMDB_ID"]}>
              <ShowCard eachShow={eachShow} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListShows;
