import Head from "next/head";

export default function SEO() {
  return (
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
      <meta
        property="og:image"
        content="https://49friends.party/og-light.png"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <link rel="icon" href="/favicon-transparent.png" type="image/png" />
      <meta name="twitter:title" content="49 FRIENDS" />
      <meta
        name="twitter:description"
        content="A collaborative party of creatives working to bring the future to you one friend at a time."
      />
      <meta
        name="twitter:image"
        content="https://49friends.party/og-light.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
