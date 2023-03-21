class PlusCommand {
  constructor(valueToAdd) {
    this.value = Number(valueToAdd);
  }

  execute(value) {
    const res = value + this.value;
    const fixed = res !== Infinity ? res.toFixed(3) : Infinity;
    return res % 1 ? Number(fixed) : res;
  }
}

export default PlusCommand;
