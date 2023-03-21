import commandsCreater from "../monipulation/CommandsCreater";

class Calculator {
  constructor() {
    this.commands = [];
    this.inputs = [];
    this.signs = [];
    this.current = 0;
    this.result = 0;
  }

  setCommand(command) {
    this.commands.push(command);
  }

  setInputs(input) {
    this.inputs.push(input);
  }

  setSign(sign) {
    this.signs.push(sign);
  }

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
    // debugger;
    this.commands = [...commandsCreater(this.inputs, this.signs)];
    for (let command of this.commands) {
      console.log(command);
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
