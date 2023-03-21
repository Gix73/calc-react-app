import { useSelector } from "react-redux";
import { HistoryRes, HistoryWrapper, ResultWrapper, SpanHist } from "./styled";

const History = () => {
  const { history } = useSelector((state) => state.calc);

  const historyData = history.map((e, i) => {
    return <HistoryRes key={"hId:" + i}>{e}</HistoryRes>;
  });

  return (
    <HistoryWrapper>
      <SpanHist>
        <span>History</span>
      </SpanHist>
      <ResultWrapper>{historyData}</ResultWrapper>
    </HistoryWrapper>
  );
};

export default History;
