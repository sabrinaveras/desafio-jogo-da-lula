import { Player } from "..";
import styled from "styled-components";

export interface PlayerListProps {
  players: Player[];
  title: string;
}

export function PlayerList({ players, title }: PlayerListProps) {
  const half = Math.floor(players.length / 2);

  const firstHalf = players.slice(0, half);
  const secondHalf = players.slice(half);

  return (
    <PlayerListWrapper>
      <PlayerListTitleWrapper>{title}</PlayerListTitleWrapper>
      <PlayerListContent>
        {players.length === 1 ? (
          <Column>
            {players.map((player, index) => (
              <PlayerListItem key={index}>{player.name}</PlayerListItem>
            ))}
          </Column>
        ) : (
          <>
            <Column>
              {firstHalf.map((player, index) => (
                <PlayerListItem key={index}>{player.name}</PlayerListItem>
              ))}
            </Column>

            <Column>
              {secondHalf.map((player, index) => (
                <PlayerListItem key={index}>{player.name}</PlayerListItem>
              ))}
            </Column>
          </>
        )}
      </PlayerListContent>
    </PlayerListWrapper>
  );
}

const PlayerListItem = styled.p`
  font-family: "Nunito", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;

  margin: 0;
  padding: 8px;

  &:nth-child(odd) {
    background-color: #0c0c0c;
  }
`;

const Column = styled.div``;

const PlayerListContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const PlayerListTitleWrapper = styled.h3`
  font-family: "Nunito", sans-serif;
  font-size: 17px;
  font-weight: 600;
  color: #ffffff;
`;

const PlayerListWrapper = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
`;
