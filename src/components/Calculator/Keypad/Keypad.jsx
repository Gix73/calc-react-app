import Button from "@components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import setFunction from "../../../constants/buttons";
import { buttonsArr } from "../../../constants/constants";
// import {
//   divide,
//   inputNum,
//   multiply,
//   plus,
//   subtract,
// } from "../../../store/slices/CalcSlice";
import { KeypadWrapper } from "./styled";

const Keypad = () => {
  const btnColor = useSelector((state) => state.theme.btnColor);
  const dispatch = useDispatch();

  // function setFunction(val) {
  //   let num = "1234567890";
  //   if (num.includes(val)) {
  //     dispatch(inputNum(val));
  //   }
  //   if (val === "+") {
  //     dispatch(plus());
  //   }
  //   if (val === "-") {
  //     dispatch(subtract());
  //   }
  //   if (val === "*") {
  //     dispatch(multiply());
  //   }
  //   if (val === "/") {
  //     dispatch(divide());
  //   }
  // }

  return (
    <KeypadWrapper>
      {buttonsArr.map((e, i) => {
        return (
          <Button
            color={btnColor}
            func={() => setFunction(dispatch, e)}
            name={e}
            key={e}
          />
        );
      })}
    </KeypadWrapper>
  );
};

export default Keypad;
