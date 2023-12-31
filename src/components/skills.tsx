"use client";
import React, { useState } from "react";

const Skills = ({ data }: any) => {
  const [activeTab, setActiveTab] = useState("soft");
  const setBg = (active: string) =>
    activeTab === active ? "bg-yellow" : "bg-grey";
  const setTabsAlignment = (tab: string) =>
    tab === "soft" ? "text-left" : "text-right";
  const tabs = (
    <div className="flex">
      {["soft", "hard"].map((el) => (
        <button
          key={el}
          type="button"
          className={`btn ${setBg(el)} ${setTabsAlignment(el)}`}
          onClick={() => setActiveTab(el)}
        >
          {el} Skills
        </button>
      ))}
    </div>
  );
  const content = (
    <>
      <ul
        className={`flex flex-row flex-wrap content-start list-none py-4 gap-2 ${
          activeTab === "soft" ? "justify-center" : "justify-center"
        }`}
      >
        {data[activeTab].map(({ icon, text }: any) => (
          <>
            <li key={text} className="skill">
              <span>{icon}</span>
              {text}
            </li>
          </>
        ))}
      </ul>
    </>
  );
  return (
    <div>
      {tabs}
      {content}
    </div>
  );
};

export default Skills;
