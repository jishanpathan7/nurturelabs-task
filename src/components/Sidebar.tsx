/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { SidebarOptions } from "../constants";
import CreateCoinButton from "./ui/CreateCoinButton";
import ProfileButton from "./ui/ProfileButton";
import SearchInput from "./ui/SearchInput";

const Sidebar = () => {
  return (
    <div className="w-full md:w-1/5 md:h-screen bg-black text-white flex flex-col p-10 pt-3">
      <div className="flex mb-8 gap-10 justify-between">
        <img src="/assets/main-logo.png" alt="logo" className="h-10 w-10" />
        <div className="block md:hidden">
          <SearchInput />
        </div>
      </div>
      <nav className="flex flex-col space-y-6">
        {SidebarOptions.map((item, index) => (
          <div key={index} className="flex gap-6 text-xl">
            <span>{item?.icon}</span>
            <a href={item?.link} target="_blank" rel="noreferrer">
              {item?.label}
            </a>
          </div>
        ))}
        <CreateCoinButton />
        <ProfileButton
          name="Kakarot"
          username="KakarotBuilds"
          image="/assets/epic-profile.png"
        />
      </nav>
    </div>
  );
};

export default Sidebar;
