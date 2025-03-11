import Head from 'next/head'
import FindString from '../components/FindString'
import FindImageUrl from '../components/FindImageUrl'
import styles from '../styles/Home.module.css'
import Confetti from "react-confetti";
import React, { useState, useRef, useEffect } from "react";


export default function Home() {
  const age = 28
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
      <Confetti numberOfPieces={150} width={width} height={height} drawShape={ctx => {
        ctx.beginPath()
        for(let i = 0; i < 22; i++) {
          const angle = 0.35 * i
          const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
          const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
          ctx.lineTo(x, y)
        }
        ctx.stroke()
        ctx.closePath()
      }} />

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.mainText}>
            <h1 className={styles.title}>
              For My Most Beloved
            </h1>

            <p className={styles.description}>
              I&#39;ll love you &nbsp;
              <code className={styles.code}>forever</code>
            </p>

            <p className={styles.description}>
              Happy {age}th Birthday &nbsp;
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
      <div>
        <p>
          Hey Laner!
        </p>
        <p>
          Happy Birthday darling. Just wanted to pop in here and let you know how much I love you and how much you mean to me. 
        </p>
        <p>
          These 6 years of knowing you have been the 6 best years of my life and you are a large reason for that. When I met you I remember telling Emma and Jeremy, &quot;This girl is amazing, we might even go the distance. It&apos;s just something about her, she hits all the boxes.&quot; Little did I know how true that was :)
        </p>
        <p>
          You are such a vibrant, caring, and thoughtful person. You have helped me grow in ways that I didn&apos;t realize I had to until I met you. Your empathy is something I strive to match every day.
        </p>
        <p>
          I&apos;m also so proud of how much you&apos;ve grown since we first met. Your desire to do better for yourself and others is one of the things I love most and has been so crucial in keeping our relationship strong. I love that you want to grow with me and keep working on all the things we have left to do. There is no one I would rather have with me through thick and thin.
        </p>
        <p>
          Thank you so much for coming on this vacation with me and my family, I can&apos;t wait to continue experiencing life with you especially New Zealand later this year. &#x2665;
        </p>
        <p>Lastly, here is a poem I just made up with any AI help this time. I&apos;m sure it&apos;ll be hard to tell though ;)</p>
        <br></br>
        <p>My wonderful girlfriend is named Laner.</p>
        <p>She is my favorite painter.</p>
        <p>She reads all day</p>
        <p>and reads all night</p>
        <p>and sometimes if I ask very nicely she&apos;ll turn off her light.</p>
        <p>She grows plants in our apartment</p>
        <p>and works in the dietetics department.</p>
        <p>She has a green thumb</p>
        <p>and a wonderful bum</p>
        <p>and makes the most tastey food that makes me go &quot;Yum!&quot;</p>
        <p>Last but not least</p>
        <p>She is an absolute beast</p>
        <p>That I can&apos;t help but love until I&apos;m deceased.</p>
        <p>Happy Birthday most beloved!</p>
      </div>
      </div>
    </div>
  )
}
