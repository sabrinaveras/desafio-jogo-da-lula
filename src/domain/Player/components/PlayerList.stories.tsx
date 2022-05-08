import { Story, Meta } from "@storybook/react";
import { PlayerMock } from "mocks/domain/PlayerMock";
import { PlayerList, PlayerListProps } from "./PlayerList";

export default {
  title: "Domain/Player/PlayerList",
  components: PlayerList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<PlayerListProps> = (args) => (
  <div style={{ width: "100%", height: "100vh", backgroundColor: "#282c34" }}>
    <PlayerList {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: "Jogadores Remanescentes",
  players: [
    PlayerMock(),
    PlayerMock(),
    PlayerMock(),
    PlayerMock(),
    PlayerMock(),
  ],
};

export const NoPlayers = Template.bind({});
NoPlayers.args = {
  title: "Jogadores Remanescentes",
  players: [],
};
