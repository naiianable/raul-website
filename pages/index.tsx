import Head from 'next/head';
import LandingPage from '../components/LandingPage';
import AboutMe from '../components/AboutMe';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Head>{/* <title>Raul Sabat</title>*/}</Head>
      <LandingPage />
      <AboutMe />
    </div>
  );
}
