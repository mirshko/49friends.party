import css from "styled-jsx/css";

export const body = css.global`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: 15px;
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
    padding: 0 1rem;
  }

  footer {
    margin-top: 20vh;
    margin-bottom: 3rem;
  }

  a {
    color: rgb(90, 140, 240);
    text-decoration-skip-ink: none;
    text-decoration-skip: none;
  }
  a:hover:not(:active) {
    animation: blink 2s infinite;
  }

  @supports (text-underline-offset: 0.3em) {
    a {
      text-decoration-style: wavy;
      text-decoration-thickness: 0.1em;
      text-underline-offset: 0.3em;
    }
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.1;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (prefers-reduced-motion: reduce), (update: slow) {
    * {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
    }
  }
`;
