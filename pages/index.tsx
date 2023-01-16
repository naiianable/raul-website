import Head from 'next/head';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';

export default function Home() {
  return (
    <div>
      <Head>
        {/* <title>Raul Sabat</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Merriweather&display=swap'
          rel='stylesheet'
        /> */}
      </Head>
      <LandingPage />
      <AboutMe />
    </div>
  );
}
