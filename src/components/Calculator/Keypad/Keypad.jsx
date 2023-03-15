import Button from "@components/Button/Button";
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
  return (
    <KeypadWrapper>
      {buttonsArr.map((e, i) => {
        return <Button name={e} />;
      })}
    </KeypadWrapper>
  );
};

export default Keypad;
