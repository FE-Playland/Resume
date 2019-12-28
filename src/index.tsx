import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/home";
import { createGlobalStyle } from "styled-components";

import { BrowserRouter } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
      padding: 0;
      font-family: Calibri, Candara, Segoe, 'Segoe UI', Optima, Arial, sans-serif;
  }
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
    border: 0;
  }

  a {
      color: #5A1F8D;
  }

  li {
      font-size: 0.8em;
  }

  img {
    width: 15px;
    height: 15px;
    margin-left: 2px;
    vertical-align: center;
  }
`;

ReactDOM.render(
  <BrowserRouter>
    <div>
      <GlobalStyle />
      <Home />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
