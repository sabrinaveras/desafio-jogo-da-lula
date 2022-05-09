import React from "react";
import { useRounds } from "hooks/useRounds";
import { useVotes } from "hooks/useVotes";
import { usePlayers } from "hooks/usePlayers";
import { GamePage } from "./GamePage";
import { useNavigate } from "react-router-dom";

export function Game() {
  const navigation = useNavigate()
  const [endGame, setEndGame] = React.useState<boolean>(false)

  const { remainingPlayers, eliminatePlayers, addPlayers, removePlayers } =
    usePlayers();
  const { round, setNewRound } = useRounds();
  const { votesToEndGame, clearVotes, calcVotes } = useVotes(remainingPlayers);

  const RedLightRound = new Audio("'../../../public/red-light-sound.mp3'")

  React.useEffect(() => {
    addPlayers();
  }, []);

  async function handleNewRound() {
    RedLightRound.play()

    setNewRound();
    clearVotes();
    removePlayers();
    calcVotes(remainingPlayers);

    if (
      remainingPlayers.length === 0 ||
      votesToEndGame >= remainingPlayers.length / 2
    ) {
      setEndGame(true)
    }
  }

  function handleNewGame(){
    navigation('/')
  }

  return (
    <GamePage
      remainingPlayers={remainingPlayers}
      eliminatePlayers={eliminatePlayers}
      round={round}
      votesToEndGame={votesToEndGame}
      newRound={handleNewRound}
      endGame={endGame}
      newGame={handleNewGame}
    />
  );
}
