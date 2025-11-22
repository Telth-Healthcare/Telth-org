import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1F44] mb-6">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl text-[#2D3748] mb-10 leading-relaxed">
            Join us in building the future of connected, preventive, and
            personalized care
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center space-x-2 bg-primary text-white px-10 py-5 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-[#D4A554]/40 transition-all duration-300 transform hover:scale-105"
          >
            <span>Contact Us Today</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
