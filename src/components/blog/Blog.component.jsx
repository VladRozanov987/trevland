// Styled
import styled from "styled-components";
// Images
import blog1 from "../../assets/img/blog1.jpg";
import blog2 from "../../assets/img/blog2.jpg";
import blog3 from "../../assets/img/blog3.jpg";
import blog4 from "../../assets/img/blog4.jpg";

const Blog = () => {
  return (
    <StyledBlog>
      <div className="container">
        <h2>From Blog & News</h2>
        <p>
          Welcome to Community Conversations, a new interview series featuring
          Intrepid travellers, creatives and activists in our community.
        </p>
        <StyledWrapper>
          <div className="leftSide">
            <img src={blog1} alt="blog-img" />
            <h4>Banff National Park</h4>
            <p>
              Banff National Park lies in the heart of the majestic Rocky
              Mountains in the province of Alberta, and showcases some of
              Canadas most beautiful scenery. Turquoise-colored lakes,
              snow-capped peaks, and glaciers are all easily accessible
            </p>
            <h4>@thomasalva_adison</h4>
          </div>

          <div className="rightSide">
            <div className="side-item">
              <img src={blog2} alt="blog-img" />
              <div className="item-des">
                <h4>The Hiroshima Peace!</h4>
                <p>It was formally opened to the public in August that year.</p>
                <h4>@shova_bd88</h4>
              </div>
            </div>
            <div className="side-item">
              <img src={blog3} alt="blog-img" />
              <div className="item-des">
                <h4>The faithful prayers!</h4>
                <p>A major pilgrimage center for Hindus, the holy city.</p>
                <h4>@adem/smith</h4>
              </div>
            </div>
            <div className="side-item">
              <img src={blog4} alt="blog-img" />
              <div className="item-des">
                <h4>Colourful waters!</h4>
                <p>Forest-driven water and energy cycles are poorly.</p>
                <h4>@jhon7leew</h4>
              </div>
            </div>
          </div>
        </StyledWrapper>
      </div>
    </StyledBlog>
  );
};

const StyledBlog = styled.div`
  text-align: center;
  padding: 0 0 140px 0;
  h2 {
    margin-bottom: 20px;
  }
  p {
    color: #000000;
    opacity: 0.6;
  }
`;

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 60px;
  .leftSide,
  .rightSide {
    display: flex;
    flex-direction: column;
    gap: 30px;
    img {
      max-width: 100%;
    }
  }

  .side-item {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  .item-des {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    .side-item {
      max-width: 100%;
      gap: 30px 20vw;
      @media screen and (max-width: 660px) {
        gap: 30px 5vw;
      }
      @media screen and (max-width: 550px) {
        flex-direction: column;
      }
    }
  }
`;

export default Blog;
