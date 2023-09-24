import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const StyledContainer = styled.div`
  color: white;
  font-size: 20px;
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  position: sticky;
  top: 50px;
`;

const StyledProductCarousel = styled(Carousel)`
  display: flex;
  flex-direction: row-reverse;
  gap: 15px;

  .carousel {
    width: auto;

    &.carousel-slider {
      width: 100%;

      .slider-wrapper {
        border-radius: 10px;
      }
    }

    .thumbs-wrapper {
      margin: 0;
    }

    .thumb {
      height: 60px;
      border-radius: 6px;
      overflow: hidden;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }

      &:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: black;
        opacity: 0;
      }

      &.selected,
      &:hover {
        border: 0;

        &:after {
          opacity: 0.2;
        }
      }
    }
  }

  .control-arrow {
    display: none;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;

    .thumb {
      border: 0;
      padding: 0;
    }
  }

  @media screen and (min-width: 768px) {
    .thumbs {
      transform: none !important;
      flex-direction: column;
      display: flex;
      gap: 10px;
    }

    .thumb {
      border: 0;
      padding: 0;
      margin: 0;
    }
  }
`;

const ProductDetailsCarousel = ({ images }) => {
    return (
        <StyledContainer>
            <StyledProductCarousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
            >
                {images?.map((link, index) => (
                    <img
                        key={index}
                        src={link}
                        alt="product image"
                    />
                ))}
            </StyledProductCarousel>
        </StyledContainer>
    );
};

export default ProductDetailsCarousel;