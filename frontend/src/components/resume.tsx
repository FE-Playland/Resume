import React, { Component, useEffect, useState } from "react";
import Header from "./header";
import Section from "./section";
import { Resume } from "../types";

const ResumeHome = () => {
  const [resume, setResume] = useState<Resume.ResumeInfo>();

  useEffect(() => {
    fetch("http://localhost:8989/db")
      .then(res => res.json())
      .then(res => setResume(res));
  }, []);

  if (!resume) {
    return <div />;
  }

  return (
    <div
      style={{
        width: "720px",
        padding: "30px",
        boxSizing: "border-box"
      }}
    >
      <Header basicInfo={resume.basic_info} />
      {resume.sections.map((section, key) => {
        return <Section {...section} key={key} />;
      })}
    </div>
  );
};

export default ResumeHome;
