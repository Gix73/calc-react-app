import commandsCreater from "../monipulation/CommandsCreater";
import inputsSort from "../monipulation/InputsSort";

class Calculator {
  constructor() {
    this.commands = [];
    this.inputs = [];
    this.resultCommands = [];
    // this.signs = [];
    this.current = 0;
    this.result = 0;
  }

  setCommand(command) {
    this.commands.push(command);
  }

  setInputs(input) {
    // debugger;
    const signs = "+-*/";
    if (input) {
      if (
        signs.includes(this.inputs[this.inputs.length - 1]) &&
        signs.includes(input)
      ) {
        this.inputs[this.inputs.length - 1] = input;
      } else {
        this.inputs.push(input);
      }
    }
  }

  getExpression(exp) {
    const signs = "+-*/";
    if (signs.includes(exp[exp.length - 1])) {
      return exp.slice(0, -1) + this.signs[this.signs.length - 1];
    }
    return exp + this.signs[this.signs.length - 1];
  }

  // setSign(sign) {
  //   if (this.inputs.length === this.signs.length) {
  //     this.signs[this.signs.length - 1] = sign;
  //   } else {
  //     this.signs.push(sign);
  //   }
  // }

  setInitialValue(val) {
    if (this.result) {
      let newNum = this.result + val;
      this.result = Number(newNum);
    } else {
      this.result += Number(val);
    }
  }

  getResult() {
    let result = this.result;
    this.commands = [];
    this.inputs = [];
    this.result = 0;
    return result;
  }

  execute() {
    this.inputs = inputsSort(this.inputs);
    this.commands = commandsCreater(this.inputs);
    for (let command of this.commands) {
      this.result = command.execute(this.result);
    }
    this.commands = [];
    this.inputs = [];
    this.signs = [];
    let res = this.result;
    this.result = 0;
    return res;
  }
}

export default Calculator;
