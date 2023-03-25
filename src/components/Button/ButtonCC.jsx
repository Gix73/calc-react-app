import React from "react";
import { ButtonWrapper, CustomButton } from "./styled";

class ButtonCC extends React.Component {
  render() {
    const { pos, func, name } = this.props;
    return (
      <ButtonWrapper pos={pos}>
        <CustomButton pos={pos} onClick={func}>
          {name}
        </CustomButton>
      </ButtonWrapper>
    );
  }
}

export default ButtonCC;
