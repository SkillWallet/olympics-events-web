import styled from "styled-components";

const NewsArea = styled.section`
  position: relative;
  padding-bottom: 6.25rem;

  .header {
    background-color: #000000;
    height: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 15rem;
    font-family: Raleway-Bold;

    h2 {
      font-weight: bold;
      font-size: 5.688rem;
      color: #fff;
      margin: 0;
      font-family: Raleway-Bold;
    }
  }

  .Container {
    text-align: center;
  }

  .masonry-grid {
    display: flex;
    margin-left: -2.313rem;
    width: auto;
  }
  .masonry-grid_column {
    padding-left: 2.313rem;
    background-clip: padding-box;
  }

  .image-card {
    width: 100%;
  }

  .masonry-grid_column > .masonry-grid-item {
    margin-bottom: 2.313rem;
  }

  .twitter-card {
    padding: 3.125rem;
    background: #dedede;

    p {
      margin-top: 2.188rem;
      font-size: 1.375rem;
    }

    .card-top {
      margin-bottom: 2.188rem;
      .card-type {
        font-size: 0.938rem;
        font-weight: bold;
      }
    }
  }

  .youtube-card {
    .card-content {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        position: absolute;
      }
      img.play-icon {
        height: 6.25rem;
      }

      .thumb {
        width: 100%;
      }
    }
    .card-bottom {
      min-height: 10rem;
      background: #000000;
      color: #fff;
      display: flex;
      flex-direction: column;
      padding: 2.563rem 3.438rem;
      font-size: 1.375rem;
      font-weight: bold;

      .card-type {
        margin-bottom: 1.25rem;
      }
    }
  }

  .medium-card {
    padding: 3.438rem;
    background: #dedede;
    line-height: 1.4;

    p {
      margin-top: 3.125rem;
      font-size: 1.375rem;
    }

    .card-top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5.313rem;
      .card-type {
        font-size: 0.938rem;
        font-weight: bold;
        font-family: Raleway-Bold;
      }

      .card-time {
        display: flex;
        align-items: center;
        img {
          height: 1.875rem;
          margin-right: 0.75rem;
        }
      }
    }

    .read-more-text-wrapper {
      p, a {
        font-size: 1.875rem;
      }

      .btn-read-more {
        display: flex;
        justify-content: flex-end;
        a {
          color: #000;
        }
      }
    }

    h3 {
      letter-spacing: 0;
      font-size: 2.875rem;
      font-family: Raleway-Bold;
    }
  }
`;
export default NewsArea;
