import "bootstrap/dist/css/bootstrap.min.css";
import "App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footter from "./components/Footter";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-conatiner">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet />
          <Footter></Footter>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
