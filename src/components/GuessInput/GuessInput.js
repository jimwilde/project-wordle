import React from "react";

function GuessInput({ gameStatus, onSubmit }) {
  const [nextGuess, setNextGuess] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(nextGuess);
    setNextGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        title="Must be 5 letters"
        pattern="[A-Za-z]{5}"
        value={nextGuess}
        onChange={(e) => setNextGuess(e.target.value.toUpperCase())}
        disabled={gameStatus !== "running"}
      />
    </form>
  );
}

export default GuessInput;
