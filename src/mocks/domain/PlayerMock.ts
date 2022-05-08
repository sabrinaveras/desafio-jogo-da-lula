import faker from "@faker-js/faker";
import { Player } from "domain/Player";

export interface PlayerMockProps {
  name?: string;
}

export function PlayerMock(props?: PlayerMockProps): Player {
  const defaultProps: PlayerMockProps = {
    name: faker.name.findName(),
  };

  const finalProps = Object.assign({}, defaultProps, props);

  return Player.restore({ name: finalProps.name as string });
}
