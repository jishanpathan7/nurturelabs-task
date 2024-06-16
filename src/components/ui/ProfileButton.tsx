// ProfileButton.tsx
import React from "react";

interface ProfileButtonProps {
  image: string;
  name: string;
  username: string;
}

const ProfileButton: React.FC<ProfileButtonProps> = ({
  image,
  name,
  username,
}) => {
  return (
    <div className="flex items-center space-x-4 p-2 rounded cursor-pointer">
      <img src={image} alt={name} className="h-10 w-10 rounded-full" />
      <div className="flex flex-col">
        <span className="text-white font-semibold">@{name}</span>
        <span className="text-gray-400">@{username}</span>
      </div>
    </div>
  );
};

export default ProfileButton;
