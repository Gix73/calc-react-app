class EqualCommand {
  constructor(equalValue) {
    this.value = Number(equalValue);
  }

  execute() {
    return this.value;
  }
}

export default EqualCommand;
