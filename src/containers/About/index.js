import React from "react";
import Container from "common/components/UI/Container";
import AboutArea from "./about.style";
import Heading from "common/components/Heading";
import Text from "common/components/Text";
import Link from "next/link";
import { AboutData } from "common/data";
import Image from "common/components/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import { LinkButton } from "common/components/Button";
import "swiper/css";
import "swiper/css/pagination";


const About = () => {
  const { cubeImage, title, subtitle, text, items } = AboutData;
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}" ></span>`;
    },
  };

  return (
    <AboutArea id="banner_section">
      <Image alt="3d-cube" className="cube-left-top" src={cubeImage.src} />
      <Image alt="3d-cube" className="cube-right-bottom" src={cubeImage.src} />
      <Container className="Container">
        <div className="main-text">
          <Heading color="white" as="h2" content={title} />
          <Heading color="white" as="h3" content={subtitle} />
          <Text as="p" color="white" content={text} />
        </div>
        <Swiper
          className="single-swipper"
          slidesPerView={1}
          pagination={pagination}
          modules={[Pagination]}
        >
          {items.map(({ title, subtitle, button }, index) => {
            return (
              <SwiperSlide key={`single-slider-key-${index}`}>
                <div className="swiper-inner-wrapper">
                  <div className="left-side">
                    <Heading as="h2" content={title} />
                    <Text as="p" color="white" content={subtitle} />
                  </div>
                  <div onClick={(e) => e.stopPropagation()}>
                    <LinkButton target="_blank" href={button.link} className="light" title={button.text} />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </AboutArea>
  );
};

export default About;
