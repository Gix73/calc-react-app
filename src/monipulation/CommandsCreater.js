import DivideCommand from "../utils/DivideCommand";
import MultiplyCommand from "../utils/MultiplyCommand";
import PlusCommand from "../utils/PlusCommand";
import SubtractCommand from "../utils/SubtractCommand";

export default function commandsCreater(inputs, signs) {
  let commands = [];

  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === "+") {
      commands.push(new PlusCommand(inputs[i + 1]));
    }
    if (signs[i] === "-") {
      commands.push(new SubtractCommand(inputs[i + 1]));
    }
    if (signs[i] === "*") {
      commands.push(new MultiplyCommand(inputs[i + 1]));
    }
    if (signs[i] === "/") {
      commands.push(new DivideCommand(inputs[i + 1]));
    }
  }

  return commands;
}
