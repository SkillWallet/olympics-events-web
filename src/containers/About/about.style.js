import { AboutData } from "common/data";
import styled from "styled-components";
const AboutArea = styled.section`
  background-image: url(${AboutData?.image.src});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding-top: 6.25rem;
  padding-bottom: 6.25rem;
  .Container {
    text-align: center;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .single-swipper {
    max-width: 80%;
    margin: 0 auto;
    min-height: 20rem;
    border: 1px solid #fff;
    background: #393939;

    @media only screen and (max-width: 667px) {
      width: 100%;
      max-width: 100%;
    }
  }

  .swiper-inner-wrapper {
    padding: 2.625rem;
    display: flex;
    min-height: 20rem;
    box-sizing: border-box;
    align-items: center;

    @media only screen and (max-width: 991px) {
      flex-direction: column;
      .right-side {
        margin: 20px 0;
        width: 100%;
        display: flex;
        justify-content: flex-end;
      }

      .left-side {
        p {
          margin-right: 0;
        }
      }
    }

    @media only screen and (max-width: 667px) {
      .right-side a {
        width: 100%;
      }
    }
  }

  .swiper-pagination-bullet {
    width: 1.563rem;
    height: 1.563rem;
    text-align: center;
    line-height: 1.563rem;
    font-size: 12px;
    color: #000;
    opacity: 1;
    border: 2px solid #fff;
    background: #fff;
  }

  .swiper-pagination-bullet-active {
    background: transparent;
  }

  .left-side {
    text-align: left;
    h2 {
      font-weight: bold;
      font-size: 3.563rem;
      color: #87ffff;
      font-family: Raleway-Bold;
    }

    p {
      font-weight: normal;
      line-height: 1.7;
      letter-spacing: 0;
      font-style: italic;
      font: italic normal medium 1.688rem/2.25rem Raleway;

      @media only screen and (max-width: 1600px) {
        margin-right: 6.25rem;
      }
    }
  }

  .cube-left-top {
    position: absolute;
    top: 0;
    left: -100px;

    @media only screen and (max-width: 667px) {
      top: -22px;
      left: -60px;
      height: 184px;
    }
  }

  .cube-right-bottom {
    position: absolute;
    bottom: 0;
    right: -140px;
  }

  .main-text {
    h2 {
      font-weight: bold;
      font-size: 6.25rem;
      font-family: Raleway-Bold;
    }

    h3 {
      font-weight: bold;
      font-size: 2.5rem;
      margin-bottom: 5rem;
      font-family: Raleway-Bold;
    }

    p {
      font-weight: normal;
      font-size: 1.688rem;
      line-height: 1.7;
      max-width: 80%;
      margin: 0 auto;
      margin-bottom: 6.25rem;
      font: normal normal 600 1.688rem/2.813rem Raleway;
    }

    .description {
      @media only screen and (max-width: 667px) {
        width: 100%;
        max-width: 100%;
      }
    }
  }
`;
export const Col = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  @media (max-width: 575px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export default AboutArea;
