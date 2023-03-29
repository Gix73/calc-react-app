import styled from "styled-components";

export const HistoryWrapper = styled.div`
  position: relative;
  grid-area: history;
  padding: 0px 10px;
  border-left: 5px solid grey;
  overflow: auto;
`;

export const SpanHist = styled.div`
  display: flex;
  font-size: 30px;
  font-weight: bold;
  margin: 0 auto;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const ResultWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
  overflow: auto;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  font-size: 25px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const HistoryRes = styled.div`
  word-wrap: break-word;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.25);
  position: relative;
  width: 90%;
  height: auto;
  text-align: center;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const ClearButton = styled.button`
  font-size: 12px;
  width: 100%;
  height: auto;
  @media (max-width: 768px) {
    font-size: 8px;
  }
`;
