import React from "react";
import faker from "@faker-js/faker";
import { GamePageView } from "./GamePageView";

export interface PlayerProps {
  name: string;
}

export function GamePage() {
  const [players, setPlayers] = React.useState<PlayerProps[]>([]);
  // const [eliminatePlayers, setEliminatePlayers] = React.useState<PlayerProps[]>(
  //   []
  // );
  // const [totalAmount, setTotalAmount] = React.useState<number>(0);

  React.useEffect(() => {
    setPlayers(addPlayer());
  }, []);

  function addPlayer() {
    let newPlayers: PlayerProps[] = [];
    for (let count = 0; count < 69; count++) {
      newPlayers.push({ name: faker.name.findName() });
    }

    return newPlayers;
  }

  return <GamePageView players={players} />;
}
