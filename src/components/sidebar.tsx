import Image from "next/image";
import React from "react";
import { Envelope } from "./icons/envelope";
import { Twitter } from "./icons/twitter";
import { Linkedin } from "./icons/linkedin";
import { Medium } from "./icons/medium";

const Sidebar = ({ data }: any) => {
  const { name, role, education, contactLinks } = data;
  return (
    <div className="bg-black flex flex-col w-full h-auto sm:h-screen sm:justify-around sm:w-1/3 sm:fixed">
      <div className="text-white flex flex-col justify-center items-center p-10">
        <Image
          priority
          width={200}
          height={200}
          src="/images/julian-wan-WNoLnJo7tS8-unsplash.jpg"
          alt="julian-wan-WNoLnJo7tS8-unsplash.jpg"
          aria-label="julian-wan-WNoLnJo7tS8-unsplash.jpg"
          className="rounded-full h-full mb-6"
        />
        <h1 className="mb-0">{name}</h1>
        <h2 className="mb-5">{role}</h2>
        <p className="mb-1 text-justify">{education[0]}</p>
        <p className="mb-2">{education[1]}</p>
        <div className="text-white text-center mb-4 mt-4 sm:mt-8">
          <h3 className="uppercase mb-5">Contact Me</h3>
          <div className="flex flex-row justify-center gap-2">
            <a
              className="icons-contactme"
              href={contactLinks?.[0]}
              aria-label={"email link"}
            >
              <Envelope />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[0]}
              aria-label={"twitter link"}
            >
              <Twitter />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[0]}
              aria-label={"linkedin link"}
            >
              <Linkedin />
            </a>
            <a
              className="icons-contactme"
              href={contactLinks?.[0]}
              aria-label={"medium link"}
            >
              <Medium />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
