import React from "react";

function KeyboardLetter({ status, letter }) {
  return <div className={`${status} keyboard-letter`}>{letter}</div>;
}

export default KeyboardLetter;
