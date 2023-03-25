import React from "react";
import { connect } from "react-redux";
import setFunction from "../../../constants/buttons";
import { buttonsArr } from "../../../constants/constants";
import ButtonCC from "../../Button/ButtonCC";
import { KeypadWrapper } from "./styled";

class KeypadCC extends React.Component {
  render() {
    return (
      <KeypadWrapper>
        {buttonsArr.map((e, i) => {
          return (
            <ButtonCC
              func={() => setFunction(this.props.dispatch, e)}
              name={e}
              key={e}
              pos={e === "CE" ? true : false}
            />
          );
        })}
      </KeypadWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  btnColor: state.theme.btnColor,
});

export default connect(mapStateToProps)(KeypadCC);
