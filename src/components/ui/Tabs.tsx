import React from "react";

interface Tab {
  label: string;
  value: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabClick: (value: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className="flex border-b border-gray-700">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          className={`flex-1 py-2 px-4 text-center ${
            activeTab === tab.value
              ? "border-b-2 border-blue-500 text-white"
              : "text-gray-500"
          }`}
          onClick={() => onTabClick(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
