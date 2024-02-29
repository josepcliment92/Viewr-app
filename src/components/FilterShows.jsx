import Button from "react-bootstrap/Button";

function FilterShows(props) {
  const handleClick = (letter) => {
    props.setRandomLetter(letter);
  };

  return (
    <div>
      {props.lettersArr.map((letter) => {
        let color = "";
        if (props.randomLetter == letter) {
          color = "primary";
        } else {
          color = "secondary";
        }
        return (
          <Button
            variant={color}
            key={letter}
            onClick={() => handleClick(letter)}
            style={{ margin: "5px" }}
          >
            {letter}
          </Button>
        );
      })}
    </div>
  );
}

export default FilterShows;
