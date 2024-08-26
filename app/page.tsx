"use client";

import Hero from '../components/Hero';
import HowToPlay from '../components/HowToPlay';
import FAQ from '../components/FAQ';
import Features from '../components/Features';
import GA from '../components/GA';

export default function Home() {
  return (
    <main>
      <Hero />
      <HowToPlay />
      <Features />
      <FAQ />
      <GA />
    </main>
  );
}
