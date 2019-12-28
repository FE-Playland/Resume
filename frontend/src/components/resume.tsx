import React, { Component, useEffect, useState } from "react";
import Header from "./header";
import Section from "./section";
import { Resume } from "../types";

const ResumeHome = (props: { cn: boolean }) => {
  const [resume, setResume] = useState<Resume.ResumeInfo>();

  useEffect(() => {
    const fetchData = async () => {
      let name = "resume";
      if (props.cn) {
        name = "resume-chinese";
      }
      const res = await fetch(`${name}.json`);
      const data = await res.json();
      setResume(data as any);
    };

    fetchData();
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
