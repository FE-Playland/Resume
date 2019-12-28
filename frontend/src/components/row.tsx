import React, { Component } from "react";
import { Resume } from "../types";
import { GreyLabel } from "./styledComponents";

const ItemList = (props: { items: Resume.Item[] }) => {
  return (
    <ul>
      {props.items.map((item, key) => {
        return (
          <li key={key} dangerouslySetInnerHTML={{ __html: item.text }}></li>
        );
      })}
    </ul>
  );
};

const ExtraInfoItem = (props: { date?: string; location?: string }) => {
  const { date, location } = props;

  return (
    <div
      style={{
        flexGrow: 2,
        whiteSpace: "nowrap"
      }}
    >
      <GreyLabel>{location}</GreyLabel>
      <GreyLabel>{date}</GreyLabel>
    </div>
  );
};

const Row = (props: Resume.Row) => {
  const { icon, link, name, subtitle, location, date, items } = props;
  return (
    <div
      style={{
        display: "flex",
        marginBottom: "10px",
        lineHeight: "1.1em",
        justifyContent: "flex-start"
      }}
    >
      <div
        style={{
          flexGrow: 1
        }}
      >
        <div className="row-header">
          <a href={link} target="_blank">
            {name}
          </a>
          {icon && <img src={icon} />}
          <p
            style={{
              fontWeight: "bold",
              fontSize: "0.8em"
            }}
          >
            {subtitle}
          </p>
        </div>
        {items && <ItemList items={items} />}
      </div>
      <ExtraInfoItem date={date} location={location} />
    </div>
  );
};

export default Row;
