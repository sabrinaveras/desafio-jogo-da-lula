import React from "react";

export interface PlayerProps {
  name: string;
}

export class Player extends React.Component<PlayerProps> {
  private constructor(props: PlayerProps) {
    super(props);
  }

  get name(): string {
    return this.props.name;
  }

  static restore(props: PlayerProps): Player {
    return new Player(props);
  }
}
