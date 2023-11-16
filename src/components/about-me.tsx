import React, { useId } from "react";
import Skills from "./skills";
interface AboutMeProps {
  data: {
    title: any;
    body: any;
  };
  skills:any
}
const AboutMe: React.FC<AboutMeProps> = ({ data,skills }: any) => {
  const { title, body } = data;
  const id = useId();
  return (
    <section>
      <h2 className="mb-8">{title}</h2>
      {body?.map((el: any, i: any) => (
        <p key={`${id}-${i}`} className="mb-6">
          {" "}
          {el}
        </p>
      ))}
      <Skills data = {skills}/>
    </section>
  );
};

export default AboutMe;
