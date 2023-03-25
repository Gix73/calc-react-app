import React from "react";
import { connect } from "react-redux";
import { ResSpan, ScreenWrapper } from "./styled";

class DisplayCC extends React.Component {
  render() {
    const { result, expression } = this.props;
    return (
      <ScreenWrapper>
        <ResSpan>{expression ? expression : result}</ResSpan>
      </ScreenWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  result: state.calc.result,
  expression: state.calc.expression,
});

export default connect(mapStateToProps)(DisplayCC);
