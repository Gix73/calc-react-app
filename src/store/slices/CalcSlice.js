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
    numbers: [],
    result: 0,
  },
  reducers: {
    inputNum(state, action) {
      console.log("n: " + action.payload);
      // if (state.receiver.commands.length === 0) {
      //   state.receiver.setInitialValue(action.payload);
      // }

      if (state.receiver.signs.length === 0) {
        state.receiver.setInitialValue(action.payload);
      }
      state.data += action.payload;
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
    },
    subtract(state, action) {
      console.log("-: " + action.payload);
      state.receiver.setInputs(state.data);
      state.receiver.setSign("-");
      // state.receiver.setCommand(new SubtractCommand(state.data));
      state.data = "";
    },
    multiply(state, action) {
      console.log("*: " + action.payload);
      state.receiver.setInputs(state.data);
      state.receiver.setSign("*");
      // state.receiver.setCommand(new MultiplyCommand(state.data));
      state.data = "";
    },
    divide(state, action) {
      console.log("/: " + action.payload);
      state.receiver.setInputs(state.data);
      state.receiver.setSign("/");
      // state.receiver.setCommand(new DivideCommand(state.data));
      state.data = "";
    },
    equal(state, action) {
      console.log("equal");
      if (state.data) {
        state.receiver.setInputs(state.data);
      }
      ////// if (state.data) {
      //////   state.receiver.setCommand(
      //////     new state.receiver.commands[
      //////       state.receiver.commands.length - 1
      //////     ].constructor(state.data)
      //////   );
      ////// }
      //// state.receiver.setCommand(new EqualCommand(state.data));
      // state.receiver.setCommand(action.payload(state.data));
      // state.receiver.setInputs(state.data);
      state.result = state.receiver.execute();
      state.data = "";
    },
  },
});

export const { inputNum, inputSign, plus, subtract, multiply, divide, equal } =
  calcSlice.actions;
export default calcSlice.reducer;
