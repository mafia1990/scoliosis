// pages/index.js
import Head from 'next/head';
// import BookFlip from '../components/BookFlip';
import styles from '../styles/Home.module.css';
import SinglePageBook from '@/components/SinglePageBook';
import StyledBook from '@/components/StyledBook';
import BookFlip from '@/components/BookFlip';

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title> Scoliosis Sisterhood </title>
        <meta name="description" content="    Scoliosis Sisterhood " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
             <div className={styles.object2}></div>

        {/* <h1 className={styles.mainTitle}>Scoliosis Sisterhood  </h1> */}
        {/* <p className={styles.description}>Knowledge. Community. Confidence.</p> */}
        <BookFlip />
         {/* <SinglePageBook /> */}
           {/* <StyledBook /> */}
      </main>
             <div className={styles.object1}></div>

    </div>
  );
}