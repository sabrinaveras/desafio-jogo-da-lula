import { useRounds } from "hooks/useRounds";
import { usePlayers } from "hooks/usePlayers";
import { useVotes } from "hooks/useVotes";
import { EndGamePage } from "./EndGamePage";

export function EndGame() {
  const { round } = useRounds();
  const { remainingPlayers, eliminatePlayers } = usePlayers();
  const { votesEndGame } = useVotes(remainingPlayers);

  return (
    <EndGamePage
      round={round}
      votesEndGame={votesEndGame}
      remainingPlayers={remainingPlayers}
      eliminatePlayers={eliminatePlayers}
    />
  );
}
