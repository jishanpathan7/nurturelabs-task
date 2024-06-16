// ProfileSuggestions.tsx
import React from "react";
import FollowButton from "./ui/FollowButton";
import ProfileButton from "./ui/ProfileButton";
import { suggestions } from "../constants";
import SearchInput from "./ui/SearchInput";
import Footer from "./Footer";

const ProfileSuggestions = () => {
  return (
    <div className="w-full md:w-1/4 md:h-screen bg-black text-white p-4">
      <div className="hidden md:block w-full">
        <SearchInput />
      </div>
      <div className="border border-[#434343] p-4 rounded-xl mb-4">
        <img
          src="/assets/ultra-stonk.png"
          alt="ultra-stonk"
          className="text-xl"
        />
        <div className="flex justify-start items-start gap-4 mt-2">
          <img
            src="/assets/bunny-profile.png"
            alt="bunny-img"
            className="mt-2 w-24 h-24  object-fill"
          />
          <div className="mt-2 flex flex-col gap-1">
            <p>KITTYANN Token</p>
            <p className="text-sm">
              Created by <span className="text-blue-500">@bonk20_solana</span>
            </p>
            <p className="text-[#86EFAC] text-sm">Market cap: 450k (10%)👑🦄</p>
            <p className="text-[#86EFAC] text-sm">Comments: 80, Holders: 200</p>
          </div>
        </div>
      </div>
      <div className="border border-[#434343] p-6 rounded-xl">
        <img
          src="/assets/king-stonk.png"
          alt="ultra-stonk"
          className="text-xl"
        />
        <div className="mt-4 space-y-4">
          {suggestions.map((profile, index) => (
            <div key={index} className="flex items-center justify-between">
              <ProfileButton
                image={profile.image}
                name={profile.name}
                username={profile.username}
              />
              <FollowButton />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileSuggestions;
