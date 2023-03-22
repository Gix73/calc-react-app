import commandsCreater from "../monipulation/CommandsCreater";
import inputsSort from "../monipulation/InputsSort";

class Calculator {
  constructor() {
    this.commands = [];
    this.inputs = [];
    this.initialValues = [];
    this.current = 0;
    this.result = 0;
  }

  setCommands() {
    this.inputs = inputsSort(this.inputs);
    this.commands = commandsCreater(this.inputs);
  }

  setInputs(input) {
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

  getExpression() {
    return this.inputs.join("");
  }

  setInitialValue() {
    for (let i = 0; i < this.commands.length; i++) {
      this.initialValues.push(0);
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
    debugger;
    for (let i = 0; i < this.commands.length; i++) {
      for (let j = 0; j < this.commands[i].length; j++) {
        this.initialValues[i] = this.commands[i][j].execute(
          this.initialValues[i]
        );
      }
    }

    this.result = this.initialValues.reduce((acc, e, i) => acc + e);
    this.initialValues = [];
    this.commands = [];
    this.inputs = [];
    this.signs = [];
    let res = Number.isInteger(this.result)
      ? this.result
      : this.result.toFixed(3);
    this.result = 0;
    return res;
  }
}

export default Calculator;
