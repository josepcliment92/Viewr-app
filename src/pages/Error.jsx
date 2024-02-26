import React from 'react'
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      Algo ha fallado. ¿Quieres volver al inicio? 
     <Link to={"/home"}><button>Clica aquí</button></Link> 
    </div>
  )
}

export default Error