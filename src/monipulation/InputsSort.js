// export default function inputsSort(inputs) {
//   debugger;
//   let signFind = false;
//   let arr = [];
//   let counter = 0;

//   for (let i = 0; i < inputs.length; i++) {
//     arr.push([]);
//     if (signFind === true) {
//       arr[counter].push(inputs[i - 1]);
//       signFind = false;
//     }
//     for (let j = i; j < inputs.length; j++) {
//       if (inputs[j] === "+" || inputs[j] === "-") {
//         counter++;
//         signFind = true;
//         break;
//       }
//       if (i === 0) {
//         arr[counter].push("+");
//       }
//       arr[counter].push(inputs[j]);
//       i = j + 1;
//     }
//   }

//   return arr;
// }
