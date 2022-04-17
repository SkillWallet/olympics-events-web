import React from "react";
import NewsArea from "./news.style";
import Masonry from "react-masonry-css";
import { NewsData } from "common/data";
import Heading from "common/components/Heading";
import Link from "next/link";
import Image from "common/components/Image";
import Text from "common/components/Text";
import { useEffect } from "react";
import { fetchNews } from "pages/api/news";
import { useState } from "react";
import { decode } from "html-entities";

const breakpointColumnsObj = {
  default: 3,
  700: 2,
  500: 1,
};

const News = () => {
  const { title, timeAgoIcon, playIcon } = NewsData;
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchNews().then((res) => {
      setItems(res);
    });
  }, []);

  const tweetCard = (item) => {
    return (
      <div className="twitter-card">
        <div className="card-top">
          <span className="card-type">{item.type}</span>
        </div>
        {item.image && <Image alt="twitter-img" src={item.image} />}
        <Text as="p" dangerouslySetInnerHTML={{ __html: decode(item.text) }} />
      </div>
    );
  };

  const mediumCard = (item) => {
    return (
      <div className="medium-card">
        <div className="card-top">
          <span className="card-type">{item.type}</span>
          {/* <span className="card-time">
            <Image alt="time-ago" src={timeAgoIcon.src} />
            {item.time}
          </span> */}
        </div>
        <Heading as="h3" content={item.title} />
        <div className="read-more-text-wrapper">
          <Text
            as="p"
            dangerouslySetInnerHTML={{
              __html: decode(item.text.slice(0, 150)),
            }}
          />
          <div className="btn-read-more">
            <Link href={item.href}>
              <a target="_blank" className="read-more-link">
                {"Read More>"}
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const youtubeCard = (item) => {
    return (
      <div className="youtube-card">
        <div className="card-content">
          <Link href={item.href}>
            <a target="_blank" className="read-more-link">
              <Image className="play-icon" alt="play-icon" src={playIcon.src} />
            </a>
          </Link>
          {item.image && (
            <Image className="thumb" alt="youtube-img" src={item.image} />
          )}
        </div>

        <div className="card-bottom">
          <span className="card-type">{item.type}</span>
          <span className="card-title">{item.title}</span>
        </div>
      </div>
    );
  };

  const getNewsCard = (item) => {
    switch (item.type) {
      case "Tweet":
        return tweetCard(item);
      case "Youtube":
        return youtubeCard(item);
      case "Medium Post":
        return mediumCard(item);
    }
  };

  return (
    <NewsArea id="news">
      <div className="header">
        <Heading
          className="header"
          fontWeight="bold"
          fontSize="3.5rem"
          content={title}
        />
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {items.map((item, index) => {
          return (
            <div key={index} className="masonry-grid-item">
              {getNewsCard(item)}
            </div>
          );
        })}
      </Masonry>
    </NewsArea>
  );
};

export default News;
