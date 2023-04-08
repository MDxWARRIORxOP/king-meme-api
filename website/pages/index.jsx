import Head from "next/head";
import Styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Memes API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={Styles.mainGrid}>
          <div className={Styles.left}>
            <div className={Styles.card}>
              <h1>The Rest API.</h1>
              <br />
              <p>
                The Rest API directly gets the best random memes from Reddit.{" "}
                <br />
                Supports all programming languages.
              </p>
              <br />
              <h3>
                Check out the{" "}
                <button className={Styles.buttonLeft}>Docs</button>
              </h3>
            </div>
            <div>
              <ul>
                <li>
                  <p>Restful API</p>
                </li>
                <li>
                  <p>Open Source</p>
                </li>
                <li>
                  <p>Supports every language that can send HTTP requests</p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className={`center ${Styles.OR}`}>OR</h1>
          </div>
          <div className={Styles.right}>
            <div className={Styles.card}>
              <h1>The NPM Package.</h1>
              <br />
              <p>
                The NPM package uses the Rest API to get the best memes. <br />{" "}
                Only supports Javascript.
              </p>
              <br />
              <h3>
                Check out the{" "}
                <button className={Styles.buttonRight}>Docs</button>
              </h3>
            </div>
            <div>
              <ul>
                <li>
                  <p>Fetches from the Memes API</p>
                </li>
                <li>
                  <p> Reliable</p>
                </li>
                <li>
                  <p>Supports Nodejs</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
