import Intro from "./components/Intro";
import Questions from "./components/Questions";
import { useState } from "react";

function App() {
  const [isDisplayInro, setIsDisplayIntro] = useState(true);

  function startQuiz() {
    setIsDisplayIntro((prev) => !prev);
  }
  return (
    <main className="main">
      <img src="/src/images/blob-yellow.png" className="blobYellow" />
      <img src="/src/images/blob-blue.png" className="blobBlue" />
      {isDisplayInro ? <Intro startQuiz={startQuiz} /> : <Questions />}
    </main>
  );
}

export default App;
