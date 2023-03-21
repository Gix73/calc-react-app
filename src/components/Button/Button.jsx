import { ButtonWrapper, CustomButton } from "./styled";

const Button = (props) => {
  return (
    <ButtonWrapper>
      <CustomButton onClick={props.func}>{props.name}</CustomButton>
    </ButtonWrapper>
  );
};

export default Button;
