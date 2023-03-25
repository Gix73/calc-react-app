import Button from "@components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import setFunction from "@constants/buttons";
import { buttonsArr } from "@constants/constants";
import { KeypadWrapper } from "./styled";

const Keypad = () => {
  const btnColor = useSelector((state) => state.theme.btnColor);
  const dispatch = useDispatch();

  return (
    <KeypadWrapper>
      {buttonsArr.map((e, i) => {
        return (
          <Button
            color={btnColor}
            func={() => setFunction(dispatch, e)}
            name={e}
            key={e}
            pos={e === "CE" ? true : false}
          />
        );
      })}
    </KeypadWrapper>
  );
};

export default Keypad;
