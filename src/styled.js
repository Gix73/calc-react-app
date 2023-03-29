import styled from "styled-components";

export const AppWrapper = styled.div`
  max-width: 100%;
  min-width: 320px;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;
