import Hero from '../components/Hero';
import Vision from '../components/Vision';
import WorldMap from '../components/WorldMap';
import Pillars from '../components/Pillars';
import MarketStats from '../components/MarketStats';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <Vision />
      <WorldMap />
      <Pillars />
      <MarketStats />
      <CTASection />
    </>
  );
}
