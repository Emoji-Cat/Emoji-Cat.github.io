// pages/_app.js
import Head from 'next/head'
import './css/card.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Emoji Cat 😽</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
};