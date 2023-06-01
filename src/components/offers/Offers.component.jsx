import styled from "styled-components";
import { Slider } from "./Slider.component";
import slides from "./Slides.component";

const Offers = () => {
  return (
    <StyledOffers>
      <div className="container">
        <h2>Special Offers</h2>
        <p>
          With the New Year comes a refreshing sense of wanderlust, a longing in
          our souls to escape to warmer climates.
        </p>
        <Slider slides={slides} />
      </div>
    </StyledOffers>
  );
};

const StyledOffers = styled.div`
  text-align: center;
  padding: 0 0 140px 0;
  p {
    margin: 20px 0 60px 0;
    color: #000000;
    opacity: 0.6;
  }
`;

export default Offers;
