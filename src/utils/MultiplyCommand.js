class MultiplyCommand {
  constructor(valueToMultiply, v2) {
    this.value = Number(valueToMultiply);
    this.v2 = Number(v2);
  }

  execute() {
    const res = this.value * this.v2;
    const fixed = res.toFixed(3);
    return res % 1 ? Number(fixed) : res;
  }
}

export default MultiplyCommand;
