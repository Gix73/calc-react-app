import styled from "styled-components";

export const CalcWrapper = styled.main`
  max-width: 100%;
  display: grid;
  height: 90vh;
  grid-template-areas:
    "screen history"
    "keys history";
  grid-template-rows: 2fr 14fr;
  grid-template-columns: 10fr 2fr;
  grid-gap: 10px;
  padding: 15px;
`;
