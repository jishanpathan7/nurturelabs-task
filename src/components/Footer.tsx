import React from "react";
import { footerLinks } from "../constants";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-full bg-black text-gray-400 text-sm p-4 flex flex-wrap gap-x-4 gap-y-2">
      {footerLinks.map((link, index) => (
        <a
          key={index}
          href={link.link}
          target="_blank"
          rel=" noreferrer"
          className="hover:underline"
        >
          {link.label}
        </a>
      ))}

      <div>© 2024 X Corp.</div>
    </div>
  );
};

export default Footer;
