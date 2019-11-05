import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom";
import { Wrap } from "./Styled";
import Example from "./Example/index";
import Overlay from "./Overlay";
import Kit from "./Kit/index";
import theme from "./theme";

import "./reset.css";
import "./styles.css";

function App() {
  const [isExample, setIsExample] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Overlay />
        <Wrap>
          <button onClick={() => setIsExample(!isExample)}>
            {isExample ? "Show Typography" : "Show Example"}
          </button>
        </Wrap>
        {isExample ? <Example /> : <Kit />}
      </div>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
