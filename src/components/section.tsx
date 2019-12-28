import React from "react";
import Row from "./row";
import { Resume } from "../types";

const Section = (props: Resume.Section) => {
  const { title, rows } = props;

  return (
    <div
      style={{
        display: "flex"
      }}
    >
      <div
        style={{
          color: "#008",
          width: "130px"
        }}
      >
        {title}
      </div>
      <div
        style={{
          flex: "1",
          marginBottom: "10px"
        }}
      >
        {rows.map((row, key) => {
          return <Row {...row} key={key} />;
        })}
      </div>
    </div>
  );
};

export default Section;
