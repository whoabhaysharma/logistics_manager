import { useState } from "react";
import Main from "./Components/MainContent";
import SideBar from "./Components/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="app">
     

      <SideBar />
      <Main />
    </div>
  );
}

export default App;
