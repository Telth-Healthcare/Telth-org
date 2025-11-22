import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const companies = [
  {
    flag: '🇬🇧',
    name: 'Telth Healthcare UK',
    meta: 'Company No: 14411590 | Est: October 2022',
    description:
      'Strategic hub for UK/European markets, offering Quantum-AI Smart Clinics, Micro-Labs, and health kiosks. Focused on R&D partnerships, regulatory alignment with UK/EU frameworks, and franchise licensing operations.',
    link: 'https://telth-uk.com',
    external: true,
  },
  {
    flag: '🇮🇳',
    name: 'Telth Healthcare India',
    meta: 'CIN: U72900TZ2021PTC037139 | Est: December 2021',
    description:
      'Manufacturing powerhouse and operations center driving the telco-healthcare model. Smart Care Hubs, AI-powered diagnostics, IoMT device production, and nationwide care-manager network deployment.',
    link: 'https://telth-india.com',
    external: true,
  },
  {
    flag: '🌐',
    name: 'GMED ID Foundation',
    meta: 'Philanthropic & Public Good Division',
    description:
      'Bridging healthcare gaps through community diagnostics, telemedicine outreach, care manager training, and last-mile health access. Building the digital-health workforce of tomorrow.',
    link: 'https://gmedid-foundation.org',
    external: true,
  },
  {
    flag: '💻',
    name: 'Telth Tech Division',
    meta: 'Technology & Innovation Backbone',
    description:
      'Core IP development: RootCloud™ blockchain architecture, P3DSC™ precision care protocols, TWBAN™ IoMT networks, and Quantum-AI diagnostic engines powering the entire ecosystem.',
    link: '/technology',
    external: false,
  },
  {
    flag: '💳',
    name: 'Telth Health & Wealth',
    meta: 'Membership & Payment Ecosystem',
    description:
      'Digital health payments through Care Pay™, T-Pay™, and T-Gold™ Token models. Membership-based ecosystem offering diagnostics, wellness benefits, and provider payment management.',
    link: 'https://mytelth.com',
    external: true,
  },
  {
    flag: '🛒',
    name: 'Telth Mart & NatLife',
    meta: 'Digital Wellness Marketplace',
    description:
      'E-commerce platform for health devices, IoMT wearables, diagnostics, and NatLife organic wellness products. Bridging wellness commerce with integrated healthcare delivery.',
    link: 'https://telthmart.com',
    external: true,
  },
  {
    flag: '🎓',
    name: 'MedPass & Telth-U',
    meta: 'Training & Education Division',
    description:
      'Knowledge Transfer Partnership (KTP) programs with UK universities (Warwick, UCLan). Training physicians, care managers, and collaborative providers on AI-enabled platforms.',
    link: 'https://medpass-telth.com',
    external: true,
  },
];

const partnerships = [
  {
    icon: '🎓',
    title: 'Academic Institutions',
    description:
      'Johns Hopkins University, Harvard University, University of Warwick, UCLan, CUCOM Medical University',
  },
  {
    icon: '🏥',
    title: 'Healthcare Providers',
    description:
      'Hospital networks, clinical collaborations, and care delivery partnerships across multiple regions',
  },
  {
    icon: '🔬',
    title: 'Technology Partners',
    description:
      'AI research labs, IoMT device manufacturers, blockchain infrastructure providers',
  },
  {
    icon: '🏢',
    title: 'Corporate Partners',
    description:
      'Fortune 500 wellness programs, insurance providers, pharmaceutical companies',
  },
];

