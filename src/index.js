import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Wrap } from "./Styled";
import Example from "./Example/index";
import Overlay from "./Overlay";

import Kit from "./Kit/index";

import "./reset.css";
import "./styles.css";

function App() {
  const [isExample, setIsExample] = useState(false);

  return (
    <div>
      <Overlay />
      <Wrap>
        <button onClick={() => setIsExample(!isExample)}>
          {isExample ? "Show Typography" : "Show Example"}
        </button>
      </Wrap>
      {isExample ? <Example /> : <Kit />}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
