import Button from "@components/Button/Button";
import { useSelector } from "react-redux";
import { KeypadWrapper } from "./styled";

const buttonsArr = [
  "C",
  "7",
  "8",
  "9",
  "*",
  "-",
  "4",
  "5",
  "6",
  "/",
  "+",
  "1",
  "2",
  "3",
  "=",
  ".",
  "(",
  "0",
  ")",
  "CE",
];

const Keypad = () => {
  const btnColor = useSelector((state) => state.theme.btnColor);
  return (
    <KeypadWrapper>
      {buttonsArr.map((e, i) => {
        return <Button color={btnColor} name={e} />;
      })}
    </KeypadWrapper>
  );
};

export default Keypad;
