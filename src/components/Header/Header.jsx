import { HeaderWrapper, LogoWrapper, Nav, StyledLink } from "./styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <h1>Calculator app</h1>
      </LogoWrapper>
      <Nav>
        <div>
          <StyledLink to="/">Home</StyledLink>
        </div>
        <div>
          <StyledLink to="/settings">Settings</StyledLink>
        </div>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
