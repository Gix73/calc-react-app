import { useSelector } from "react-redux";
import { ResSpan, ScreenWrapper } from "./styled";

const Display = () => {
  const { result, expression } = useSelector((state) => state.calc);
  return (
    <ScreenWrapper>
      <ResSpan>{expression ? expression : result}</ResSpan>
    </ScreenWrapper>
  );
};

export default Display;
