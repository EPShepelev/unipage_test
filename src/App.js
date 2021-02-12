import "./App.css";
import StartModal from "./components/StartModal/StartModal";
import Restart from "./components/Restart/Restart";
import WrittingAccuracy from "./components/WrittingAccuracy/WrittingAccuracy";
import WrittingSpeed from "./components/WrittingSpeed/WrittingSpeed";

function App() {
  return (
    <div className="App">
      <StartModal />
      <Restart />
      <WrittingAccuracy />
      <WrittingSpeed />
    </div>
  );
}

export default App;
