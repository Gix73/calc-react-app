export default function correctExpression(inputs) {
  let expression = [];
  for (let i = 0; i < inputs.length; i++) {
    let current = inputs[i];
    if (current === "-" || current === "+") {
      if (i === 0) {
        expression.push("0");
      } else if (inputs[i - 1] === "(") {
        expression.push("0");
      }
    }
    expression.push(current);
  }
  return expression;
}
