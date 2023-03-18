import styled from "styled-components";

export const CustomButton = styled.button`
  width: 100px;
  height: 100px;
  font-size: 40px;
  border-radius: 30px;
  &:hover {
    background-color: ${(props) => props.color || props.textColor};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
