import React from "react";
import Banner from "../Banner/Banner";
import RestartButton from "../RestartButton/RestartButton";

function BannerWon({ numGuesses, onRestart }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numGuesses === 1 ? "1 guess" : `${numGuesses} guesses`}
        </strong>
        .
      </p>
      <RestartButton onRestart={onRestart} />
    </Banner>
  );
}

export default BannerWon;
