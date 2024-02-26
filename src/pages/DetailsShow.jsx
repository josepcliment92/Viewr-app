import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API_URL from "../utils/api";
import axios from "axios";
import { useParams } from "react-router-dom";

function DetailsShow() {
  
  const [show, setShow] = useState(null);

  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {

    
  })
  
  
  return (
    <div>



    </div>
  )
}

export default DetailsShow