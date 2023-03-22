import DivideCommand from "../utils/DivideCommand";
import MultiplyCommand from "../utils/MultiplyCommand";
import PlusCommand from "../utils/PlusCommand";
import SubtractCommand from "../utils/SubtractCommand";

export default function commandsCreater(inputs) {
  let commands = [];
  for (let i = 0; i < inputs.length; i++) {
    commands.push([]);
    for (let j = 0; j < inputs[i].length; j++) {
      if (inputs[i][j] === "+") {
        commands[i].push(new PlusCommand(Number(inputs[i][j + 1])));
        j++;
      }
      if (inputs[i][j] === "-") {
        commands[i].push(new SubtractCommand(Number(inputs[i][j + 1])));
        j++;
      }
      if (inputs[i][j] === "*") {
        commands[i].push(new MultiplyCommand(Number(inputs[i][j + 1])));
        j++;
      }
      if (inputs[i][j] === "/") {
        commands[i].push(new DivideCommand(Number(inputs[i][j + 1])));
        j++;
      }
    }
  }

  return commands;
}
