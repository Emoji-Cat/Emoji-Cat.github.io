// pages/_app.js
import Script from 'next/script';
import './css/card.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        id="Adsense-id" data-ad-client="ca-pub-4352778397803727"
        async strategy="afterInteractive"
        onError={ (e) => { console.error('Script failed to load', e) }}
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <Component {...pageProps} />
    </>
  )
};