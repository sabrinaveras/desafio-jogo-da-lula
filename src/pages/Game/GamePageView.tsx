import styled from "styled-components";
import * as ds from "design";

import { Player } from "domain/Player";
import { PlayerList } from "domain/Player/components/PlayerList";

export interface GamePageViewProps {
  remainingPlayers: Player[];
  eliminatePlayers: Player[];
  round: number;
  votesEndGame: number;
  newRound: () => void;
}

export function GamePageView({
  remainingPlayers,
  eliminatePlayers,
  round,
  votesEndGame,
  newRound,
}: GamePageViewProps) {
  return (
    <GamePageViewWrapper>
      <div>
        <PlayerList
          players={remainingPlayers}
          title={"Jogadores Remanescentes"}
        />
      </div>
      <GameInfo
        round={round}
        eliminatePlayers={eliminatePlayers}
        votesEndGame={votesEndGame}
        newRound={newRound}
      />
      <div>
        <PlayerList players={eliminatePlayers} title={"Jogadores Eliminados"} />
      </div>
    </GamePageViewWrapper>
  );
}

function GameInfo({
  round,
  eliminatePlayers,
  votesEndGame,
  newRound,
}: {
  round: number;
  eliminatePlayers: Player[];
  votesEndGame: number;
  newRound: () => void;
}) {
  return (
    <GameInfoWrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <RoundWrapper>Round: {round}</RoundWrapper>

        <AmountWrapper>
          Fundo do Prêmio: {420 * eliminatePlayers.length}
        </AmountWrapper>
      </div>

      <div style={{ margin: "24px 0px" }}>
        <ds.icons.SoldierSquare />
      </div>

      <div>Votos par ao fim do jogo: {votesEndGame}</div>

      <div style={{ marginTop: "24px" }}>
        <ds.components.button.Button onClick={() => newRound()} width={"180px"}>
          {round === 0 ? "Iniciar Rodada" : "Nova Rodada"}
        </ds.components.button.Button>
      </div>
    </GameInfoWrapper>
  );
}

const GameInfoWrapper = styled.div`
  font-family: "Nunito", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;

  display: flex;
  flex-direction: column;
  text-align: center;
`;

const AmountWrapper = styled.div`
  font-family: "Nunito", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
`;

const RoundWrapper = styled.div``;

const GamePageViewWrapper = styled.div`
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
