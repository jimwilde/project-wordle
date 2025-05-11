import React from "react";

function RestartButton({ onRestart }) {
  return (
    <button className="restart-btn" onClick={onRestart}>
      Restart game
    </button>
  );
}

export default RestartButton;
