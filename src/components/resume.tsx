import React, { useEffect, useState } from "react";
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
      const res = await fetch(`${process.env.PUBLIC_URL}/${name}.json`);
      const data = await res.json();
      setResume(data as any);
    };

    fetchData();
  }, [props.cn]);

  if (!resume) {
    return <div />;
  }

  return (
    <div
      className="resume"
      style={{
        width: "100%",
        maxWidth: "720px",
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
