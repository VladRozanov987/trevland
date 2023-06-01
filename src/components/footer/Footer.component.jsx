// Styled
import styled from "styled-components";
// Import icons
import fb from "../../assets/icons/faceb.svg";
import goog from "../../assets/icons/goog.svg";
import inst from "../../assets/icons/inst.svg";
import twitt from "../../assets/icons/twitt.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container d-grid">
        <StyledCol>
          <StyledLogo>Trevland</StyledLogo>
          <p>Contact us</p>
          <p>@shovasatkhira88.com</p>
          <div className="d-flex">
            <ul>
              <li>
                <a href="#">
                  <img src={fb} alt="" />
                </a>
                <a href="#">
                  <img src={goog} alt="" />
                </a>
                <a href="#">
                  <img src={inst} alt="" />
                </a>
                <a href="#">
                  <img src={twitt} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </StyledCol>
        <StyledCol>
          <ul>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Our story</a>
            </li>
            <li>
              <a href="">Benefits</a>
            </li>
            <li>
              <a href="">Branding</a>
            </li>
          </ul>
        </StyledCol>
        <StyledCol>
          <ul>
            <li>
              <a href="">Legal</a>
            </li>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">Privecy Policy</a>
            </li>
            <li>
              <a href="">Terms of use</a>
            </li>
          </ul>
        </StyledCol>
        <StyledCol>
          <h4>SUBSCRIBE NOW</h4>
          <div className="d-flex-col">
            <input type="email" placeholder="EMAIL" />
            <button className="footer-btn">Send</button>
          </div>
        </StyledCol>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  background: rgba(38, 148, 153, 0.04);
  padding: 70px 0;
`;

const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: 0.06em;
    color: #000000;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  a {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.06em;
    color: #000000;
  }
  img {
    border-radius: 0;
    margin-right: 25px;
  }
  .footer-btn {
    padding: 10px 32px;
    margin-top: 30px;
  }
  input {
    width: 100%;
    margin-right: 35px;
    border: 1px solid #000000;
    border-radius: 5px;
    transition: all 0.4s;
    padding: 10px 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.06em;
    color: #000000;
    &:focus {
      box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.15);
    }
  }
`;

const StyledLogo = styled.h3`
  @import url("https://fonts.googleapis.com/css2?family=Ribeye&display=swap");
  font-family: "Ribeye", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: 0.06em;
  color: #000000;
  text-align: start;
`;

export default Footer;
