import '@/styles/globals.css';
import type { AppProps } from 'next/app';
// import { Merriweather } from '@next/font/google';

// const merriweather = Merriweather({ weight: '400', preload: false });

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
