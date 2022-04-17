import React from "react";
import Heading from "common/components/Heading";
import Text from "common/components/Text";
import Image from "common/components/Image";
import Container from "common/components/UI/Container";
import BannerArea, { Col } from "./banner.style";
import { BannerData } from "common/data";
import Box from "common/components/Box";

const Banner = ({ row }) => {
  const { title, subtitle, text, logo, image } = BannerData;
  return (
    <>
      <BannerArea id="banner">
        <Container className="Container">
          <div className="main-logo">
            <Image alt="skillwallet" src={logo.src} />
          </div>
          <Box className="row" {...row}>
            <Col className="left">
              <Heading as="h2" content={title} />
              <Heading as="h3" content={subtitle} />
              <Text as="p" content={text} />
            </Col>
            <Col>
              <div className="img-wrapper">
                <Image alt="spring-logo" src={image.src} />
              </div>
            </Col>
          </Box>
        </Container>
      </BannerArea>
    </>
  );
};

Banner.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    width: "100%",
  },
};

export default Banner;
