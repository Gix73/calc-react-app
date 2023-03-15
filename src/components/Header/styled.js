import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
  max-width: 100%;
  background: rgb(52, 52, 52);
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px 0px 30px;
`;
export const LogoWrapper = styled.div`
  cursor: default;
  font-size: 25px;
  text-decoration: none;
  color: white;
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 25px;

  &[aria-current] {
    text-decoration: underline;
  }
`;
