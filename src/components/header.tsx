import React from "react";
import { Resume } from "../types";
import styled from "styled-components";
import { GreyLabel } from "./styledComponents";

const Name = styled.p`
  color: #008;
  font-size: 24px;
  float: left;
  margin: 0;
`;

const Header = (props: { basicInfo: Resume.BasicInfo }) => {
  const { name, email, blog, github } = props.basicInfo;
  const githubLink = `https://github.com/${github}`;

  return (
    <div>
      <Name>{name}</Name>
      <GreyLabel>{email}</GreyLabel>
      <GreyLabel>
        <a href={blog} target="_blank" rel="noopener noreferrer">
          {blog}
        </a>
      </GreyLabel>
      <GreyLabel>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          {githubLink}
        </a>
      </GreyLabel>
      <hr />
    </div>
  );
};

export default Header;
