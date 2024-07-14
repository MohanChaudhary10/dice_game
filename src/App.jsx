import { useState } from "react";
import "./App.css";
import StartGame from "./component/StartGame";
import GamePlay from "./GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const tooglePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toogle={tooglePlay} />}</>
  );
}

export default App;
