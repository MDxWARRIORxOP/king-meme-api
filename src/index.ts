import { randomPostFromSub, post } from "justreddit";
import parseUrl from "parse-url";

async function getMeme(options: { sfw: boolean }): Promise<post> {
  let post: post;

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

export default {
  async fetch(request: Request) {
    const parsedUrl = parseUrl(request.url);
    if (parsedUrl.pathname == "/meme") {
      const options = {
        sfw: parsedUrl.query["sfw"] == true ? true : false,
      };

      const meme = await getMeme(options);
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
              description:
                "Wether you want sfw memes or not. sfw means no sexual content.default: false",
              optional: true,
            },
            {
              name: "ff",
              description:
                "Wether you want family friendly memes or not. family friendly means no sexual content + no swearing. default false",
              optional: true,
            },
          ],
        },
      ],
    };

    return new Response(JSON.stringify(indexPage, null, 4));
  },
};
