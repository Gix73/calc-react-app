import React from "react";
import { clearHistory } from "@store/slices/CalcSlice";
import { connect } from "react-redux";
import {
  ClearButton,
  HistoryWrapper,
  ResultWrapper,
  HistoryRes,
  SpanHist,
} from "./styled";

class HistoryCC extends React.Component {
  render() {
    const { history } = this.props;
    const historyData = history.map((e, i) => {
      return <HistoryRes key={"hId:" + i}>{e}</HistoryRes>;
    });

    return (
      <HistoryWrapper>
        <SpanHist>
          <span>History</span>
        </SpanHist>
        <ResultWrapper>{historyData}</ResultWrapper>
        <ClearButton onClick={() => this.props.dispatch(clearHistory())}>
          Clear history
        </ClearButton>
      </HistoryWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  history: state.calc.history,
});

export default connect(mapStateToProps)(HistoryCC);
