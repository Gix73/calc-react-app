import { useSelector } from "react-redux";
import { ResSpan, ScreenWrapper } from "./styled";

const Display = () => {
  const { result, expression, receiver } = useSelector((state) => state.calc);
  return (
    <ScreenWrapper>
      <ResSpan>{expression ? expression : result}</ResSpan>
    </ScreenWrapper>
  );
};

export default Display;
// {receiver.result !== 0 ? expression : result}
