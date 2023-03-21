import { useSelector } from "react-redux";
import { ResSpan, ScreenWrapper } from "./styled";

const Display = () => {
  const { result } = useSelector((state) => state.calc);
  return (
    <ScreenWrapper>
      <ResSpan>{result}</ResSpan>
    </ScreenWrapper>
  );
};

export default Display;
