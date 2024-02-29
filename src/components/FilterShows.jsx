import Button from "react-bootstrap/Button";
import { useState } from "react";

function FilterShows(props) {
  
  const handleClick = (letter) => {letter = props.setRandomResult};

  return (
    <div>
      {props.lettersArr.map((letter) => {
        return (
          <Button key={letter} onClick={() => handleClick(letter)}>
            {letter}
          </Button>
        );
      })}
    </div>
  );
}

export default FilterShows;

// e.event.value = props.randomResult