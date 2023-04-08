import { randomPostFromSub, post } from "justreddit";
import parseUrl from "parse-url";
export default {
  async fetch(request: Request) {
    const parsedUrl = parseUrl(request.url);
    const sfw = parsedUrl.query.sfw == true;
    switch (parsedUrl.pathname) {
      case "/v1/meme":
        let post: post = await randomPostFromSub({
          subReddit: "memes",
          postGetLimit: 100,
          sortType: "random",
        });

        if (sfw && post.nsfw) {
          do {
            post = await randomPostFromSub({
              subReddit: "memes",
              postGetLimit: 5,
              sortType: "random",
            });
          } while (post.nsfw);
        }
        return new Response(JSON.stringify(post, null, 4));
      case "/v1/meme/hot":
        let postHot: post = await randomPostFromSub({
          subReddit: "memes",
          postGetLimit: 100,
          sortType: "hot",
        });

        if (sfw && postHot.nsfw) {
          do {
            post = await randomPostFromSub({
              subReddit: "memes",
              postGetLimit: 5,
              sortType: "hot",
            });
          } while (post.nsfw);
        }
        return new Response(JSON.stringify(postHot, null, 4));
      case "/v1/meme/new":
        let postNew: post = await randomPostFromSub({
          subReddit: "memes",
          postGetLimit: 100,
          sortType: "random",
        });

        if (sfw && postNew.nsfw) {
          do {
            post = await randomPostFromSub({
              subReddit: "memes",
              postGetLimit: 5,
              sortType: "new",
            });
          } while (post.nsfw);
        }
        return new Response(JSON.stringify(postNew, null, 4));
      case "/v1/meme/top":
        let postTop: post = await randomPostFromSub({
          subReddit: "memes",
          postGetLimit: 100,
          sortType: "top",
        });

        if (sfw && postTop.nsfw) {
          do {
            post = await randomPostFromSub({
              subReddit: "memes",
              postGetLimit: 5,
              sortType: "top",
            });
          } while (post.nsfw);
        }
        return new Response(JSON.stringify(postTop, null, 4));
      case "/v1/meme/controversial":
        let postCon: post = await randomPostFromSub({
          subReddit: "memes",
          postGetLimit: 100,
          sortType: "controversial",
        });

        if (sfw && postCon.nsfw) {
          do {
            post = await randomPostFromSub({
              subReddit: "memes",
              postGetLimit: 5,
              sortType: "controversial",
            });
          } while (post.nsfw);
        }
        return new Response(JSON.stringify(postCon, null, 4));
      case "/v1/meme/rising":
        let postRising: post = await randomPostFromSub({
          subReddit: "memes",
          postGetLimit: 100,
          sortType: "rising",
        });

        if (sfw && postRising.nsfw) {
          do {
            post = await randomPostFromSub({
              subReddit: "memes",
              postGetLimit: 5,
              sortType: "rising",
            });
          } while (post.nsfw);
        }
        return new Response(JSON.stringify(postRising, null, 4));
    }

    const indexPage = {
      message: "Welcome to the Memes API.",
      paths: [
        {
          name: "/v1/meme/random",
          description: "Get a random meme.",
          options: [
            {
              name: "nsfw",
              description:
                "Wether you want sfw memes or not. sfw means no sexual content.default: false",
              optional: true,
            },
          ],
        },
        {
          name: "/v1/meme/hot",
          description: "Get a random hot meme.",
          options: [
            {
              name: "nsfw",
              description:
                "Wether you want sfw memes or not. sfw means no sexual content.default: false",
              optional: true,
            },
          ],
        },
        {
          name: "/v1/meme/new",
          description: "Get a new recently posted meme.",
          options: [
            {
              name: "nsfw",
              description:
                "Wether you want sfw memes or not. sfw means no sexual content.default: false",
              optional: true,
            },
          ],
        },
        {
          name: "/v1/meme/top",
          description: "Get the top random meme.",
          options: [
            {
              name: "nsfw",
              description:
                "Wether you want sfw memes or not. sfw means no sexual content.default: false",
              optional: true,
            },
          ],
        },
        {
          name: "/v1/meme/controversial",
          description: "Get a random controversial meme.",
          options: [
            {
              name: "nsfw",
              description:
                "Wether you want sfw memes or not. sfw means no sexual content.default: false",
              optional: true,
            },
          ],
        },
        {
          name: "/v1/meme/rising",
          description: "Get a random rising meme.",
          options: [
            {
              name: "nsfw",
              description:
                "Wether you want sfw memes or not. sfw means no sexual content.default: false",
              optional: true,
            },
          ],
        },
      ],
    };

    return new Response(JSON.stringify(indexPage, null, 4));
  },
};
