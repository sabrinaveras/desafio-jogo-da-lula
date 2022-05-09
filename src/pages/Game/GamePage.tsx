import React from "react";
import { useNavigate } from "react-router-dom";
import { useRounds } from "hooks/useRounds";
import { useVotes } from "hooks/useVotes";
import { usePlayers } from "hooks/usePlayers";
import { GamePageView } from "./GamePageView";

export function GamePage() {
  const navigate = useNavigate();

  const { remainingPlayers, eliminatePlayers, addPlayers, removePlayers } =
    usePlayers();
  const { round, setNewRound } = useRounds();
  const { votesEndGame, clearVotes, calcVotes } = useVotes(remainingPlayers);

  React.useEffect(() => {
    addPlayers();
  }, []);

  async function newRound() {
    setNewRound();
    clearVotes();
    removePlayers();
    calcVotes(remainingPlayers);

    if (
      remainingPlayers.length === 0 ||
      votesEndGame >= remainingPlayers.length / 2
    ) {
      //end the game
      navigate("/end-game");
    }
  }

  return (
    <GamePageView
      remainingPlayers={remainingPlayers}
      eliminatePlayers={eliminatePlayers}
      round={round}
      votesEndGame={votesEndGame}
      newRound={newRound}
    />
  );
}
