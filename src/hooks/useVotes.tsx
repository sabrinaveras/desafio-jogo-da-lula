import React from "react";
import { Player } from "domain/Player";

export function useVotes(players: Player[]) {
  const [votesToEndGame, setVotesToEndGame] = React.useState<number>(0);

  function clearVotes() {
    setVotesToEndGame(0);
  }

  const calcVotes = React.useCallback(async (players: Player[]) => {
    // During voting, each player has a change of voting Yes or No
    // The change that a player chooses to end the game is 30%
    const count = players.filter((player) => {
      const porcentagem = Math.floor(Math.random() * 101);
      if (porcentagem <= 30) {
        return player;
      }

      return undefined;
    });

    setVotesToEndGame(count.length);
  }, []);

  React.useEffect(() => {
    calcVotes(players);
  }, [calcVotes]);

  return { votesToEndGame, clearVotes, calcVotes };
}
