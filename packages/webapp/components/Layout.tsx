

import Head from 'next/head';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  id?: string;
  title?: string;
  description?: string;
}

export default function Layout(props: LayoutProps): JSX.Element {
  const title = props.title ?? 'Pew Pew';
  const description = props.description ?? 'A peer-to-peer chatting platform, built with Gun.js';
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content={title} />
        <meta name="description" content={description}/>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description"  content={description} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />

        <title>{title}</title>
      </Head>
      <main id={props.id}>
        {props.children}
      </main>
    </>
  );
}