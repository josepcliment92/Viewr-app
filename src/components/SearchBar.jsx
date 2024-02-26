import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import lupaLogo from "../assets/img/logo-lupa.png";
import searchLogo from "../assets/img/search-logo.png";

function SearchBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ borderRadius: "100px", margin: "0px", padding: "0px", backgroundColor: "transparent", border: "0px" }}
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
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={searchLogo} alt="search-logo" height="100px" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default SearchBar;
