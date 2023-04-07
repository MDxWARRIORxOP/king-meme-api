import { randomPostFromSub, post } from "justreddit";

async function getMeme(nsfw = true): Promise<post> {
  // let post = await randomPostFromSub({
  //   subReddit: "memes",
  //   postGetLimit: 1000,
  // });

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
    const path = request.url.substring(request.url.lastIndexOf("/"));

    if (path.includes("/meme")) {
      if (path.includes("nsfw=")) {
        const nsfwString = request.url.substring(request.url.indexOf("=") + 1);

        try {
          const nsfw = JSON.parse(nsfwString);
          const meme = await getMeme(nsfw);
          return new Response(JSON.stringify(meme, null, 4));
        } catch (error) {
          const errorRes = {
            message: "Invalid value for nsfw!",
            paths: [
              {
                name: "/meme",
                description: "Get a meme.",
                options: [
                  {
                    name: "nsfw",
                    description:
                      "Wether you allow nsfw memes or not. default: true",
                    optional: true,
                  },
                ],
              },
            ],
          };
          return new Response(JSON.stringify(errorRes, null, 4));
        }
      }

      const meme = await getMeme(true);
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
