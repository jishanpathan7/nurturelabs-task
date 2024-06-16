import React, { useState } from "react";
import Tabs from "./ui/Tabs";
import FollowButton from "./ui/FollowButton";
import { Info } from "lucide-react";

interface HighlightedTextProps {
  number: number;
  text: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ number, text }) => {
  return (
    <span className="text-[#71767b]">
      <span className="text-white">{number}</span> {text}
    </span>
  );
};

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState("coinsHeld");

  const tabs = [
    { label: "Coins held", value: "coinsHeld" },
    { label: "Replies", value: "replies" },
    { label: "Created", value: "created" },
    { label: "Allocated", value: "allocated" },
  ];

  const coinsHeldContent = (
    <div className="flex flex-col space-y-4">
      {Array(3)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="border border-[#434343] p-4 rounded-xl mb-4 flex justify-start items-start gap-4"
          >
            <img
              src="/assets/bunny-profile.png"
              alt="bunny"
              className="mt-1 h-16 w-16"
            />
            <div>
              <h3>KITTYANN Token</h3>
              <p className="text-yellow-500">100 $KITTYANN (0.1 ETH)</p>
              <p className="text-gray-500">Rewards: 0.1 ETH</p>
            </div>
          </div>
        ))}
    </div>
  );

  const noContentMessage = <div>No content yet.</div>;

  return (
    <div className="w-full md:w-3/5 md:h-screen bg-black text-white p-6">
      <div className="flex justify-between items-center relative">
        <div className="flex flex-col">
          <div className="rounded-full bg-[#f9f9f9] w-24 h-24 mb-4"></div>
          <h1 className="text-xl">@KakarotBuilds</h1>
          <p className="text-[#bfdbfe]">0x243243243223</p>
          <p className="w-2/3 mt-4">
            Building in the SocialFi space. Coming soon to the blockchains near
            you!
          </p>
          <div className="mt-4 flex flex-col w-full gap-2">
            <p className="text-gray-500">Joined May 2024</p>
            <div className="flex gap-4 text-gray-500">
              <HighlightedText number={2} text="Following" />
              <HighlightedText number={0} text="Followers" />
              <HighlightedText number={0} text="Likes" />
              <HighlightedText number={0} text="Mentions" />
            </div>
          </div>
          <div className="mt-4">
            <p>
              {" "}
              <span className="text-gray-500">Rewards Earned:</span> 1.12 ETH
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 md:top-1/2 flex flex-col gap-2">
          <span className="text-xl underline text-yellow-400 flex items-center justify-center">
            <span> 30.23</span>
            <Info className="h-4 w-4 ml-1 mt-1" />
          </span>
          <FollowButton />
        </div>
      </div>

      <div className="mt-8">
        <Tabs tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />
        <div className="mt-4">
          {activeTab === "coinsHeld" && coinsHeldContent}
          {activeTab === "replies" && noContentMessage}
          {activeTab === "created" && noContentMessage}
          {activeTab === "allocated" && noContentMessage}
        </div>
      </div>
    </div>
  );
};

export default Profile;
