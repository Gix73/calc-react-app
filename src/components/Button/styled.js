import styled from "styled-components";

export const CustomButton = styled.button`
  width: ${(props) => (props.pos === true ? "100%" : "100px")};
  height: 100px;
  font-size: 40px;
  border-radius: 30px;
  &:hover {
    background-color: ${(props) => props.theme.btnColor};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => {
    if (props.pos === true) {
      return "grid-column: 1 / -1";
    }
  }}
`;
