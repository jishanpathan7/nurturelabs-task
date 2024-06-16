import { Home, Bell, UserRoundCheck, Settings } from "lucide-react";

export const SidebarOptions = [
  {
    label: "Home",
    icon: <Home />,
    link: "/home",
  },
  {
    label: "Notifications",
    icon: <Bell />,
    link: "/notifications",
  },
  {
    label: "Profile",
    icon: <UserRoundCheck />,
    link: "/profile",
  },
  {
    label: "Setting",
    icon: <Settings />,
    link: "/setting",
  },
];

export const suggestions = [
  {
    image: "/assets/epic-profile.png",
    name: "Physics Today",
    username: "PhysicsTodayX",
  },
  {
    image: "/assets/epic-profile.png",
    name: "Johns Charts",
    username: "JohnsCharts",
  },
  { image: "/assets/epic-profile.png", name: "Naval", username: "naval" },
];

export const footerLinks = [
  { label: "Terms of Service", link: "#" },
  { label: "Privacy Policy", link: "#" },
  { label: "Cookie Policy", link: "#" },
  { label: "Accessibility", link: "#" },
  { label: "Ads info", link: "#" },
  { label: "More", link: "#" },
];
