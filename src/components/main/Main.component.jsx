import styled from "styled-components";
import MainBg from "../../assets/img/main-bg.jpg";
import Header from "../header/Header.component";

const Main = () => {
  return (
    <StyledMain>
      <div className="container">
        <Header />
        <StyledMainContent>
          <h1>Railtrips To Here, There And Everywhere!</h1>
          <p>
            We all wish to start our year the best way possible and also
            according to a common belief if you have a great start to your.
          </p>
          <button>Explore more</button>
        </StyledMainContent>
      </div>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${MainBg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  h1 {
    margin-top: 200px;
    margin-bottom: 20px;
    max-width: 70%;
    @media screen and (max-width: 990px) {
      max-width: 100%;
    }
    @media screen and (max-width: 620px) {
      font-size: 50px;
      margin-top: 150px;
    }
  }
  p {
    max-width: 70%;
  }
  button {
    padding: 18px 46px;
    margin-top: 40px;
  }
`;

export default Main;
