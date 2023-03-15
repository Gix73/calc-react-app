import History from "./History/History";
import Display from "./Display/Display";
import { CalcWrapper } from "./styled";

const Calculator = () => {
  return (
    <CalcWrapper>
      <History />
      <Display />
    </CalcWrapper>
  );
};

export default Calculator;
