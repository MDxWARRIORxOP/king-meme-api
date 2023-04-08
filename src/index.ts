import { randomPostFromSub, post } from "justreddit";
import parseUrl from "parse-url";

async function getMeme(
  sfw: boolean,
  sortType: "new" | "top" | "hot" | "random" | "controversial" | "rising"
) {
  let result: post = await randomPostFromSub({
    subReddit: "memes",
    postGetLimit: 5,
    sortType,
  });

  if (sfw && result.nsfw) {
    do {
      result = await randomPostFromSub({
        subReddit: "memes",
        postGetLimit: 5,
        sortType,
      });
    } while (result.nsfw);
  }

  const returnObject = {
    author: result.author,
    commentAmount: result.commentAmount,
    downvotes: result.downvotes,
    image: result.image,
    nsfw: result.nsfw,
    title: result.title,
    upvotes: result.upvotes,
    url: result.url,
  };

  return returnObject;
}

export default {
  async fetch(request: Request) {
    const parsedUrl = parseUrl(request.url);
    const sfw = parsedUrl.query.sfw == true;

    switch (parsedUrl.pathname) {
      case "/v1/meme":
        return new Response(
          JSON.stringify(await getMeme(sfw, "random"), null, 4)
        );
      case "/v1/meme/random":
        return new Response(
          JSON.stringify(await getMeme(sfw, "random"), null, 4)
        );
      case "/v1/meme/hot":
        return new Response(JSON.stringify(await getMeme(sfw, "hot"), null, 4));
      case "/v1/meme/new":
        return new Response(JSON.stringify(await getMeme(sfw, "new"), null, 4));
      case "/v1/meme/top":
        return new Response(JSON.stringify(await getMeme(sfw, "top"), null, 4));
      case "/v1/meme/controversial":
        return new Response(
          JSON.stringify(await getMeme(sfw, "controversial"), null, 4)
        );
      case "/v1/meme/rising":
        return new Response(
          JSON.stringify(await getMeme(sfw, "rising"), null, 4)
        );
      case "/favicon.ico":
        return new Response("");
    }

    const indexPage = {
      message: "Welcome to the Memes API.",
      paths: [
        {
          name: "/v1/meme/random",
          description: "Get a random meme.",
          options: [
            {
              name: "sfw",
              description: "Only SFW memes.",
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
              description: "Only SFW memes.",
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
              description: "Only SFW memes.",
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
              description: "Only SFW memes.",
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
              description: "Only SFW memes.",
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
              description: "Only SFW memes.",
              optional: true,
            },
          ],
        },
      ],
    };

    return new Response(JSON.stringify(indexPage, null, 4));
  },
};
