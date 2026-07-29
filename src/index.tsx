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

  @media print {
    @page {
      size: A4;
      margin: 8mm;
    }

    html,
    body {
      width: 100%;
      font-size: 17px;
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
    }

    .resume {
      width: 100% !important;
      max-width: none !important;
      padding: 0 !important;
    }

    .resume-header hr {
      margin: 4px 0 7px;
    }

    .resume-section__title {
      width: 135px !important;
      flex: 0 0 135px;
    }

    .resume-section > div:last-child {
      margin-bottom: 4px !important;
    }

    .resume-row {
      margin-bottom: 6px !important;
      line-height: 1.1em !important;
      break-inside: avoid;
    }

    .resume-row .row-header p {
      margin-bottom: 1px;
    }

    .resume-row__extra p {
      font-size: 10px;
    }

    li {
      font-size: 0.78em;
      line-height: 1.14;
    }

    img {
      width: 13px;
      height: 13px;
    }
  }

  @media (max-width: 600px) {
    .resume {
      padding: 20px !important;
    }

    .resume-header__identity {
      float: none;
      margin-bottom: 10px;
    }

    .resume-header__contact p {
      text-align: left;
      overflow-wrap: anywhere;
    }

    .resume-section {
      display: block !important;
    }

    .resume-section__title {
      width: auto !important;
      margin: 18px 0 8px;
      font-weight: 600;
    }

    .resume-row {
      display: block !important;
      margin-bottom: 14px !important;
    }

    .resume-row__extra {
      display: flex;
      gap: 10px;
      justify-content: flex-start;
    }

    .resume-row__extra p {
      text-align: left;
    }

    li {
      font-size: 0.9em;
      line-height: 1.25;
      margin-bottom: 2px;
    }
  }
`;

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div>
      <GlobalStyle />
      <Home />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
