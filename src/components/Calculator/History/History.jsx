import { useDispatch, useSelector } from "react-redux";
import { clearHistory } from "@store/slices/CalcSlice";
import {
  ClearButton,
  HistoryRes,
  HistoryWrapper,
  ResultWrapper,
  SpanHist,
} from "./styled";

const History = () => {
  const { history } = useSelector((state) => state.calc);
  const dispatch = useDispatch();

  const historyData = history.map((e, i) => {
    return <HistoryRes key={"hId:" + i}>{e}</HistoryRes>;
  });

  return (
    <HistoryWrapper>
      <SpanHist>
        <span>History</span>
      </SpanHist>
      <ResultWrapper id="histRes">{historyData}</ResultWrapper>
      <ClearButton onClick={() => dispatch(clearHistory())}>
        Clear history
      </ClearButton>
    </HistoryWrapper>
  );
};

export default History;
