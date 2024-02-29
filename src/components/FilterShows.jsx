import Button from "react-bootstrap/Button";
import A from "../assets/img/A.png";
import B from "../assets/img/B.png";
import C from "../assets/img/C.png";
import D from "../assets/img/D.png";
import E from "../assets/img/E.png";
import F from "../assets/img/F.png";
import G from "../assets/img/G.png";
import H from "../assets/img/H.png";
import I from "../assets/img/I.png";
import J from "../assets/img/J.png";
import K from "../assets/img/K.png";
import L from "../assets/img/L.png";
import M from "../assets/img/M.png";
import N from "../assets/img/N.png";
import O from "../assets/img/O.png";
import P from "../assets/img/P.png";
import Q from "../assets/img/Q.png";
import R from "../assets/img/R.png";
import S from "../assets/img/S.png";
import T from "../assets/img/T.png";
import U from "../assets/img/U.png";
import V from "../assets/img/V.png";
import W from "../assets/img/W.png";
import X from "../assets/img/X.png";
import Y from "../assets/img/Y.png";
import Z from "../assets/img/Z.png";

function FilterShows(props) {
  const imgLetter = [
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W,
    X,
    Y,
    Z,
  ];
  const handleClick = (letter) => {
    props.setRandomLetter(letter);
  };

  return (
    <div>
      {props.lettersArr.map((letter, index) => {
        let color = "";
        if (props.randomLetter == letter) {
          color = "primary";
        } else {
          color = "secondary";
        }
        return (
          <Button
            variant={color}
            key={index}
            onClick={() => handleClick(letter)}
            style={{ margin: "5px" }}
          >
            <div style={{ height: "30px", position: "relative" }}>
              <img
                src={imgLetter[index]}
                alt={letter}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          </Button>
        );
      })}
    </div>
  );
}

export default FilterShows;
