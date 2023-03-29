import React from "react";
import { ButtonWrapper, CustomButton } from "./styled";
import PropTypes from "prop-types";

class ButtonCC extends React.Component {
  render() {
    const { pos, func, name } = this.props;
    return (
      <ButtonWrapper pos={pos}>
        <CustomButton data-test={name} pos={pos} onClick={func}>
          {name}
        </CustomButton>
      </ButtonWrapper>
    );
  }
}

ButtonCC.propTypes = {
  pos: PropTypes.bool,
  name: PropTypes.string,
  func: PropTypes.func,
};

export default ButtonCC;
