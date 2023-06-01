/* eslint-disable react/prop-types */
import styled from "styled-components";

const Links = (props) => {
  return (
    <StyledLinks>
      <ul>
        <li onClick={() => props.isMobile && props.closeMobMenu()}>
          <a href="#">Home</a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobMenu()}>
          <a href="#">Location</a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobMenu()}>
          <a href="#">Blog</a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobMenu()}>
          <a href="#">About</a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobMenu()}>
          <a href="#">Contact</a>
        </li>
      </ul>
      <button>Booking now</button>
    </StyledLinks>
  );
};

const StyledLinks = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 990px) {
    align-items: center;
    flex-direction: column;
    button {
      display: none;
    }
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 100px;
      left: 0;
      width: 100%;
      height: calc(100vh - 100px);
      background-color: rgba(0, 0, 0, 1);
      border-top: 1px solid #c9453b;
      li {
        margin: 30px 0;
      }
    }
  }
`;

export default Links;
