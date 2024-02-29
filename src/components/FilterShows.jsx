import Button from "react-bootstrap/Button";
import { useState } from "react";

function FilterShows(props) {


  const handleClick = (letter) => {letter = props.setRandomResult};

  return (
    <div>
      {props.lettersArr.map((letter) => {
        return (
          <Button key={letter} onClick={() => handleClick(letter)} style={{margin: "5px"}}>
            {letter}
          </Button>
        );
      })}
    </div>
  );
}

export default FilterShows;

