import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import lupaLogo from "../assets/img/logo-lupa.png";
import searchLogo from "../assets/img/search-logo.png";
import API_URL from "../utils/api";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    setSearch(
      setTimeout(() => {}),
      1000
    );
  };

  const [showList, setShowList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (search.trim() !== "") {
        axios
          .get(`${API_URL}/?q=${search}`)
          .then((response) => {
            setShowList(response.data.description);
          })
          .catch((error) => {
            navigate("*");
          });
      } else {
        setShowList([]);
      }
    }, 1000);
    return () => clearTimeout(delaySearch);
  }, [search]);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/list-shows/${eachResult["#IMDB_ID"]}`);
  };

  return (
    <div>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{
          borderRadius: "100px",
          margin: "0px",
          padding: "0px",
          backgroundColor: "transparent",
          border: "0px",
        }}
      >
        <img src={lupaLogo} alt="lupa-logo" height="20px" />
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="top"
        bg="dark"
        data-bs-theme="dark"
      >
        <Offcanvas.Header>
          <Offcanvas.Title>
            <img src={searchLogo} alt="search-logo" height="100px" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search Your Show"
                  className=" mr-sm-2"
                  value={search}
                  onChange={handleSearch}
                />
              </Col>
              <Col xs="auto">
                {/* <Button type="submit" variant="outline-info">
                  Search
                </Button> */}
              </Col>
            </Row>
          </Form>
          <div className="filtered-result">
            {showList.map((eachResult) => {
              return (
                <div
                  onClick={(e) => handleSubmit(eachResult["#IMDB_ID"])}
                  style={{ display: "flex", flexDirection: "row" }}
                  key={eachResult["#IMDB_ID"]}
                >
                  <Link
                    to={`/list-shows/${eachResult["#IMDB_ID"]}`}
                    onClick={(e) => handleSubmit(eachResult["#IMDB_ID"])}
                  >
                    <img src={eachResult["#IMG_POSTER"]} width="40px" />
                    <p>{eachResult["#TITLE"]}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default SearchBar;
