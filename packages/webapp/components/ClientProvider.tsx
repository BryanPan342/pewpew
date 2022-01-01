import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { getClient } from '../utils/PPClient';

interface ClientProviderProps {
  children: React.ReactNode;
}

export default function ClientProvider({children}: ClientProviderProps): JSX.Element {
  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    getClient();
    setInitialized(true);
  });

  return (
    <>
      <Head>
        <title>Initializing client...</title>
      </Head>
      {!initialized ? <div>Initializing...</div> : children}
    </>
  );
}