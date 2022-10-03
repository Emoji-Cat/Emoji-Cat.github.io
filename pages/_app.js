// pages/_app.js
import Home from './index.js';
import './css/card.css'

export default function MyApp({ Component, pageProps }) {
  return <Home {...pageProps} />
};