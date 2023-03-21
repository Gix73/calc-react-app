import styled from "styled-components";

export const HistoryWrapper = styled.div`
  position: relative;
  grid-area: history;
  overflow-x: auto;
  padding: 0px 10px;
  border-left: 5px solid grey;
`;

export const SpanHist = styled.div`
  display: flex;
  font-size: 30px;
  font-weight: bold;
  margin: 0 auto;
  justify-content: center;
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
`;
