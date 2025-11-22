import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from './ui/card';

export default function Vision() {
  const visionRef = useRef(null);
  const missionRef = useRef(null);

  const isVisionInView = useInView(visionRef, { once: true, margin: '-100px' });
  const isMissionInView = useInView(missionRef, { once: true, margin: '-100px' });

  return (
    <>
      {/* === VISION SECTION === */}
      <section ref={visionRef} className="section-premium bg-white py-24">
        <div className="grid md:grid-cols-[35%_60%] gap-16 items-start max-w-6xl mx-auto px-4">
          {/* Left Quote Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="border-l-4 border-primary pl-8"
          >
            <blockquote className="font-serif text-3xl md:text-4xl font-bold text-navy-text leading-tight">
              "We don't chase the treatment — we chase the disease."
            </blockquote>
            <div className="mt-8 w-20 h-1 bg-primary"></div>
          </motion.div>

          {/* Right Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <p className="text-xl leading-relaxed font-normal">
              Telth Holdings Inc (Delaware, USA) leads a global network of healthcare,
              technology, and wellness enterprises unified under a single mission — to
              redefine how the world experiences care, prevention, and longevity.
            </p>
            <p className="text-xl leading-relaxed font-normal">
              Telth is pioneering the world's first{' '}
              <span className="font-bold text-primary">
                Quantum-AI Healthcare Ecosystem
              </span>
              , where data, diagnostics, and decision-making converge through intelligent
              systems that deliver precision, affordability, and accessibility across borders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* === MISSION SECTION === */}
      <section ref={missionRef} className="section-premium bg-mainColour section-dark py-24">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 bg-white/5 border-white/10 border-l-4 border-l-primary card-hover">
              <CardContent className="p-0">
                <div className="text-2xl font-bold text-primary uppercase tracking-wide mb-6">
                  MISSION
                </div>
                <h3 className="text-3xl mb-6 font-bold text-white">
                  Transform Global Healthcare
                </h3>
                <p className="leading-relaxed text-white/80 text-lg">
                  To deliver accessible, affordable, high-quality healthcare and wellness
                  solutions — powered by AI, IoMT, and blockchain — and to structure scalable
                  business models that maximize impact, stakeholder value, and sustainability.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8 bg-white/5 border-white/10 border-l-4 border-l-primary card-hover">
              <CardContent className="p-0">
                <div className="text-2xl font-bold text-primary uppercase tracking-wide mb-6">
                  VISION
                </div>
                <h3 className="text-3xl mb-6 font-bold text-white">
                  Healthcare as a Human Right
                </h3>
                <p className="leading-relaxed text-white/80 text-lg">
                  To become the global leader in connected care and preventive-health ecosystems,
                  enabling individuals, families, and communities to live longer, healthier, and
                  wealthier lives — empowered by technology, data, collaboration, and seamless
                  care journeys.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
}
