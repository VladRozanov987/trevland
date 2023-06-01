// Styled
import styled from "styled-components";
// Components
import MobNav from "./MobNav.component";
import DeskNav from "./DeskNav.component";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>Trevland</StyledLogo>
      <DeskNav />
      <MobNav />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 35px 0;
`;

const StyledLogo = styled.a`
  @import url("https://fonts.googleapis.com/css2?family=Ribeye&display=swap");
  font-family: "Ribeye", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: 0.06em;
  color: #ffffff;
`;

export default Header;
