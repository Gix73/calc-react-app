import React from "react";
import DisplayCC from "./Display/DisplayCC";
import HistoryCC from "./History/HistoryCC";
import KeypadCC from "./Keypad/KeypadCC";
import { CalcWrapper } from "./styled";

class CalculatorCC extends React.Component {
  render() {
    return (
      <CalcWrapper>
        <HistoryCC />
        <DisplayCC />
        <KeypadCC />
      </CalcWrapper>
    );
  }
}

export default CalculatorCC;
