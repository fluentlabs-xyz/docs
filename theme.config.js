// Imported React packages/modules
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

// Constants to use in Params
const logo = ({ height }) => (
    <svg width="97" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M1.04 18.62 0 1.518h3.118l.484 10.24.145 3.234h.217l1.45-9.75h3.264l1.45 9.75h.218l.145-3.135.484-10.34h2.997l-1.04 17.101H8.34L7.107 9.187h-.242L5.632 18.62zM24.744 18.62l-1.063-4.117h-4.618l-1.039 4.116H14.35l4.568-17.1h5.125l4.569 17.1zM21.481 5.07h-.194l-1.643 6.468h3.48zM35.71 18.913c-1.419 0-2.651-.237-3.699-.71-1.048-.474-1.894-1.12-2.538-1.936l2.103-2.352c.612.686 1.281 1.193 2.006 1.52.742.326 1.491.49 2.248.49.87 0 1.531-.197 1.983-.589.45-.392.677-.955.677-1.69 0-.604-.178-1.062-.532-1.372-.339-.31-.919-.53-1.74-.661l-1.765-.295c-1.515-.26-2.611-.824-3.288-1.69-.677-.882-1.015-1.952-1.015-3.21 0-1.649.532-2.923 1.595-3.821 1.064-.915 2.554-1.372 4.472-1.372 1.306 0 2.442.204 3.409.612.967.409 1.748.964 2.345 1.666l-2.055 2.328a4.735 4.735 0 0 0-1.596-1.176c-.612-.294-1.305-.441-2.079-.441-1.627 0-2.441.678-2.441 2.033 0 .588.177 1.03.532 1.323.37.294.967.515 1.789.662l1.764.318c1.37.245 2.426.768 3.167 1.568.741.8 1.112 1.878 1.112 3.234 0 .8-.137 1.543-.411 2.23a4.912 4.912 0 0 1-1.233 1.763c-.548.49-1.225.874-2.03 1.152-.79.277-1.717.416-2.78.416zM53.637 11l.193-4.777h-.217l-3.143 8.795-3.142-8.795h-.218L47.303 11v7.62h-3.142V1.518h4.279l2.079 5.757h.193L52.79 1.52h3.988v17.1h-3.142zM61.919 11c0-1.192.129-2.336.387-3.43a16.16 16.16 0 0 1 1.088-3.087 13.391 13.391 0 0 1 1.62-2.548A11.432 11.432 0 0 1 66.946 0h3.578a14.153 14.153 0 0 0-2.152 1.837 12.897 12.897 0 0 0-1.789 2.279c-.5.833-.902 1.723-1.208 2.67s-.46 1.936-.46 2.965v2.498c0 1.03.154 2.017.46 2.965s.709 1.837 1.208 2.67a12.9 12.9 0 0 0 1.79 2.279A14.15 14.15 0 0 0 70.523 22h-3.577c-.677-.506-1.321-1.143-1.934-1.91a14.136 14.136 0 0 1-1.62-2.573 16.32 16.32 0 0 1-1.087-3.063A15.228 15.228 0 0 1 61.919 11zM79.46 18.913c-2.257 0-3.925-.776-5.004-2.327-1.064-1.552-1.596-3.724-1.596-6.517s.532-4.965 1.596-6.517c1.08-1.551 2.747-2.327 5.004-2.327s3.916.776 4.98 2.327c1.079 1.552 1.619 3.724 1.619 6.517s-.54 4.965-1.62 6.517c-1.063 1.551-2.723 2.327-4.98 2.327zm0-2.89c1.08 0 1.829-.384 2.248-1.152.435-.768.652-1.838.652-3.21V8.477c0-1.372-.217-2.442-.652-3.21-.42-.767-1.169-1.151-2.248-1.151-1.08 0-1.838.384-2.273 1.151-.419.768-.628 1.838-.628 3.21v3.185c0 1.371.21 2.441.628 3.209.435.767 1.193 1.151 2.273 1.151zm0-4.508c-.565 0-.96-.115-1.185-.343a1.189 1.189 0 0 1-.314-.833v-.54c0-.326.105-.604.314-.832.226-.23.62-.343 1.185-.343.564 0 .95.114 1.16.343.225.228.338.506.338.833v.539c0 .326-.113.604-.338.833-.21.228-.596.343-1.16.343zM97 11c0 1.192-.137 2.344-.41 3.454a14.318 14.318 0 0 1-1.089 3.063c-.451.947-.983 1.805-1.595 2.572S92.649 21.494 91.972 22h-3.578a14.812 14.812 0 0 0 2.128-1.837 11.56 11.56 0 0 0 1.788-2.279c.516-.833.927-1.723 1.233-2.67s.46-1.936.46-2.965V9.751c0-1.03-.154-2.018-.46-2.965s-.717-1.837-1.233-2.67a11.557 11.557 0 0 0-1.788-2.279A14.815 14.815 0 0 0 88.394 0h3.578a11.432 11.432 0 0 1 1.934 1.935c.612.752 1.144 1.601 1.595 2.548.468.948.83 1.977 1.088 3.087C96.863 8.664 97 9.808 97 11z"></path></g></svg>
);

// Params
export default {
//General params
  project: {
    link: "https://github.com/Ankr-network/?q=wasm&type=all&language=&sort=",
  },
  titleSuffix: " – Wasm0",
  toc: {
    float: true,
  },
  sidebar: { defaultMenuCollapsed: true },
// Feedback and Edit on GH links
  feedback: {
  labels: "feedback",
  content: "Give us feedback →",
  },
  docsRepositoryBase: "https://github.com/Ankr-network/wasm-docs/blob/main",
  editLink: {
    text: "Edit this page on GitHub →",
  },
// Logo
  logo: logo,
// Head content and settings
  head() {
    const config = useConfig();
    const description =
      config.frontMatter.description ? config.frontMatter.description : "Decentralized Infrastructure to Build and Earn in Web3.";
    const image =
      config.frontMatter.image ||
      "https://wasm0.io/static/cover.png";
    return (
      <>
         {/* General */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />

        {/* SEO */}
        <meta name="robots" content="nofollow" />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="og:title" content={`${config.title} — Wasm0`} />
        <meta name="apple-mobile-web-app-title" content={`${config.title} — Wasm0`} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site:domain" content="wasm0.io" />
        <meta name="twitter:url" content="https://wasm0.io" />
        <meta name="twitter:image" content={image} />
        <meta name="og:image" content={image} />

        {/* Favicons */}
        <link rel="manifest" href="/docs/favicon/site.webmanifest" />
        <link rel="icon" type="image/svg+xml" href="/docs/favicon/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/docs/favicon/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/docs/favicon/favicon-32x32.png"
        />
        <link
          rel="apple-icon"
          sizes="180x180"
          href="/docs/favicon/apple-touch-icon.png"
        />
      </>
    );
  },
//Footer content and settings
  footer: {
    text: <div>
        © {new Date().getFullYear()}  Wasm0 All rights reserved
      </div>
  },
};