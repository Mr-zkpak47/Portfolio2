import AboutMe from "@/components/about-me";
import ProfessionalExperience from "@/components/professional-experience";
import { aboutMe, skills, professionalData } from "@/data/page-data";
import React from "react";
const page = () => {
  return (
    <div>
      <AboutMe data={aboutMe} skills={skills} />
      <ProfessionalExperience data={professionalData} />
    </div>
  );
};

export default page;
