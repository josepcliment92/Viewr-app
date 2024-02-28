import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

function DetailsCard(props) {
const show = props.show
  return (
    <div>
        <div>
        <img src={show["#IMG_POSTER"]} alt={show["#TITLE"]} width="200px" />
        <h2>{show["#TITLE"]}</h2>
        <hr />
        <p>
          <strong>AKA:</strong> {show["#AKA"]}
        </p>
        <p>
          <strong>Year:</strong> {show["#YEAR"]}{" "}
        </p>
        <p>
          <strong>Actors:</strong> {show["#ACTORS"]}
        </p>
        <p>
          <strong>Rank in IMDb:</strong> {show["#RANK"]}
        </p>
        <Link to={show["#IMDB_URL"]} target="_blank">
          <Button variant="primary" style={{ margin: "25px" }}>
            More info
          </Button>
        </Link>
        <hr />
      </div>
    </div>
  )
}

export default DetailsCard