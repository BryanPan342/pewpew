import React, {useEffect, useState} from 'react';
import ClientProvider from '../components/ClientProvider';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.scss';
import { COLLECTIONS, getClient } from '../utils/PPClient';

export default function Home(): JSX.Element {
  const [txt, setTxt] = useState();

  useEffect(() => {
    const client = getClient();
    // retrieve text on load
    client.mount(COLLECTIONS.TEXT, (node) => {
      if(node == undefined) {
        client.put(COLLECTIONS.TEXT, {text: 'Write the text here'});
      } else {
        setTxt(node.text);
      }
    });

    // whenever the text loads, update state
    client.open(COLLECTIONS.TEXT).on((node) => {
      setTxt(node.text);
    });
  }, []);

  // Update local state and gun.db state
  const updateText = (event) => {
    const text = event.target.value;
    const client = getClient();
    client.put(COLLECTIONS.TEXT, {text});
    setTxt(text);
  };

  return (
    <ClientProvider>
      <Layout>
        <div id={styles['text-container']}>
          <h1>Collaborative Docs with Gun.js</h1>
          <textarea id={styles.text}value = {txt} onChange = {updateText}/>
        </div>
      </Layout>
    </ClientProvider>
  );
}