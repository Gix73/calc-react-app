export default function correctExpression(inputs) {
  let expression = [];

  if (inputs.length === 1 && !Number(inputs[0])) {
    return expression;
  }

  for (let i = 0; i < inputs.length; i++) {
    let current = inputs[i];

    if (current === "-" || current === "+") {
      if (i === 0) {
        expression.push("0");
      } else if (inputs[i - 1] === "(") {
        expression.push("0");
      }
    }
    if (current === "/" || current === "*") {
      if (i === 0) {
        expression.push("1");
      } else if (inputs[i - 1] === "(") {
        expression.push("1");
      }
    }

    if (
      current === "(" &&
      !"+-*/%.(".includes(inputs[i - 1]) &&
      inputs[i - 1]
    ) {
      expression.push("*");
    }

    expression.push(current);
    if (i === inputs.length - 1) {
      if ("+-*/%".includes(inputs[i])) {
        expression.pop();
      }
    }
  }

  return expression;
}
