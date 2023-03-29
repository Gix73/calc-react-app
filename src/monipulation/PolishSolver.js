import DivideCommand from "@utils/DivideCommand";
import MultiplyCommand from "@utils/MultiplyCommand";
import PlusCommand from "@utils/PlusCommand";
import RemainderDivCommand from "@utils/RemainderDivCommand";
import SubtractCommand from "@utils/SubtractCommand";
import getPriority from "./GetPriority";

export default function polishSolver(inputs) {
  let numArr = [];
  let inputsArr = [];
  let commands = [];

  for (let i = 0; i < inputs.length; i++) {
    if (getPriority(inputs[i]) === 0) {
      while (getPriority(inputs[i]) === 0) {
        numArr.push(inputs[i++]);
        if (i === inputs.length) break;
      }
      for (let j = 0; j < numArr.length; j++) {
        inputsArr.push(numArr[j]);
      }
      numArr = [];
    }

    if (getPriority(inputs[i]) > 1) {
      let a = inputsArr.pop();
      let b = inputsArr.pop();
      if (typeof a !== "string" || typeof b !== "string") {
        let current;
        let next;
        if (typeof a !== "string" && typeof b !== "string") {
        } else if (typeof a !== "string") {
          next = NaN;
          current = b;
        } else if (typeof b !== "string") {
          next = a;
          current = NaN;
        }
        if (inputs[i] === "+") {
          inputsArr.push(new PlusCommand(current, next));
          commands.push(new PlusCommand(current, next));
        } else if (inputs[i] === "-") {
          inputsArr.push(new SubtractCommand(current, next));
          commands.push(new SubtractCommand(current, next));
        } else if (inputs[i] === "*") {
          inputsArr.push(new MultiplyCommand(current, next));
          commands.push(new MultiplyCommand(current, next));
        } else if (inputs[i] === "/") {
          inputsArr.push(new DivideCommand(current, next));
          commands.push(new DivideCommand(current, next));
        } else if (inputs[i] === "%") {
          inputsArr.push(new RemainderDivCommand(current, next));
          commands.push(new RemainderDivCommand(current, next));
        }
      } else {
        if (inputs[i] === "+") {
          inputsArr.push(new PlusCommand(b, a));
          commands.push(new PlusCommand(b, a));
        } else if (inputs[i] === "-") {
          inputsArr.push(new SubtractCommand(b, a));
          commands.push(new SubtractCommand(b, a));
        } else if (inputs[i] === "*") {
          inputsArr.push(new MultiplyCommand(b, a));
          commands.push(new MultiplyCommand(b, a));
        } else if (inputs[i] === "/") {
          inputsArr.push(new DivideCommand(b, a));
          commands.push(new DivideCommand(b, a));
        } else if (inputs[i] === "%") {
          inputsArr.push(new RemainderDivCommand(b, a));
          commands.push(new RemainderDivCommand(b, a));
        }
      }
    }
  }

  return commands;
}
