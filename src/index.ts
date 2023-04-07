import { randomPostFromSub, post } from "justreddit";
import parseUrl from "parse-url";

async function getMeme(nsfw = true): Promise<post> {
  let post: post;

  do {
    post = await randomPostFromSub({ subReddit: "memes", postGetLimit: 1000 });
  } while (!post.image);

  if ((nsfw = false)) {
    do {
      post = await randomPostFromSub({
        subReddit: "memes",
        postGetLimit: 1000,
      });
    } while ((post.nsfw = true || !post.image));
  }

  return post;
}

export default {
  async fetch(request: Request) {
    const parsedUrl = parseUrl(request.url);
    if (parsedUrl.pathname == "/meme") {
      if (parsedUrl.query["nsfw"] == false) {
        const meme = await getMeme(parsedUrl.query["nsfw"]);
        return new Response(JSON.stringify(meme, null, 4));
      }

      const meme = await getMeme();
      return new Response(JSON.stringify(meme, null, 4));
    }

    const indexPage = {
      message: "Welcome to king-meme-api.",
      paths: [
        {
          name: "/meme",
          description: "Get a meme.",
          options: [
            {
              name: "nsfw",
              description: "Wether you allow nsfw memes or not. default: true",
              optional: true,
            },
          ],
        },
      ],
    };

    return new Response(JSON.stringify(indexPage, null, 4));
  },
};
