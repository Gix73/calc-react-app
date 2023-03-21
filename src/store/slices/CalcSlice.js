import { createSlice } from "@reduxjs/toolkit";
import Calculator from "../../utils/Calculator";
import DivideCommand from "../../utils/DivideCommand";
import EqualCommand from "../../utils/EqualCommand";
import MultiplyCommand from "../../utils/MultiplyCommand";
import PlusCommand from "../../utils/PlusCommand";
import SubtractCommand from "../../utils/SubtractCommand";

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
      if (state.receiver.signs.length === 0) {
        state.receiver.setInitialValue(action.payload);
      }
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
      state.receiver.setSign("+");
      // state.receiver.setCommand(new PlusCommand(state.data));
      state.data = "";
      state.expression = state.receiver.getExpression(state.expression);
    },
    subtract(state, action) {
      console.log("-: " + action.payload);
      state.receiver.setInputs(state.data);
      state.receiver.setSign("-");
      // state.receiver.setCommand(new SubtractCommand(state.data));
      state.data = "";
      state.expression = state.receiver.getExpression(state.expression);
    },
    multiply(state, action) {
      console.log("*: " + action.payload);
      state.receiver.setInputs(state.data);
      state.receiver.setSign("*");
      // state.receiver.setCommand(new MultiplyCommand(state.data));
      state.data = "";
      state.expression = state.receiver.getExpression(state.expression);
    },
    divide(state, action) {
      console.log("/: " + action.payload);
      state.receiver.setInputs(state.data);
      state.receiver.setSign("/");
      // state.receiver.setCommand(new DivideCommand(state.data));
      state.data = "";
      state.expression = state.receiver.getExpression(state.expression);
    },
    equal(state, action) {
      console.log("equal");
      state.expression = "";
      if (state.data) {
        state.receiver.setInputs(state.data);
      }
      state.result = state.receiver.execute();
      state.data = "";
    },
  },
});

export const { inputNum, inputSign, plus, subtract, multiply, divide, equal } =
  calcSlice.actions;
export default calcSlice.reducer;
