import styled from "styled-components";
import * as ds from "design";

import { Player } from "domain/Player";
import { PlayerList } from "domain/Player/components/PlayerList";

export interface GamePageProps {
  remainingPlayers: Player[];
  eliminatePlayers: Player[];
  round: number;
  votesToEndGame: number;
  newRound: () => void;
  endGame: boolean;
  newGame: () => void;
}

export function GamePage({
  remainingPlayers,
  eliminatePlayers,
  round,
  votesToEndGame,
  newRound,
  endGame,
  newGame,
}: GamePageProps) {
  return (
    <GamePageWrapper>
      <div>
        <PlayerList
          players={remainingPlayers}
          title={"Jogadores Remanescentes"}
        />
      </div>
      {endGame ? (
        <EndGameInfo
          round={round}
          remainingPlayers={remainingPlayers}
          eliminatePlayers={eliminatePlayers}
          votesToEndGame={votesToEndGame}
          newGame={newGame}
        />
      ) : (
        <CurrentGameInfo
          round={round}
          eliminatePlayers={eliminatePlayers}
          votesToEndGame={votesToEndGame}
          newRound={newRound}
        />
      )}

      <div>
        <PlayerList players={eliminatePlayers} title={"Jogadores Eliminados"} />
      </div>
    </GamePageWrapper>
  );
}

function CurrentGameInfo({
  round,
  eliminatePlayers,
  votesToEndGame,
  newRound,
}: {
  round: number;
  eliminatePlayers: Player[];
  votesToEndGame: number;
  newRound: () => void;
}) {
  return (
    <CurrentGameInfoWrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <RoundWrapper>Round: {round}</RoundWrapper>

        <AmountWrapper>
          Fundo do Prêmio: {420 * eliminatePlayers.length}
        </AmountWrapper>
      </div>

      <div style={{ margin: "24px 0px" }}>
        <ds.icons.SoldierSquare />
      </div>

      <div>Votos par ao fim do jogo: {votesToEndGame}</div>

      <div style={{ marginTop: "24px" }}>
        <ds.components.button.Button onClick={() => newRound()} width={"180px"}>
          {round === 0 ? "Iniciar Rodada" : "Nova Rodada"}
        </ds.components.button.Button>
      </div>
    </CurrentGameInfoWrapper>
  );
}

function EndGameInfo({
  round,
  remainingPlayers,
  eliminatePlayers,
  votesToEndGame,
  newGame,
}: {
  round: number;
  remainingPlayers: Player[];
  eliminatePlayers: Player[];
  votesToEndGame: number;
  newGame: () => void;
}) {
  const totalAmount = 420 * eliminatePlayers.length;
  const prizePerParticipant = totalAmount / remainingPlayers.length;

  return (
    <CurrentGameInfoWrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <RoundWrapper>Round: {round}</RoundWrapper>

        <AmountWrapper>Fundo do Prêmio: {totalAmount}</AmountWrapper>
      </div>

      <FinalResults>
        <div>Total de Jogadores Remanescentes: {remainingPlayers.length}</div>
        <div>Total de Jogadores Eliminados: {eliminatePlayers.length}</div>
        <div>Votos para o fim do jogo: {votesToEndGame}</div>
        <div>Prêmio par aos jogadores remanescentes: {prizePerParticipant}</div>
      </FinalResults>

      <div style={{ margin: "24px 0px" }}>
        <ds.icons.SoldierCircle />
      </div>

      <div>Votos par ao fim do jogo: {votesToEndGame}</div>

      <div style={{ marginTop: "24px" }}>
        <ds.components.button.Button onClick={() => newGame()} width={"180px"}>
          Novo Jogo
        </ds.components.button.Button>
      </div>
    </CurrentGameInfoWrapper>
  );
}

const FinalResults = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  width: fit-content;
  gap: 8px;
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;

  border: 1.5px solid #ffffff;
  border-radius: 8px;
  padding: 8px;
`;

const CurrentGameInfoWrapper = styled.div`
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

const GamePageWrapper = styled.div`
  width: calc(100% - 48px);
  height: 100vh;
  background-color: #282c34;

  display: grid;
  grid-template-columns: 400px 1fr 400px;
  grid-template-rows: 1fr;
  grid-gap: 16px;

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
