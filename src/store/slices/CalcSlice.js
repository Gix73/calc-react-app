import { createSlice } from "@reduxjs/toolkit";
import Calculator from "../../utils/Calculator";

const calcSlice = createSlice({
  name: "calc",
  initialState: {
    receiver: new Calculator(),
    data: "",
    history: [],
    expression: "",
    numbers: [],
    result: 0,
  },
  reducers: {
    inputNum(state, action) {
      console.log("n: " + action.payload);
      state.data += action.payload;
      state.expression += action.payload;
    },
    inputSign(state, action) {
      console.log("s: " + action.payload);
      state.receiver.setInputs(state.data);
      state.data = "";
      state.receiver.setCommand(action.payload);
    },
    plus(state, action) {
      console.log("+: " + action.payload);
      state.receiver.setInputs(state.data);
      state.receiver.setInputs("+");
      state.data = "";
      state.expression = state.receiver.getExpression();
    },
    subtract(state, action) {
      console.log("-: " + action.payload);
      state.receiver.setInputs(state.data);
      state.receiver.setInputs("-");
      state.data = "";
      state.expression = state.receiver.getExpression();
    },
    multiply(state, action) {
      console.log("*: " + action.payload);
      state.receiver.setInputs(state.data);
      state.receiver.setInputs("*");
      state.data = "";
      state.expression = state.receiver.getExpression();
    },
    divide(state, action) {
      console.log("/: " + action.payload);
      state.receiver.setInputs(state.data);
      state.receiver.setInputs("/");
      state.data = "";
      state.expression = state.receiver.getExpression();
    },
    leftBracket(state, action) {
      state.receiver.setInputs("(");
      state.data = "";
      state.expression = state.receiver.getExpression();
    },
    rightBracket(state, action) {
      state.receiver.setInputs(state.data);
      state.receiver.setInputs(")");
      state.data = "";
      state.expression = state.receiver.getExpression();
    },
    remainderDiv(state, action) {
      console.log("%: " + action.payload);
      state.receiver.setInputs(state.data);
      state.receiver.setInputs("%");
      state.data = "";
      state.expression = state.receiver.getExpression();
    },
    clearExpression(state) {
      state.expression = "";
      state.data = "";
      state.receiver.clearData();
      state.result = 0;
    },
    clearAll(state) {
      state.expression = "";
      state.data = "";
      state.receiver.clearData();
      state.history = [];
      state.result = 0;
    },
    clearHistory(state) {
      state.history = [];
    },
    equal(state, action) {
      console.log("equal");
      if (state.data) {
        state.receiver.setInputs(state.data);
      }

      state.receiver.setCommands();
      state.result = state.receiver.execute();
      state.history.push(state.expression + "=" + state.result);
      state.expression = "";
      state.data = "";
    },
  },
});

export const {
  inputNum,
  inputSign,
  plus,
  subtract,
  multiply,
  divide,
  equal,
  remainderDiv,
  leftBracket,
  rightBracket,
  clearExpression,
  clearAll,
  clearHistory,
} = calcSlice.actions;
export default calcSlice.reducer;
