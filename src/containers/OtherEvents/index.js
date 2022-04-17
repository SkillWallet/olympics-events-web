import React from "react";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import SectionWrapper from "./OtherEvents.style";
import { OtherEventsData } from "common/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Parallax } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { LinkButton } from "common/components/Button";
import Image from "common/components/Image";
import Container from "common/components/UI/Container";

const { title, items } = OtherEventsData;

const OtherEvents = () => {
  return (
    <SectionWrapper id="other_events">
      <Heading className="header" fontWeight="bold" content={title} />

      <Container className="Container">
        <Swiper
          className="single-swipper"
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className}" ></span>`;
            },
          }}
          modules={[Mousewheel, Pagination]}
          direction={"vertical"}
          autoHeight
          slidesPerView={1}
          spaceBetween={30}
          loop={false}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 0.9,
            releaseOnEdges: true,
          }}
        >
          {items.map(
            (
              {
                title,
                subtitle,
                button,
                topIcon,
                description,
                mainIcon,
                bottomIcon,
              },
              index
            ) => {
              return (
                <SwiperSlide key={`single-slider-key-${index}`}>
                  <div className="swiper-inner-wrapper">
                    <div className="left-side">
                      <Image
                        className="top-icon"
                        alt="spring-logo"
                        src={topIcon.src}
                      />
                      <Heading as="h2" content={title} />
                      <Heading as="h3" content={subtitle} />
                      <Text as="p" content={description} />
                      <div onClick={(e) => e.stopPropagation()}>
                        <LinkButton
                          target="_blank"
                          href={button.link}
                          className="dark"
                          title={button.text}
                        />
                      </div>
                      <Image
                        className="bottom-icon"
                        alt="spring-logo"
                        src={bottomIcon.src}
                      />
                    </div>
                    <div className="right-side">
                      <Image
                        className="main-icon"
                        alt="main-logo"
                        src={mainIcon.src}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </Container>
    </SectionWrapper>
  );
};

export default OtherEvents;
