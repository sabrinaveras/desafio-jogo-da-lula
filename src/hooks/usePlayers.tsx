import React from "react";
import faker from "@faker-js/faker";
import { Player } from "domain/Player";

export function usePlayers() {
  const [remainingPlayers, setRemainingPlayers] = React.useState<Player[]>([]);
  const [eliminatePlayers, setEliminatePlayers] = React.useState<Player[]>([]);

  function addPlayers() {
    const newPlayers: Player[] = [...new Array(69)].map(
      (_, i) => ({ name: `${i} ${faker.name.findName()}` } as Player)
    );

    setRemainingPlayers(newPlayers);
  }

  function removePlayers() {
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
  }

  return { remainingPlayers, eliminatePlayers, addPlayers, removePlayers };
}
