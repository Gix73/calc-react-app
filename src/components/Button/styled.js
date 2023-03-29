import styled from "styled-components";

export const CustomButton = styled.button`
  width: ${(props) => (props.pos === true ? "100%" : "100px")};
  height: 100px;
  font-size: 40px;
  border-radius: 30px;
  &:hover {
    background-color: ${(props) => props.theme.btnColor};
  }

  @media (max-width: 1024px) {
    width: ${(props) => (props.pos === true ? "100%" : "50px")};
    height: 50px;
    font-size: 20px;
  }

  @media (max-width: 1024px) {
    width: ${(props) => (props.pos === true ? "100%" : "50px")};
    height: 50px;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    width: ${(props) => (props.pos === true ? "100%" : "30px")};
    height: 30px;
    font-size: 10px;
  }

  @media (max-width: 425px) {
    width: ${(props) => (props.pos === true ? "100%" : "20px")};
    height: 20px;
    font-size: 10px;
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
