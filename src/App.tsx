import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import ProfileSuggestions from "./components/ProfileSuggestions";

const App = () => {
  return (
    <div className="flex p-4 flex-col md:flex-row items-center justify-center">
      <Sidebar />
      <Profile />
      <ProfileSuggestions />
    </div>
  );
};

export default App;
