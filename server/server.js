const express = require("express");
require("dotenv").config({
  path: `${__dirname}/../.env`
});
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");
app.use(bodyParser.json());
port = process.env.SERVER_PORT;

app.get("/api/tweets", async function (req, res) {
  try {
    const params = {
      max_results: 100,
      'tweet.fields': 'created_at',
      expansions: 'attachments.media_keys,in_reply_to_user_id',
      'media.fields': 'media_key,url',
    };

    const config = {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
      },
      params
    };
    const result = await axios.get(
      "https://api.twitter.com/2/users/1382060860651278339/tweets",
      config
    );

    const { data, includes } = result.data;
    const tweets = data.filter((d) => !d.in_reply_to_user_id).map((d) => {
      if (d.attachments && d.attachments.media_keys) {
        const [key] = d.attachments.media_keys;
        const mediaItem = includes && (includes.media || []).find((m) => m.media_key === key);
        if (mediaItem) {
          d = {
            ...d,
            image: mediaItem.url
          }
        }
      }
      return {
        type: 'Tweet',
        id: d.id,
        text: d.text,
        image: d.image,
        created_at: d.created_at
      };
    });
    res.send(tweets);
  } catch (error) {
    console.log("tweets error", error);
  }
});

app.get("/", (req, res) => {
  res.send(`<h1>API Running on the port ${port}</h1>`);
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
