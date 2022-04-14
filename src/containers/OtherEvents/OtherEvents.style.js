import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 5.438rem 0;
  overflow: hidden;
  background-color: #fff;
  box-sizing: border-box;


  .header {
    max-width: 95.688rem;
    text-align: center;
    width: 100%;
    margin: 0 auto 6.625rem auto;
    font-size: 6.25rem;
    font-family: Raleway-Bold;
  }

  .Container {
    box-sizing: border-box;
    position: relative;
  }

  .swiper {
    height: auto !important;
  }

  .single-swipper {
  }

  .swiper-slide {
    height: auto !important;
    min-height: 55rem !important;
  }

  .swiper-inner-wrapper {
    box-sizing: border-box;
    // padding: 7.188rem 0;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    .left-side, .right-side {
      flex: 1;
    }
    .right-side {
      display: flex;
      box-sizing: border-box;
      align-items: center;
      justify-content: center;
    }

    h2 {
      font-size: 6.25rem;
      font-weight: bold;
    }

    h3 {
      font-size: 4rem;
      font-weight: bold;
    }

    p {
      font-size: 2.25rem;
      max-width: 46.875rem;
      margin: 3.75rem 0;
    }

    .top-icon {
      margin-bottom: 2.813rem;
      height: 3.125rem;
    }

    .bottom-icon {
      margin-top: 1.563rem;
      height: 3.125rem;
    }

    a {
      width: 28.75rem;
    }
  }

  .swiper-slide:last-child .bottom-icon {
    height: 5rem;
  }

  .swiper-pagination-bullet {
    width: 1.563rem;
    height: 1.563rem;
    border-radius: 0;
    text-align: center;
    line-height: 1.563rem;
    opacity: 1;
    background: rgba(119, 119, 119, 0.5);
  }
  
  .swiper-pagination-bullet-active {
    background: rgba(0,0,0,0.5);
  }
  
`;

export default SectionWrapper;
