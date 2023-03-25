import styled from "styled-components";

export const KeypadWrapper = styled.div`
  display: grid;
  grid-area: keys;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  padding: 50px;
`;
