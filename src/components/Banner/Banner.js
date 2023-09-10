import React from "react";

function Banner({ gameStatus, answer, attempts }) {
  if (gameStatus === "happy") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{attempts} guesses</strong>.
        </p>
      </div>
    );
  } else if (gameStatus === "sad") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

export default Banner;
