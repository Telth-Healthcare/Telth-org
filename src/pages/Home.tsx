import Hero from '../components/Hero';
import Vision from '../components/Vision';
import WorldMap from '../components/WorldMap';
import Pillars from '../components/Pillars';
import MarketStats from '../components/MarketStats';
import CTASection from '../components/CTASection';
import { useRef } from 'react';

export default function Home() {
  const forwardRef = useRef<HTMLDivElement | null>(null);

  const handleForward = () => {
    forwardRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Hero onNavigate={handleForward} />
      <Vision />
      <WorldMap />
      <Pillars forwardRef={forwardRef}/>
      <MarketStats />
      <CTASection />
    </>
  );
}
