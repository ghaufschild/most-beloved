import Head from 'next/head'
import FindString from '../components/FindString'
import FindImageUrl from '../components/FindImageUrl'
import styles from '../styles/Home.module.css'
import Confetti from "react-confetti";
import React, { useState, useRef, useEffect } from "react";


export default function Home() {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const confetiRef = useRef(null);

  useEffect(() => {
    setHeight(confetiRef.current.clientHeight);
    setWidth(confetiRef.current.clientWidth);
  }, []);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Most Beloved</title>
        <meta name="description" content="For my most beloved" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="confettie-wrap" ref={confetiRef}>
      <Confetti numberOfPieces={150} width={width} height={height} />

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.mainText}>
            <h1 className={styles.title}>
              For My Most Beloved
            </h1>

            {/* <p className={styles.description}>
              I&#39;ll love you &nbsp;
              <code className={styles.code}>forever</code>
            </p> */}

            <p className={styles.description}>
              Happy Birthday &nbsp;
              <code className={styles.code}>Laner!</code>
            </p>
          </div>

          <div className={styles.mainHolder}>
            <div className={styles.imageDetail}>
              <FindImageUrl/>
            </div>
            <FindString/>
          </div>
        </div>
      </main>
      </div>
    </div>
  )
}
