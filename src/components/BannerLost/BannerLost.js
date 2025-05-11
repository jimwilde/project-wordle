import React from "react";
import Banner from "../Banner/Banner";
import RestartButton from "../RestartButton/RestartButton";

function BannerLost({ answer, onRestart }) {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <RestartButton onRestart={onRestart} />
    </Banner>
  );
}

export default BannerLost;
