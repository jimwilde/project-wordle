import React from "react";
import { LETTERS } from "../../constants";
import { getLetterStatuses } from "../../game-helpers";
import { range } from "../../utils";
import KeyboardRow from "../KeyboardRow/KeyboardRow";

function Keyboard({ guesses, answer }) {
  const letterStatuses = getLetterStatuses(guesses, answer);
  return (
    <div className="keyboard">
      {range(LETTERS.length).map((row) => (
        <KeyboardRow
          key={row}
          guesses={guesses}
          letters={LETTERS[row]}
          statuses={letterStatuses}
        />
      ))}
    </div>
  );
}

export default Keyboard;
