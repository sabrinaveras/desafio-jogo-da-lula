import styled from "styled-components";
import { PlayerProps } from "./GamePage";

export interface GamePageViewProps {
  players: PlayerProps[];
}

export function GamePageView({ players }: GamePageViewProps) {
  return (
    <GamePageViewWrapper>
      <ul>
        {players.map((player) => (
          <li key={player.name.toString()}>{player.name.toString()}</li>
        ))}
      </ul>
    </GamePageViewWrapper>
  );
}

const GamePageViewWrapper = styled.div`
  width: 100%;
  height: 100vh;

  overflow-y: scroll;
`;
