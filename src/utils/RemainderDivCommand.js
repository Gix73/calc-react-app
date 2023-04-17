class RemainderDivCommand {
  constructor(valueToRemainder, v2) {
    this.value = valueToRemainder;
    this.v2 = v2;
  }

  execute() {
    const res = this.value % this.v2;
    const fixed = res !== Infinity ? res.toFixed(3) : Infinity;
    return res % 1 ? Number(fixed) : res;
  }
}

export default RemainderDivCommand;
