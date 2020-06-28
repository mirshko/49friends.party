import { MDXProvider } from "@mdx-js/react";
import SEO from "../components/SEO";
import { useFathom } from "../hooks";
import { components } from "../lib";
import "../styles.css";

export default function App({ Component, pageProps }) {
  useFathom();

  return (
    <MDXProvider components={components}>
      <SEO />

      <main>
        <Component {...pageProps} />
      </main>

      <footer>
        <p>© 2020</p>
      </footer>
    </MDXProvider>
  );
}
