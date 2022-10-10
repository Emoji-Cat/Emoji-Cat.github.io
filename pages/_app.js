// pages/_app.js
import Head from 'next/head'
import './css/card.css'
import './css/grid.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Emoji Cat 😽</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
};