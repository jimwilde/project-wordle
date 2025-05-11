import React from "react";
import { range } from "../../utils";
import KeyboardLetter from "../KeyboardLetter/KeyboardLetter";

function KeyboardRow({ letters, statuses }) {
  return (
    <div className="keyboard-row">
      {range(letters.length).map((num) => (
        <KeyboardLetter
          status={statuses.get(letters[num])}
          key={num}
          letter={letters[num]}
        />
      ))}
    </div>
  );
}

export default KeyboardRow;
