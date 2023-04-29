import { Router } from "itty-router";
import { getMeme } from "./utils/getMeme";
import { Res } from "./utils/res";
import { getMemeHandler } from "./utils/getMemeHandler";

const router = Router();
const options = [
  {
    name: "sfw",
    description: "Only SFW memes.",
    defaultValue: "false",
    optional: true,
  },
];

router.get("/v1/meme/random", getMemeHandler("random"));

router.get("/v1/meme/hot", getMemeHandler("hot"));

router.get("/v1/meme/new", getMemeHandler("new"));

router.get("/v1/meme/top", getMemeHandler("top"));

router.get("/v1/meme/controversial", getMemeHandler("controversial"));

router.get("/v1/meme/rising", getMemeHandler("rising"));

router.all("*", () => {
  return Res({
    message: "Welcome to the Memes API.",
    paths: [
      {
        name: "/v1/meme/random",
        description: "Get a random meme.",
        options,
      },
      {
        name: "/v1/meme/hot",
        description: "Get a random hot meme.",
        options,
      },
      {
        name: "/v1/meme/new",
        description: "Get a new recently posted meme.",
        options,
      },
      {
        name: "/v1/meme/top",
        description: "Get the top random meme.",
        options,
      },
      {
        name: "/v1/meme/controversial",
        description: "Get a random controversial meme.",
        options,
      },
      {
        name: "/v1/meme/rising",
        description: "Get a random rising meme.",
        options,
      },
    ],
  });
});

export default {
  async fetch(request: Request) {
    return router.handle(request);
  },
};
