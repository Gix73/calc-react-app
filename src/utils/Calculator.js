import correctExpression from "../monipulation/CorrectExpression";
import createPolishNotation from "../monipulation/CreatePolishNotation";
import polishSolver from "../monipulation/PolishSolver";

class Calculator {
  constructor() {
    this.commands = [];
    this.inputs = [];
    this.newValues = [];
    this.current = 0;
    this.result = 0;
    this.lBrackets = 0;
    this.rBrackets = 0;
  }

  setCommands() {
    this.inputs = correctExpression(this.inputs);
    this.inputs = createPolishNotation(this.inputs);
    const data = polishSolver(this.inputs);
    this.commands = [...data.reverse()];
  }

  checkBrackets() {
    if (this.lBrackets > this.rBrackets) {
      for (let i = 0; i < this.lBrackets - this.rBrackets; i++) {
        this.inputs.push(")");
      }
    }
  }

  clearData() {
    this.inputs = [];
  }

  setInputs(input) {
    const signs = "+-*/%";
    if (input) {
      if (
        signs.includes(this.inputs[this.inputs.length - 1]) &&
        signs.includes(input)
      ) {
        this.inputs[this.inputs.length - 1] = input;
      } else {
        if (input === ")") {
          if (this.lBrackets > this.rBrackets) {
            this.inputs.push(input);
            this.rBrackets++;
          }
        } else {
          if (input === "(") {
            this.lBrackets++;
          }
          this.inputs.push(input);
        }
      }
    }
  }

  getExpression() {
    return this.inputs.join("");
  }

  getResult() {
    let result = this.result;
    this.commands = [];
    this.inputs = [];
    this.result = 0;
    return result;
  }

  execute() {
    for (let i = this.commands.length - 1; i > -1; i--) {
      if (
        !Number.isNaN(this.commands[i].value) &&
        !Number.isNaN(this.commands[i].v2)
      ) {
        this.newValues.push(this.commands[i].execute());
        this.commands.pop();
      } else if (!Number.isNaN(this.commands[i].value)) {
        this.commands[i].v2 = this.newValues.pop();
        this.newValues.push(this.commands[i].execute());
        this.commands.pop();
      } else if (!Number.isNaN(this.commands[i].v2)) {
        this.commands[i].value = this.newValues.pop();
        this.newValues.push(this.commands[i].execute());
        this.commands.pop();
      } else if (
        Number.isNaN(this.commands[i].value) &&
        Number.isNaN(this.commands[i].v2)
      ) {
        this.commands[i].v2 = this.newValues.pop();
        this.commands[i].value = this.newValues.pop();
        this.newValues.push(this.commands[i].execute());
        this.commands.pop();
      }
    }

    this.result =
      this.newValues.length !== 0
        ? this.newValues.pop()
        : Number(this.inputs.length === 0 ? 0 : this.inputs.pop());
    this.initialValues = [];
    this.commands = [];
    this.inputs = [];
    this.signs = [];
    this.lBrackets = 0;
    this.rBrackets = 0;
    let res = Number.isInteger(this.result)
      ? this.result
      : this.result.toFixed(3);
    this.result = 0;
    return res;
  }
}

export default Calculator;
