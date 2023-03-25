import { ButtonWrapper, CustomButton } from "./styled";

const Button = ({ pos, func, name }) => {
  return (
    <ButtonWrapper pos={pos}>
      <CustomButton pos={pos} onClick={func}>
        {name}
      </CustomButton>
    </ButtonWrapper>
  );
};

export default Button;
