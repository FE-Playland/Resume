import React from "react";
import { Resume } from "../types";
import styled from "styled-components";
import { GreyLabel } from "./styledComponents";

const Name = styled.p`
  color: #008;
  font-size: 24px;
  margin: 0;
`;

const Identity = styled.div`
  float: left;
`;

const Headline = styled.p`
  color: #555;
  font-size: 13px;
  margin: 2px 0 0;
`;

const Contact = styled.div``;

const Header = (props: { basicInfo: Resume.BasicInfo }) => {
  const { name, headline, email, wechat, blog, github } = props.basicInfo;
  const githubLink = `https://github.com/${github}`;

  return (
    <div className="resume-header">
      <Identity className="resume-header__identity">
        <Name>{name}</Name>
        {headline && <Headline>{headline}</Headline>}
      </Identity>
      <Contact className="resume-header__contact">
        <GreyLabel>{email}</GreyLabel>
        {wechat && <GreyLabel>WeChat: {wechat}</GreyLabel>}
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
      </Contact>
      <hr />
    </div>
  );
};

export default Header;
