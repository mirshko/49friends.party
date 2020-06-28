import { MDXProvider } from "@mdx-js/react";
import { Fragment } from "react";
import SEO from "../components/SEO";
import { useFathom } from "../hooks";
import { components } from "../lib";
import { body } from "../styles";

export default function App({ Component, pageProps }) {
  useFathom();

  return (
    <Fragment>
      <SEO />

      <style jsx global>
        {body}
      </style>

      <main>
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      </main>

      <footer>
        <p>© 2020</p>
      </footer>
    </Fragment>
  );
}
