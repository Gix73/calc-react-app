export const exp = [
  {
    expression: "2-2-2=",
    result: "-2",
  },
  {
    expression: "2+2+2=",
    result: "6",
  },
  {
    expression: "12+15-12=",
    result: "15",
  },
  {
    expression: "2+2+2+0.2=",
    result: "6.200",
  },
];

export const logicExp = [
  {
    expression: "2+2*2=",
    result: "6",
  },
  {
    expression: "2*2+2=",
    result: "6",
  },
  {
    expression: "(3+2)*(3-1)/(3+1-2)=",
    result: "5",
  },
  {
    expression: "((2+1)*3-(2-6))=",
    result: "13",
  },
  {
    expression: "2+2*2+2*2/4=",
    result: "7",
  },
  {
    expression: "(1+2-3*4/5%6+7-8.90)=",
    result: "-1.300",
  },
];

export const bracketsExp = [
  {
    expression: "((((2+3=",
    result: "5",
  },
  {
    expression: "(2-3)(-7+1=",
    result: "6",
  },
  {
    expression: ")))(1+3(1-2)=",
    result: "-2",
  },
  {
    expression: "(123))=",
    result: "123",
  },
];

export const exceptionExp = [
  {
    expression: "0/1=",
    result: "0",
  },
  {
    expression: "1/0=",
    result: "Infinity",
  },
  {
    expression: "0*0/0*0=",
    result: "NaN",
  },
];

export const theme = [
  {
    select: "Dark Theme",
    bgColor: "rgb(73, 73, 73)",
    color: "rgb(255, 255, 255)",
  },
  {
    select: "Colored Theme",
    bgColor: "rgb(54, 74, 70)",
    color: "rgb(139, 232, 215)",
  },
  {
    select: "Light Theme",
    bgColor: "rgb(255, 255, 255)",
    color: "rgb(0, 0, 0)",
  },
];
