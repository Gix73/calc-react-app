class SubtractCommand {
  constructor(valueToSubtract) {
    this.value = Number(valueToSubtract);
  }

  execute(value) {
    const res = value - this.value;
    const fixed = res !== Infinity ? res.toFixed(3) : Infinity;
    return res % 1 ? Number(fixed) : res;
  }
}

export default SubtractCommand;
