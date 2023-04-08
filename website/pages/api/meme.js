// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { randomPostFromSub } from "justreddit";
import RenderResult from "next/dist/server/render-result";

async function getMeme(options) {
  let post;

  do {
    post = await randomPostFromSub({ subReddit: "memes", postGetLimit: 1000 });
  } while (!post.image);

  if ((options.sfw = true)) {
    do {
      post = await randomPostFromSub({
        subReddit: "memes",
        postGetLimit: 1000,
      });
    } while ((post.nsfw = false || !post.image));
  }

  return post;
}

export default async function handler(req, res) {
  const options = {
    sfw: req.query["sfw"] == "true" ? true : false,
  };

  const meme = await getMeme(options);
  res.send(JSON.stringify(meme, null, 4));
}
