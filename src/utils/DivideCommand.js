class DivideCommand {
  constructor(valueToDivide, v2) {
    this.value = Number(valueToDivide);
    this.v2 = Number(v2);
  }

  execute() {
    const res = this.value / this.v2;
    const fixed = res !== Infinity ? res.toFixed(3) : Infinity;
    return res % 1 ? Number(fixed) : res;
  }
}

export default DivideCommand;
