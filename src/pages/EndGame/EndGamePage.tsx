import styled from "styled-components";

import { Player } from "domain/Player";

export interface EndGamePageProps {
  round: number;
  votesEndGame: number;
  remainingPlayers: Player[];
  eliminatePlayers: Player[];
}

export function EndGamePage({
  round,
  votesEndGame,
  remainingPlayers,
  eliminatePlayers,
}: EndGamePageProps) {
  return (
    <EndGamePageWrapper>
      <div>{round}</div>
      <div>{votesEndGame}</div>
      <div>{remainingPlayers.length.toString()}</div>
      <div>{eliminatePlayers.length.toString()}</div>
    </EndGamePageWrapper>
  );
}

const EndGamePageWrapper = styled.div`
  width: calc(100% - 48px);
  height: 100vh;
  background-color: #282c34;

  display: grid;
  grid-template-columns: 400px 1fr 400px;
  grid-template-rows: 1fr;

  padding: 24px;

  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #282c34;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #0c0c0c;
  }
`;
