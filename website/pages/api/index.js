export default async function handler(req, res) {
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
        ],
      },
    ],
  };

  res.send(JSON.stringify(indexPage, null, 4));
}
