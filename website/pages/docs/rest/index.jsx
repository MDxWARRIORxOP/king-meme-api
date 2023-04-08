import Head from "next/head";
import Styles from "../../../styles/API_docs.module.css";
import { getMeme } from "memes-api";
import React from "react";

function getMemeFromPKG() {
  let meme;

  getMeme({ sfw: true }).then((mama) => {
    meme = mama;
  });
  const element = React.createElement("p", {}, "hello");
  return element;
}

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>API docs | Memes API</title>
      </Head>
      <main>
        <h1 className={"center"}>Welcome to the REST API docs!</h1>
        <h2 className={Styles.heading2}>The routes:</h2>
        <div className={Styles.routes}>
          <h5>
            The base URL is:{" "}
            <code>
              https://king-meme-api.mohammedsiddiqui2009.workers.dev/v1/
            </code>
          </h5>
          <ol>
            <li>
              <p>
                <code>
                  https://king-meme-api.mohammedsiddiqui2009.workers.dev/v1/meme/random
                </code>{" "}
                - Get random memes from reddit.
              </p>

              <h6>
                Options:
                <br />
                <ul>
                  <p>
                    <code>sfw</code> - Wether you want 'safe for work' memes
                    (without any sexual contents)
                  </p>
                </ul>
              </h6>
            </li>
            <li>
              <p>
                <code>
                  https://king-meme-api.mohammedsiddiqui2009.workers.dev/v1/meme/hot
                </code>{" "}
                - Get the most hot memes from reddit.
              </p>

              <h6>
                Options:
                <br />
                <ul>
                  <p>
                    <code>sfw</code> - Wether you want 'safe for work' memes
                    (without any sexual contents)
                  </p>
                </ul>
              </h6>
            </li>
            <li>
              <p>
                <code>
                  https://king-meme-api.mohammedsiddiqui2009.workers.dev/v1/meme/new
                </code>{" "}
                - Get the new memes from reddit.
              </p>

              <h6>
                Options:
                <br />
                <ul>
                  <p>
                    <code>sfw</code> - Wether you want 'safe for work' memes
                    (without any sexual contents)
                  </p>
                </ul>
              </h6>
            </li>
            <li>
              <p>
                <code>
                  https://king-meme-api.mohammedsiddiqui2009.workers.dev/v1/meme/top
                </code>{" "}
                - Get the top memes from reddit.
              </p>

              <h6>
                Options:
                <br />
                <ul>
                  <p>
                    <code>sfw</code> - Wether you want 'safe for work' memes
                    (without any sexual contents)
                  </p>
                </ul>
              </h6>
            </li>
            <li>
              <p>
                <code>
                  https://king-meme-api.mohammedsiddiqui2009.workers.dev/v1/meme/controversial
                </code>{" "}
                - Get the most controversial memes from reddit.
              </p>

              <h6>
                Options:
                <br />
                <ul>
                  <p>
                    <code>sfw</code> - Wether you want 'safe for work' memes
                    (without any sexual contents)
                  </p>
                </ul>
              </h6>
            </li>
            <li>
              <p>
                <code>
                  https://king-meme-api.mohammedsiddiqui2009.workers.dev/v1/meme/rising
                </code>{" "}
                - Get the rising memes from reddit.
              </p>

              <h6>
                Options:
                <br />
                <ul>
                  <p>
                    <code>sfw</code> - Wether you want 'safe for work' memes
                    (without any sexual contents)
                  </p>
                </ul>
              </h6>
            </li>
          </ol>
        </div>
        <h2>Example Output:</h2>
        <code>{getMemeFromPKG()}</code>
      </main>
    </>
  );
}