function PageHero() {
  return (
    <div className="relative pt-32 pb-20 bg-mainColour">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Our Global Network
          </h1>
          <p className="text-xl text-gray-300">
            An integrated ecosystem of healthcare, technology, and wellness enterprises
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function ParentCompany() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-br from-[#D4A554] to-[#B8944A] rounded-2xl p-12 text-white"
        >
          <Building2 className="mx-auto mb-6" size={64} />
          <h2 className="text-4xl font-bold mb-4">Telth Holdings Inc</h2>
          <p className="text-xl opacity-90">
            Delaware, USA | Leading the global network unified under a single vision
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Companies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-[#F7F3EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1F44] mb-4">
            Our Companies
          </h2>

          <p className="text-lg text-[#6D6D6D] max-w-2xl mx-auto">
            Discover the diverse companies under our global ecosystem.
          </p>
        </motion.div>


        {/* CARDS */}
        <div className="space-y-10">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="
                group relative overflow-hidden rounded-2xl p-8 
                backdrop-blur-xl bg-white/70 border border-white/50 
                shadow-[0_4px_20px_rgba(0,0,0,0.08)]
                hover:shadow-[0_10px_40px_rgba(212,165,84,0.25)]
                transition-all duration-500
              "
            >

              {/* Left Accent Gradient Bar */}
              <div
                className="
                  absolute left-0 top-0 h-full w-2 
                  bg-gradient-to-b from-[#D4A554] to-[#EBCB84]
                "
              />

              {/* Card Content */}
              <div className="flex flex-col md:flex-row md:items-start md:space-x-6">

                {/* FLAG / ICON */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.12 + 0.2 }}
                  className="
                    text-6xl mb-4 md:mb-0 
                    transform transition-transform duration-500 
                    group-hover:scale-110 group-hover:rotate-3
                  "
                >
                  {company.flag}
                </motion.div>

                {/* TEXT CONTENT */}
                <div className="flex-1">

                  {/* Name */}
                  <h3 className="text-2xl font-bold text-[#0A1F44] mb-2">
                    {company.name}
                  </h3>

                  {/* Meta */}
                  <div className="inline-block text-sm font-semibold text-[#D4A554] mb-4
                    bg-[#FFF4DA] px-3 py-1 rounded-full
                  ">
                    {company.meta}
                  </div>

                  {/* Description */}
                  <p className="text-[#2D3748] leading-relaxed mb-6">
                    {company.description}
                  </p>

                  {/* Button */}
                  {company.external ? (
                    <a
                      href={company.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center space-x-2 text-[#D4A554] 
                        font-semibold transition-all duration-300
                        group-hover:text-[#b98b37]
                      "
                    >
                      <span>Visit Website</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <Link
                      to={company.link}
                      className="
                        inline-flex items-center space-x-2 text-[#D4A554] 
                        font-semibold transition-all duration-300
                        group-hover:text-[#b98b37]
                      "
                    >
                      <span>Learn More</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}

                </div>
              </div>

              {/* Gold Glow Hover Overlay */}
              <div
                className="
                  absolute inset-0 opacity-0 group-hover:opacity-10 
                  bg-gradient-to-r from-transparent via-[#D4A554] to-transparent 
                  blur-xl transition-all duration-700
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Partnerships() {
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
            Strategic Partnerships
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {partnerships.map((partnership, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#FFF8F0] to-white rounded-xl p-8 shadow-lg"
            >
              <div className="text-4xl mb-4">{partnership.icon}</div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-3">{partnership.title}</h3>
              <p className="text-[#2D3748] leading-relaxed">{partnership.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FranchiseCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-[#FFF8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1F44] mb-6">
            Franchise & Partnership Opportunities
          </h2>
          <p className="text-xl text-[#2D3748] mb-10 leading-relaxed">
            Become part of the Quantum-AI healthcare revolution. Explore Smart Clinic
            franchises, Micro-Lab partnerships, and collaborative care provider opportunities.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-[#D4A554] to-[#B8944A] text-white px-10 py-5 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-[#D4A554]/40 transition-all duration-300 transform hover:scale-105"
          >
            <span>Explore Opportunities</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function Network() {
  return (
    <>
      <PageHero />
      {/* <ParentCompany /> */}
      <Companies />
      <Partnerships />
      <FranchiseCTA />
    </>
  );
}
