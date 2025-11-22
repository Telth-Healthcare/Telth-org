import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Database,
  Activity,
  Wifi,
  Brain,
  Fingerprint,
  Users,
  FileText,
  Microscope,
  Award,
  Cpu,
  Watch,
  Truck,
} from 'lucide-react';

const platforms = [
  {
    icon: Database,
    name: 'RootCloud™',
    description:
      'Hybrid private-blockchain architecture providing secure, decentralized data interoperability across clinics, labs, wearables, and care platforms. HIPAA and GDPR compliant with end-to-end encryption.',
    badges: ['Blockchain', 'Data Security'],
  },
  {
    icon: Activity,
    name: 'P3DSC™ Protocol',
    description:
      'Platform for Precision, Prevention, Diagnostics, and Smart-Care. AI-enabled protocol stack delivering personalized care flows, predictive analytics, and clinical decision support.',
    badges: ['AI/ML', 'Care Protocols'],
  },
  {
    icon: Wifi,
    name: 'TWBAN™ Network',
    description:
      'Telth Wearables & Body-Area-Network. IoMT ecosystem for continuous real-time monitoring integrating sensors, wearables, and clinical devices for comprehensive health tracking.',
    badges: ['IoMT', 'Wearables'],
  },
  {
    icon: Brain,
    name: 'Quantum-AI Engine™',
    description:
      'Advanced diagnostic intelligence delivering 15 minutes of precision diagnostics equivalent to 15 days of traditional lab work. Machine learning models trained on millions of data points.',
    badges: ['Quantum-AI', 'Diagnostics'],
  },
  {
    icon: Fingerprint,
    name: 'G-Med ID™',
    description:
      'Universal digital health identity system providing secure patient data management, consent-based sharing, and comprehensive health record aggregation across providers.',
    badges: ['Digital Identity', 'EHR'],
  },
  {
    icon: Users,
    name: 'DigiDoc AI Central',
    description:
      'Collaborative care platform connecting physicians, care managers, specialists, and patients. Real-time data sharing, telemedicine integration, and AI-assisted diagnosis.',
    badges: ['Telemedicine', 'Collaboration'],
  },
];

const research = [
  {
    icon: Microscope,
    title: 'Research Partnerships',
    description:
      'Collaborations with Johns Hopkins University, Harvard researchers, and IIT Madras Research Park. Focused on AI algorithms, predictive healthcare models, and precision medicine.',
  },
  {
    icon: FileText,
    title: 'Patent Portfolio',
    description:
      '3 provisional patents filed with 2 additional in development. Covering Lab-on-Palm, Lab-on-a-Chip technologies, and proprietary diagnostic methodologies.',
  },
  {
    icon: Award,
    title: 'Innovation Labs',
    description:
      'State-of-the-art facilities at IIT Madras Research Park (Chennai) and SIPCOT (Dharmapuri) for device prototyping, AI model training, and clinical validation.',
  },
];

const devices = [
  {
    icon: Cpu,
    name: 'HES Systems',
    description:
      'Health Examination Systems with 28+ parameters, 20-minute turnaround, portable design for diverse care settings',
  },
  {
    icon: Microscope,
    name: 'Diagnostic Analyzers',
    description:
      'Minute Dry Biochemical & Fluorescence Immunoassay Analyzers for rapid point-of-care testing',
  },
  {
    icon: Watch,
    name: 'Wearables',
    description:
      'Telth Dia continuous glucose monitoring, Telth Cardio Chip for cardiac tracking, smart health watches',
  },
  {
    icon: Truck,
    name: 'Mobile Units',
    description:
      'MobileMed vehicles equipped with full diagnostic capabilities for rural and remote area deployment',
  },
  {
    icon: Database,
    name: 'Smart Kiosks',
    description:
      'Self-service health examination kiosks for high-traffic locations with 71+ parameters',
  },
  {
    icon: Activity,
    name: 'T-Chopper',
    description:
      'Aerial medical ambulance system for rapid emergency response and supply delivery',
  },
];

const stats = [
  { value: '65%', label: 'Cost Reduction in Care Delivery' },
  { value: '75%', label: 'Shorter Care Cycle Duration' },
  { value: '15 min', label: 'Comprehensive Diagnostic Time' },
  { value: '90+', label: 'Diagnostic Parameters Available' },
];

function PageHero() {
  return (
    <div className="relative pt-32 pb-20 bg-gradient-to-br from-[#0A1F44] to-[#1A3A5F]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Technology & Innovation
          </h1>
          <p className="text-xl text-gray-300">
            Proprietary platforms powering the Quantum-AI healthcare ecosystem
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function Platforms() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-[#0A1F44] to-[#1A3A5F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Technology Stack
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-gradient-to-br from-[#1A3A5F] to-[#0A1F44] rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#D4A554]/20 group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A554]/10 rounded-full blur-3xl" />
              <div className="relative">
                {/* <platform.icon className="text-[#D4A554] mb-4" size={36} /> */}
                <h3 className="text-xl font-bold text-white mb-3">{platform.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {platform.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {platform.badges.map((badge, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Research() {
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
            Research & Development
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {research.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#FFF8F0] to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* <div className="w-16 h-16 bg-gradient-to-br from-[#D4A554] to-[#B8944A] rounded-xl flex items-center justify-center mb-6">
                <item.icon className="text-white" size={28} />
              </div> */}
              <h3 className="text-xl font-bold text-[#0A1F44] mb-3">{item.title}</h3>
              <p className="text-[#2D3748] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Devices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1F44] mb-4">
            Device Ecosystem
          </h2>
          <p className="text-xl text-[#2D3748]">
            Comprehensive diagnostic and monitoring devices powering care delivery
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {devices.map((device, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* <div className="w-14 h-14 bg-gradient-to-br from-[#D4A554] to-[#B8944A] rounded-lg flex items-center justify-center mb-4">
                <device.icon className="text-white" size={24} />
              </div> */}
              <h3 className="text-lg font-bold text-[#0A1F44] mb-2">{device.name}</h3>
              <p className="text-[#2D3748] text-sm leading-relaxed">{device.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
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
            Why Our Technology Leads
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#D4A554] to-[#B8944A] mb-3">
                {stat.value}
              </div>
              <div className="text-[#2D3748] font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Technology() {
  return (
    <>
      <PageHero />
      <Platforms />
      <Research />
      <Devices />
      <Stats />
    </>
  );
}
