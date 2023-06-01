// Styled
import styled from "styled-components";
// Components
import Links from "./Links.component";

const DeskNav = () => {
  return (
    <LinkList>
      <Links />
    </LinkList>
  );
};

const LinkList = styled.div`
  width: 67%;
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
    align-items: center;
    li:not(:last-child) {
      margin-right: 50px;
    }
  }

  button {
    padding: 14px 35px;
  }

  @media screen and (max-width: 1235px) {
    width: 72%;
  }

  @media screen and (max-width: 1100px) {
    width: 77%;
  }

  @media screen and (max-width: 990px) {
    display: none;
  }
`;

export default DeskNav;
