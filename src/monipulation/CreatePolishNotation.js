import getPriority from "./GetPriority";

export default function createPolishNotation(inputs) {
  let numArr = [];
  let signsArr = [];
  let priority;

  for (let i = 0; i < inputs.length; i++) {
    priority = getPriority(inputs[i]);

    if (priority === 0) {
      numArr.push(inputs[i]);
    }
    if (priority === 1) {
      signsArr.push(inputs[i]);
    }

    if (priority > 1) {
      while (signsArr.length !== 0) {
        if (getPriority(signsArr[signsArr.length - 1]) >= priority) {
          numArr.push(signsArr.pop());
        } else break;
      }

      signsArr.push(inputs[i]);
    }

    if (priority === -1) {
      while (getPriority(signsArr[signsArr.length - 1]) !== 1) {
        numArr.push(signsArr.pop());
      }

      signsArr.pop();
    }
  }
  while (signsArr.length !== 0) {
    numArr.push(signsArr.pop());
  }

  return numArr;
}
