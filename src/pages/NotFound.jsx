import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      Ha habido un error; nuestros programadores están trabajando en ello. ¿Quieres volver a la página inicial?
      <Link to={"/home"}><button>Clica aquí</button></Link>
    </div>
  );
}

export default NotFound;
