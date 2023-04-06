import Head from 'next/head';
import LandingPage from '../components/LandingPage';
import AboutMe from '../components/AboutMe';
import ServicesProvided from '../components/ServicesProvided';
import ContactLocation from '@/components/ContactLocation';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Head>{/* <title>Raul Sabat</title>*/}</Head>
      <LandingPage />
      <AboutMe />
      <ServicesProvided />
      <ContactLocation />
    </div>
  );
}
