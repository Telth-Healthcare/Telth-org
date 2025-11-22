import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '$9.7T', label: 'Global Healthcare Market' },
  { value: '$650B', label: 'AI Healthcare by 2030' },
  { value: '$500B', label: 'IoMT & Wearables by 2029' },
  { value: '$1T', label: 'Preventive Health by 2035' },
];

export default function MarketStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1F44] mb-4">
            At The Intersection of Growth
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-primary transform hover:-translate-y-2"
            >
              <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-primary mb-4">
                {stat.value}
              </div>
              <div className="text-black font-medium text-lg">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
