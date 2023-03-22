import { inputSign } from "../store/slices/CalcSlice";
import DivideCommand from "../utils/DivideCommand";
import MultiplyCommand from "../utils/MultiplyCommand";
import PlusCommand from "../utils/PlusCommand";
import SubtractCommand from "../utils/SubtractCommand";

export default function inputsSort(inputs) {
  let signFind = false;
  let arr = [];
  let counter = 0;
  // newInputs = inputs.join("").split(/\+|-/);
  //[2+2*2+2*2/4]
  //[ "2", "2*2", "2*2/4" ]
  for (let i = 0; i < inputs.length; i++) {
    arr.push([]);
    if (signFind === true) {
      arr[counter].push(inputs[i - 1]);
      signFind = false;
    }
    for (let j = i; j < inputs.length; j++) {
      if (inputs[j] === "+" || inputs[j] === "-") {
        counter++;
        signFind = true;
        break;
      }
      if (i === 0) {
        arr[counter].push("+");
      }
      arr[counter].push(inputs[j]);
      i = j + 1;
    }
  }

  // console.log(newInputs);
  console.log(arr);
  return arr;
}
