import React from "react";
import { connect } from "react-redux";
import { ResSpan, ScreenWrapper } from "./styled";
import PropTypes from "prop-types";

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

DisplayCC.propTypes = {
  result: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  expression: PropTypes.string,
};

const mapStateToProps = (state) => ({
  result: state.calc.result,
  expression: state.calc.expression,
});

export default connect(mapStateToProps)(DisplayCC);
