import 'aos/dist/aos.css';

import Aos from 'aos';
import Head from 'next/head';
import { useEffect } from 'react';

import { Layout } from '@components/layouts/Layout';
import { About } from '@components/sections/About';
import { Contact } from '@components/sections/Contact';
import { Presentation } from '@components/sections/Presentation';
import { Projects } from '@components/sections/Projects';
import { WorkExperiences } from '@components/sections/WorkExperiences';

import { Container } from '@styles/home';

interface HomeProps {
  readonly setIsOverlayActive: (value: boolean) => void;
}

export default function Home({ setIsOverlayActive }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <Head>
        <title>Leonardo Lissone</title>
      </Head>

      <Layout setIsOverlayActive={setIsOverlayActive}>
        <Container>
          <Presentation />
          <About />
          <WorkExperiences />
          <Projects />
          <Contact />
        </Container>
      </Layout>
    </>
  );
}
