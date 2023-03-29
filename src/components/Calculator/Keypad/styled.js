import styled from "styled-components";

export const KeypadWrapper = styled.div`
  display: grid;
  grid-area: keys;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  padding: 50px;

  @media (max-width: 768px) {
    padding: 20px;
    height: 40vh;
  }
`;
