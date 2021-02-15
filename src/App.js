import React, { useState } from "react";
import "./App.css";
import StartModal from "./components/StartModal/StartModal";
import Restart from "./components/Restart/Restart";
import WrittingAccuracy from "./components/WrittingAccuracy/WrittingAccuracy";
import WrittingSpeed from "./components/WrittingSpeed/WrittingSpeed";
import WrittingBox from "./components/WrittingBox/WrittingBox";

function App() {
  return (
    <div className="App">
      <StartModal />
      <Restart />
      <WrittingAccuracy />
      <WrittingSpeed />
      <WrittingBox />
    </div>
  );
}

export default App;
