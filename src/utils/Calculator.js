import commandsCreater from "../monipulation/CommandsCreater";
import inputsSort from "../monipulation/InputsSort";

class Calculator {
  constructor() {
    this.commands = [];
    this.inputs = [];
    this.resultCommands = [];
    this.initialValues = [];
    // this.signs = [];
    this.current = 0;
    this.result = 0;
  }

  setCommands() {
    this.inputs = inputsSort(this.inputs);
    this.commands = commandsCreater(this.inputs);
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

  setInitialValue() {
    for (let i = 0; i < this.commands.length; i++) {
      this.initialValues.push(0);
    }
    // if (this.result) {
    //   let newNum = this.result + val;
    //   this.result = Number(newNum);
    // } else {
    //   this.result += Number(val);
    // }
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
    let res = this.result;
    this.result = 0;
    return res;
  }
}

export default Calculator;
