import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='video-container'>
          <iframe className="video" src=" https://players.brightcove.net/1709815512001/default_default/index.html?videoId=6280617571001" allowFullScreen={true} allow="encrypted-media">
          </iframe>
        </div>
      </main>
    </div >
  )
}

export default Home
