import React from "react";
import { Search } from "lucide-react";

type Props = {};

const SearchInput = (props: Props) => {
  return (
    <div className="flex items-center bg-[#202327] rounded-full px-4 py-2.5 mb-4">
      <button className="mr-4 ml-1 text-gray-400 hover:text-white">
        <Search className="h-4 w-4" />
      </button>
      <input
        type="text"
        placeholder="Search a coin"
        className="bg-transparent text-white focus:outline-none text-sm"
      />
    </div>
  );
};

export default SearchInput;
