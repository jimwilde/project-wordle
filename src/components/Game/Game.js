import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { sample } from "../../utils";
import BannerLost from "../BannerLost/BannerLost";
import BannerWon from "../BannerWon/BannerWon";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Keyboard from "../Keyboard/Keyboard";

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [gameStatus, setGameStatus] = React.useState("running");
  const [guesses, setGuesses] = React.useState([]);

  const addGuess = (guess) => {
    const nextGuesses = [...guesses, guess];
    setGuesses([...guesses, guess]);
    if (guess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };

  const onRestart = () => {
    setAnswer(sample(WORDS));
    setGameStatus("running");
    setGuesses([]);
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput gameStatus={gameStatus} onSubmit={addGuess} />
      <Keyboard guesses={guesses} answer={answer} />
      {gameStatus === "won" && (
        <BannerWon numGuesses={guesses.length} onRestart={onRestart} />
      )}
      {gameStatus === "lost" && (
        <BannerLost answer={answer} onRestart={onRestart} />
      )}
    </>
  );
}

export default Game;
