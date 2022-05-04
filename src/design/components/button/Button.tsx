import styled from "styled-components";
import * as ds from "design";

export interface ButtonProps {
  children: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function Button({ children, onClick }: ButtonProps) {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
}

const ButtonWrapper = styled.button`
  width: 100px;
  height: 40px;
  background-color: ${ds.colors.secondaryBrand.hexColor};
  cursor: pointer;

  border: none;
  border-radius: 8px;

  font-family: "Nunito", sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
`;
