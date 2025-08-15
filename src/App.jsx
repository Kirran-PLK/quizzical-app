import Intro from "./components/Intro";
import blobYellow from "/src/images/blob-yellow.png";
import blobBlue from "/src/images/blob-blue.png";
import Questions from "./components/Questions";
import { useState } from "react";

function App() {
  const [isDisplayInro, setIsDisplayIntro] = useState(true);

  function startQuiz() {
    setIsDisplayIntro((prev) => !prev);
  }
  return (
    <main className="main">
      <img src={blobYellow} className="blobYellow" />
      <img src={blobBlue} className="blobBlue" />
      {isDisplayInro ? <Intro startQuiz={startQuiz} /> : <Questions />}
    </main>
  );
}

export default App;
