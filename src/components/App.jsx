import { useState } from "react";
import "../styles/App.css";
import MainContent from "./MainContent";
import Header from "./Header";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <div className="app-content">
      <header>
        <Header score={score} bestScore={bestScore} />
      </header>
      <main>
        <MainContent
          score={score}
          setScore={setScore}
          bestScore={bestScore}
          setBestScore={setBestScore}
        />
      </main>
    </div>
  );
}

export default App;
