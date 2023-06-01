/* eslint-disable react/prop-types */
import styled from "styled-components";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const Slider = ({ slides }) => {
  return (
    <Swiper
      className="mySwiper"
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={4}
      pagination={{ clickable: true }}
      loop={true}
      speed={10000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      breakpoints={{
        1700: {
          slidesPerView: 5,
        },
        1300: {
          slidesPerView: 4,
        },
        1000: {
          slidesPerView: 3,
        },
        700: {
          slidesPerView: 2,
        },
        300: {
          slidesPerView: 1,
        },
      }}
    >
      {slides.map((slide) => {
        return (
          <StyledSlide key={slide.id}>
            <img src={slide.img} alt="slide-img" />
            <h3>{slide.title}</h3>
            <StyledRate>
              <img src={slide.point} alt="point" />
              <p>{slide.location}</p>
              <img src={slide.star} alt="star" />
              <p>{slide.rate}</p>
            </StyledRate>
            <StyledPrice>
              <p>{slide.time}</p>
              <p>
                <span>{slide.price}</span> {slide.person}
              </p>
            </StyledPrice>
          </StyledSlide>
        );
      })}
    </Swiper>
  );
};

const StyledSlide = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    margin: 20px 0 10px 0;
  }
`;

const StyledRate = styled.div`
  display: flex;
  p {
    margin: 5px 10px !important;
  }
`;

const StyledPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    margin: 5px !important;
    span {
      color: black;
      font-size: 24px;
      font-weight: 700;
    }
  }
`;
