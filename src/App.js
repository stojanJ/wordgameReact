import React, { useState, useEffect } from "react";
import { wordService, getScore } from "./services/WordService";

function App() {
  const [newWord, setNewWord] = useState({ word:"" });
  const [score, setScore] = useState(0);
  const [response, setResponse] = useState("");

  useEffect(() => {
    handleGetHighScores();
  }, []);

  const handleSubmit= async (newWord) => {
    try{
      const response = await wordService.sendWord( newWord );
      setResponse(response);
    } catch { console.error("handleSubmition went wrong") }
  };


  async function handleGetHighScores() {
    const response = await wordService.getScore();
    setScore(response);
  }

  return (
  <>
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Your word:
          <input
          required
          type="word"
          value={newWord.word}
          onChange={({ target }) =>
            setNewWord({ ...newWord, word: target.value })
          }
        /></label>
        <button type="submit">Play</button>
      </form>
      <p>{response ? <h5>{response}</h5> : ""}</p>
    </div>
    <div>
     <h1>Score</h1>
       {score ? <h5>{score}</h5> : ""}
    </div>
  </>
  );
}
export default App;