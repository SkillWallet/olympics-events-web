import styled from "styled-components";
const BannerArea = styled.section`
  background-color: #fff;
  padding-top: 8rem;
  padding-bottom: 0;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .Container {
    display: flex;
    flex-direction: column;
    flex: 1;

    .row {
      flex: 1;
    }

    .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .main-logo {
    img {
      height: 5.313rem;
    }
  }

  @media (max-width: 1199px) {
    padding-top: 140px;
    padding-bottom: 0;
  }

  @media (max-width: 575px) {
    padding-top: 100px;
    padding-bottom: 0;
    .Container {
      margin-bottom: 1rem;
    }
  }

  h2 {
    font-weight: bold;
    font-size: 6.25rem;
    color: #000;
    font-family: Raleway-Bold;
  }

  h3 {
    font-weight: bold;
    font-size: 3.75rem;
    color: #000;
    margin-bottom: 5rem;
    font-family: Raleway-Bold;
  }

  p {
    font-weight: normal;
    font-size: 2.25rem;
    line-height: 1.7;
    color: #000;
    margin-bottom: 0;
    font: normal normal 600 2.25rem/3.75rem Raleway;
    letter-spacing: 0px;
  }

  .img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    img {
      width: 28.125rem;
    }
  }

  .main-button {
    margin-top: 4.188rem;
    min-width: auto;
    min-height: 3.25rem;
    text-transform: uppercase;
    font-size: 1.125rem;

    + .main-button {
      margin-left: 16px;
    }
  }
`;

export const Col = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  @media (max-width: 575px) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (max-width: 767px) {
  }
`;

export default BannerArea;
