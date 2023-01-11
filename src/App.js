import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(() => "Not chosen Yet");

  function incrementCount() {
    setCount((prev) => prev + 1);
  }

  function decrementCount() {
    setCount((prev) => prev - 1);
  }

  function changeColor(color) {
    return () => setColor(color);
  }

  return (
    <div>
      <div className="container">
        <div
          display="block"
          style={{
            // borderBox: "border-box",
            border: "20px solid",
            width: "100%",
          }}
        >
          <p className="title"> Counter & Color </p>
        </div>
        <span> Count : {count} </span>
        <div className="buttons">
          <button onClick={decrementCount}> - </button>
          <button onClick={incrementCount}> + </button>
        </div>
        <span> Color : {color} </span>
      </div>

      <div className="dropdown">
        <Dropdown>
          <Dropdown.Toggle variant="success">Colors Menu</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as="button" onClick={changeColor("Red")}>
              Red
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={changeColor("Blue")}>
              Blue
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={changeColor("Black")}>
              Black
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={changeColor("White")}>
              White
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default App;
