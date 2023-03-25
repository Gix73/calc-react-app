class PlusCommand {
  constructor(valueToAdd, v2) {
    this.value = Number(valueToAdd);
    this.v2 = Number(v2);
  }

  execute() {
    const res = this.v2 + this.value;
    const fixed = res !== Infinity ? res.toFixed(3) : Infinity;
    return res % 1 ? Number(fixed) : res;
  }
}

export default PlusCommand;
