import Head from "next/head";

const DEFAULT_TITLE = "GBA Cart data";
const DEFAULT_DESCRIPTION = "A registery of GBA cart data";
const DEFAULT_KEYWORDS = "Gameboy advance cart data";

const DEFAULT_THEME_COLOR = "#FF0000";

const DEFAULT_TWITTER_SITE = "@ranza";
const DEFAULT_TWITTER_CREATOR = "@ranza";

const DEFAULT_FB_IMAGE_URL = "/favicon.ico";
const DEFAULT_FB_IMAGE_MIME_TYPE = "image/png";
const DEFAULT_FB_IMAGE_HEIGHT = 192;
const DEFAULT_FB_IMAGE_WIDTH = 192;

const Metadata = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  metadata = {},
}) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow" />

      <title>{title}</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />

      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />

      <meta name="twitter:title" content={metadata.title || title} />
      <meta
        name="twitter:description"
        content={metadata.description || description}
      />
      <meta
        name="twitter:image"
        content={metadata.image?.url || DEFAULT_FB_IMAGE_URL}
      />

      <meta property="og:title" content={metadata.title || title} />
      <meta
        property="og:description"
        content={metadata.description || description}
      />
      <meta
        property="og:image"
        content={metadata.image?.url || DEFAULT_FB_IMAGE_URL}
      />
      <meta
        property="og:image:type"
        content={metadata.image?.mime_type || DEFAULT_FB_IMAGE_MIME_TYPE}
      />
      <meta
        property="og:image:width"
        content={metadata.image?.width || DEFAULT_FB_IMAGE_WIDTH}
      />
      <meta
        property="og:image:height"
        content={metadata.image?.height || DEFAULT_FB_IMAGE_HEIGHT}
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={DEFAULT_TWITTER_SITE} />
      <meta name="twitter:creator" content={DEFAULT_TWITTER_CREATOR} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="da" />

      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="mask-icon"
        href="/safari-pinned-tab.svg"
        color={DEFAULT_THEME_COLOR}
      />
      <meta name="apple-mobile-web-app-title" content="lowpoly.dk" />
      <meta name="application-name" content="lowpoly.dk" />
      <meta name="msapplication-TileColor" content={DEFAULT_THEME_COLOR} />
      <meta name="theme-color" content={DEFAULT_THEME_COLOR} />
    </Head>
  );
};

export default Metadata;
