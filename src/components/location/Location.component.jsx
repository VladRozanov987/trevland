/* eslint-disable react/jsx-key */
import styled from "styled-components";
import card1 from "../../assets/img/card1.jpg";
import card2 from "../../assets/img/card2.jpg";
import card3 from "../../assets/img/card3.jpg";
import card4 from "../../assets/img/card4.jpg";
import card5 from "../../assets/img/card5.jpg";
import card6 from "../../assets/img/card6.jpg";

const Location = () => {
  let cards = [
    {
      id: 1,
      img: card1,
      title: "Istanbul, Turkey",
      text: "Istanbul is a major city in Turkey that straddles Europe.",
    },
    {
      id: 2,
      img: card2,
      title: "Kuala Lumpur, malaysia",
      text: "A 272-step long trek leads you to this century.",
    },
    {
      id: 3,
      img: card3,
      title: "Seoul, South Korea",
      text: "South Korea officially the Republic of Korea is a country inEast Asia.",
    },
    {
      id: 4,
      img: card4,
      title: "Kinkakuji Temple, Kyoto",
      text: "Zen Buddhist temple covered in gold, a miraculous and shiny site in the middle of traditional Kyoto.",
    },
    {
      id: 5,
      img: card5,
      title: "Shirakawa-go, Gifu prefecture",
      text: "Deep in Gifu prefecture lies Shirakawa-go, a perfectly preserved Japanese village and Unesco World Heritage Site.",
    },
    {
      id: 6,
      img: card6,
      title: "Himeji Castle, Hyogo prefecture",
      text: "Himeji is perhaps Japan’s most famous castle. It even served as the basis for this emoji.",
    },
  ];

  return (
    <StyledLocation>
      <div className="container">
        <h2>Popular Location</h2>
        <p>
          For every one of us, travel came first. We’ve spent years living as
          nomads, pioneers, and voyagers— from island hopping in the
        </p>
        <LocationCards>
          {cards.map((card) => (
            <LocationCard key={card.id}>
              <img src={card.img} />
              <CardText>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </CardText>
            </LocationCard>
          ))}
        </LocationCards>
      </div>
    </StyledLocation>
  );
};

const StyledLocation = styled.div`
  max-width: 100vw;
  padding: 140px 0;
  text-align: center;
  p {
    color: #000000;
    opacity: 0.6;
    margin: 20px 0 50px 0;
  }
`;

const LocationCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 360px);
  justify-content: center;
  gap: 30px;
  @media screen and (max-width: 1250px) {
    grid-template-columns: repeat(2, 360px);
    gap: 20px;
    justify-items: center;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 360px);
    gap: 20px;
    justify-items: center;
  }
`;

const LocationCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 100%;
  img {
    height: 330px;
  }
`;

const CardText = styled.div`
  h3 {
    margin-bottom: 10px;
  }
  p {
    margin: 0;
  }
  padding: 35px 27px;
`;

export default Location;
