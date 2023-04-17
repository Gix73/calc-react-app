import styled from "styled-components";

export const ScreenWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: end;
  grid-area: screen;
  padding: 0px 50px 10px 50px;
  border-bottom: 5px solid grey;
  overflow: scroll;
  min-height: 60px;
  @media (max-width: 768px) {
    padding: 0px 10px 10px;
  }
`;

export const ResSpan = styled.span`
  font-size: 40px;
  max-width: 1000px;
  overflow: auto;
  @media (max-width: 768px) {
    font-size: 15px;
    max-width: 600px;
  }
`;
