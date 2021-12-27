import Gun from 'gun';
import React, {useEffect, useState} from 'react';
import styles from '../styles/Home.module.scss';

const gun = Gun({
  peers: ['http://localhost:8000/gun'],
});

export default function Home(): JSX.Element {
  const [txt, setTxt] = useState();

  useEffect(() => {
    // retrieve text on load
    gun.get('text').once((node) => {
      if(node == undefined) {
        gun.get('text').put({text: 'Write the text here'});
      } else {
        setTxt(node.text);
      }
    });

    // whenever the text loads, update state
    gun.get('text').on((node) => {
      setTxt(node.text);
    });
  }, []);

  // Update local state and gun.db state
  const updateText = (event) => {
    gun.get('text').put({text: event.target.value});
    setTxt(event.target.value);
  };

  return (
    <div id={styles['text-container']}>
      <h1>Collaborative Docs with Gun.js</h1>
      <textarea id={styles.text}value = {txt} onChange = {updateText}/>
    </div>

  );
}
