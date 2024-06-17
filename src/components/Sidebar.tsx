/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { SidebarOptions } from "../constants";
import CreateCoinButton from "./ui/CreateCoinButton";
import ProfileButton from "./ui/ProfileButton";
import SearchInput from "./ui/SearchInput";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full md:w-1/5">
      {/* Mobile Header */}
      <div className="flex justify-between items-center p-4 bg-black text-white">
        <img src="/assets/main-logo.png" alt="logo" className="h-10 w-10 mb-4" />
        <div className="block md:hidden">
          <SearchInput />
        </div>
        <button
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
          className="md:hidden"
        >
          {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8 mb-4" />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-full md:h-screen bg-black text-white p-10 pt-3`}
      >
        {/* Close button for mobile */}
        <div className="flex mb-8 mt-4 justify-end items-ende md:hidden">
          <button onClick={toggleSidebar} aria-label="Close sidebar">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-6 w-full">
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

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
