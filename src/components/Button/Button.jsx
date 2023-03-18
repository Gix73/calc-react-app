import { ButtonWrapper, CustomButton } from "./styled";

const Button = (props) => {
  return (
    <ButtonWrapper>
      <CustomButton color={props.color}>{props.name}</CustomButton>
    </ButtonWrapper>
  );
};

export default Button;
