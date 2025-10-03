import Head from "next/head";
import React from "react";

export const MetaTitle = ({ title, description, keywords }) => {
  return (
    <Head>
      <link rel="icon" href="assets/logo2.png" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/apple-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/web-app-manifest-512x512.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/web-app-manifest-192x192.png"
      />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
  );
};
