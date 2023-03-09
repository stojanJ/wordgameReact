import React, { useState, useEffect } from "react";
import { wordService, getScore } from "./services/WordService";

function App() {
  const [newWord, setNewWord] = useState({ word:"" });
  const [response, setResponse] = useState("");

  const handleSubmit= async (newWord) => {
    try{
      const response = await wordService.sendWord( newWord );
      setResponse(response);
    } catch { console.error("handleSubmition went wrong") }
  };

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
    </div>
    <div>
     <h1>Score</h1>
      <p>{response ? <h5>{response}</h5> : ""}</p>
    </div>
  </>
  );
}
export default App;