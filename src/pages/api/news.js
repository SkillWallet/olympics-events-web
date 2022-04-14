import * as axios from "axios";
export const fetchTweets = async () => {
  try {
    return await axios.get("/api/tweets").then((res) => res.data);
  } catch (error) {
    return [];
  }
};

export const fetchVideos = async () => {
  try {
    return await axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://youtube.com/feeds/videos.xml?channel_id=UCJ_VBcBJRbciHoGMn_tlYiA"
      )
      .then((res) => {
        return res.data.items.map((v) => {
          return {
            type: "Youtube",
            title: v.title,
            created_at: v.pubDate,
            image: v.thumbnail,
            href: v.link,
          };
        });
      });
  } catch (error) {
    return [];
  }
};

export const fetchMediumPosts = async () => {
  try {
    return await axios.get("/api/medium-posts").then((res) => res.data);
  } catch (error) {
    return [];
  }
};

export const fetchNews = async () => {
  const tweets = await fetchTweets();
  const youtubeVideos = await fetchVideos();
  const mediumPosts = await fetchMediumPosts();
  return [
    ...tweets.slice(0, 5),
    ...youtubeVideos.slice(0, 5),
    ...mediumPosts.slice(0, 5),
  ].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
};
