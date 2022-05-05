import styled from "styled-components";
import * as ds from "design";

import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  function handleOnClick() {
    navigate("/game");
  }

  return (
    <HomePageWrapper>
      <LogoWrapper>
        <ds.icons.SquidGameLogo />
      </LogoWrapper>
      <ds.components.button.Button
        onClick={() => handleOnClick()}
        width="120px"
      >
        Começar
      </ds.components.button.Button>
    </HomePageWrapper>
  );
};

const LogoWrapper = styled.div`
  width: 50%;
`;

const HomePageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #282c34;

  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
`;
