import styled from "styled-components";

export interface ButtonProps {
  children: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  width?: string;
  height?: string;
}

export function Button({ children, onClick, width, height }: ButtonProps) {
  return (
    <ButtonWrapper onClick={onClick} setWidth={width} setHeight={height}>
      {children}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button<{ setWidth?: string; setHeight?: string }>`
  width: ${(props) => (props.setWidth === undefined ? "100%" : props.setWidth)};
  height: ${(props) =>
    props.setHeight === undefined ? "40px" : props.setHeight};
  background-color: #ed1b76;
  cursor: pointer;

  border: none;
  border-radius: 8px;

  font-family: "Nunito", sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
`;
