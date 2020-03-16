import * as Fathom from "fathom-client";
import Router from "next/router";
import { useEffect, Fragment } from "react";
import Head from "next/head";

Router.events.on("routeChangeComplete", () => Fathom.trackPageview());

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Fathom.load();
    Fathom.setSiteId("DYVZJBMF");
    Fathom.trackPageview();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>49 FRIENDS</title>
        <meta name="title" content="49 FRIENDS" />
        <meta property="og:title" content="49 FRIENDS" />
        <meta
          name="description"
          content="A collaborative party of creatives working to bring the future to you one friend at a time."
        />
        <meta
          property="og:description"
          content="A collaborative party of creatives working to bring the future to you one friend at a time."
        />
        <meta property="og:site_name" content="49 FRIENDS" />
        <meta property="og:url" content="https://49friends.party" />
        <meta name="author" content="staff@49friends.party" />
        <link rel="preload" href="/globe.gif" as="image" />
      </Head>
      <style jsx global>{`
        html {
          box-sizing: border-box;
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        html {
          font-size: 17px;
          font-weight: 500;
          line-height: 1.21053;
          letter-spacing: 0.012em;
          -webkit-tap-highlight-color: transparent;
        }

        @media screen and (min-width: 48em) {
          html {
            font-size: 19px;
          }
        }

        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;

          font-family: "Helvetica Neue", Arial, sans-serif;
          font-feature-settings: "kern" 1, "kern", "kern", "liga" 1;
          font-kerning: normal;
          font-size: 1.8rem;

          text-align: center;
        }

        body,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        ul,
        ol,
        li {
          margin: 0;
        }

        p,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-size: inherit;
          font-weight: inherit;
          line-height: 1.25;
        }

        .copy {
          padding-top: 3rem;
          display: flex;
          align-items: center;
          flex-direction: column;
          max-width: 50ch;
          margin: 0 auto;
        }
        .copy > * + * {
          margin-top: 3rem;
          padding: 0 2rem;
        }

        footer {
          margin-top: 20vh;
          margin-bottom: 3rem;
        }

        a {
          color: mediumspringgreen;
          text-decoration: none;
          text-shadow: 0.05em 0.05em 0 black;
        }

        @media (hover: hover) {
          .hover-blink:hover:not(:active),
          :any-link:hover:not(:active),
          a:hover:not(:active) {
            animation: blink 200ms infinite step-start;
          }
        }

        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .globe {
          position: relative;
          background-image: url(/globe.gif);
          background-position: center;
          background-size: 1.25em;
          background-repeat: no-repeat;
          height: 1em;
          width: 1em;
          display: inline-block;
          vertical-align: middle;
        }

        @media screen and (prefers-reduced-motion: reduce), (update: slow) {
          * {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>
      <Component {...pageProps} />
    </Fragment>
  );
}
