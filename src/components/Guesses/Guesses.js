import React from "react";
import { range } from "../../utils.js";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

function Guesses({ submissions, guessCheck }) {
  return (
    <div className="guess-results">
      {guessCheck.map((guess, index) => (
        <p className="guess" key={index}>
          {guess.map(({ letter, status }, position) => (
            <span className={`cell ${status}`} key={`${index}_${position}`}>
              {letter}
            </span>
          ))}
        </p>
      ))}
      {range(submissions.length, NUM_OF_GUESSES_ALLOWED).map((row) => (
        <p className="guess" key={row} aria-label={row}>
          {range(0, 5).map((col) => (
            <span className={`cell`} key={`${row}_${col}`}></span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Guesses;
