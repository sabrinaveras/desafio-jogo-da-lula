import React from "react";

export function useRounds() {
  const [round, setRound] = React.useState<number>(0);

  function setNewRound() {
    setRound(round + 1);
  }

  return { round, setNewRound };
}
