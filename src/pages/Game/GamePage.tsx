import React from "react";
import { useNavigate } from "react-router-dom";
import faker from "@faker-js/faker";
import { GamePageView } from "./GamePageView";
import { Player } from "domain/Player";

export function GamePage() {
  const navigate = useNavigate();

  const [round, setRound] = React.useState<number>(0);
  const [remainingPlayers, setRemainingPlayers] = React.useState<Player[]>([]);
  const [eliminatePlayers, setEliminatePlayers] = React.useState<Player[]>([]);
  const [votesEndGame, setVotesEndGame] = React.useState<number>(0);

  React.useEffect(() => {
    setRemainingPlayers(addPlayer());
  }, []);

  function addPlayer() {
    let newPlayers: Player[] = [];
    for (let count = 0; count < 69; count++) {
      newPlayers.push({ name: `${count} ${faker.name.findName()}` } as Player);
    }

    return newPlayers;
  }

  async function calcVotes(players: Player[]) {
    // During voting, each player has a change of voting Yes or No
    // The change that a player chooses to end the game is 30%
    const count = players.filter((player) => {
      const porcentagem = Math.floor(Math.random() * 101);
      if (porcentagem <= 30) {
        return player;
      }

      return undefined;
    });

    return count.length;
  }

  async function newRound() {
    setRound(round + 1);
    setVotesEndGame(0);
    // each round the player has a 42% chance of being eliminated
    const players = remainingPlayers.filter((player) => {
      const porcentagem = Math.floor(Math.random() * 101);
      if (porcentagem <= 42) {
        setEliminatePlayers((oldEliminatePlayers) => [
          ...oldEliminatePlayers,
          player,
        ]);
        return undefined;
      } else {
        return player;
      }
    });
    setRemainingPlayers(players);
    const votes = await calcVotes(players);
    setVotesEndGame(votes);

    if (players.length === 0 || votes >= players.length / 2) {
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
