import { ButtonWrapper, CustomButton } from "./styled";

const Button = (props) => {
  return (
    <ButtonWrapper>
      <CustomButton>{props.name}</CustomButton>
    </ButtonWrapper>
  );
};

export default Button;
