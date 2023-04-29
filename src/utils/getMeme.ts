import { randomPostFromSub, post } from "justreddit";

export async function getMeme(
  sfw: boolean,
  sortType: "new" | "top" | "hot" | "random" | "controversial" | "rising"
) {
  let result: post = await randomPostFromSub({
    subReddit: "memes",
    postGetLimit: 5,
    sortType,
    excludeRaw: true,
  });

  if (sfw && result.nsfw) {
    do {
      result = await randomPostFromSub({
        subReddit: "memes",
        postGetLimit: 2,
        sortType,
        excludeRaw: true,
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
