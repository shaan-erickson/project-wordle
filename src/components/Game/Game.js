import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers.js";
import Banner from "../Banner";
import Guesses from "../Guesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [submissions, setSubmissions] = React.useState([]);
  const [guessCheck, setGuessCheck] = React.useState([]);

  function handleSubmission(guess) {
    if (guess.length !== 5) {
      window.alert("Your guess must be exactly 5 characters");
      return false;
    }
    const newSubmission = {
      guess,
      id: Math.random(),
    };
    const nextSubmissions = [...submissions, newSubmission];
    setSubmissions(nextSubmissions);
    return true;
  }

  const [guess, setGuess] = React.useState("");
  const [gameStatus, setGameStatus] = React.useState("active");
  return (
    <>
      <Guesses submissions={submissions} guessCheck={guessCheck} />
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          if (handleSubmission(guess)) {
            const newCheck = [...guessCheck, checkGuess(guess, answer)];
            setGuessCheck(newCheck);
            setGuess("");
            if (guess === answer) {
              setGameStatus("happy");
            } else if (newCheck.length >= 6) {
              setGameStatus("sad");
            }
          }
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          value={guess}
          onChange={(event) => {
            if (event.target.value.length < 6)
              setGuess(event.target.value.toUpperCase());
          }}
          type="text"
          disabled={gameStatus !== "active"}
        />
      </form>
      <Banner
        gameStatus={gameStatus}
        answer={answer}
        attempts={submissions.length}
      />
    </>
  );
}

export default Game;
