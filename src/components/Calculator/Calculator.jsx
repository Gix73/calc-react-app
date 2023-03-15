import History from "./History/History";
import Display from "./Display/Display";
import { CalcWrapper } from "./styled";
import Keypad from "./Keypad/Keypad";

const Calculator = () => {
  return (
    <CalcWrapper>
      <History />
      <Display />
      <Keypad />
    </CalcWrapper>
  );
};

export default Calculator;
