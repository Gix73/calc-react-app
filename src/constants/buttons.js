import {
  divide,
  equal,
  inputNum,
  leftBracket,
  multiply,
  plus,
  remainderDiv,
  rightBracket,
  subtract,
} from "../store/slices/CalcSlice";

export default function setFunction(d, val) {
  let num = "1234567890";
  if (num.includes(val)) {
    d(inputNum(val));
  }
  if (val === "+") {
    d(plus());
  }
  if (val === "-") {
    d(subtract());
  }
  if (val === "*") {
    d(multiply());
  }
  if (val === "/") {
    d(divide());
  }
  if (val === "=") {
    d(equal());
  }
  if (val === "(") {
    d(leftBracket());
  }
  if (val === ")") {
    d(rightBracket());
  }
  if (val === "%") {
    d(remainderDiv());
  }
}
