import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Lightbulb, Users as UsersIcon, Globe, Award, Heart, Zap } from 'lucide-react';

const missions = [
  {
    icon: Target,
    title: 'Our Mission',
    content:
      'To deliver accessible, affordable, high-quality healthcare and wellness solutions — powered by AI, IoMT and blockchain — and to structure scalable business models that maximize impact, stakeholder value and sustainability.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    content:
      'To become the global leader in connected care and preventive-health ecosystems, enabling individuals, families and communities to live longer, healthier and wealthier lives — empowered by technology, data, collaboration and seamless care journeys.',
  },
];

const timeline = [
  {
    year: '2008',
    title: 'Research Inception',
    description:
      'Telth research project initiated with founding team from Harvard and Johns Hopkins University',
  },
  {
    year: '2021',
    title: 'Telth Healthcare India',
    description:
      'Incorporation of Indian operations (CIN: U72900TZ2021PTC037139) with focus on manufacturing and scale',
  },
  {
    year: '2022',
    title: 'UK Expansion',
    description:
      'Telth Healthcare UK established (Company No: 14411590) for European R&D and partnerships',
  },
  {
    year: '2023-2024',
    title: 'Technology Development',
    description:
      'Patent filings, strategic partnerships, KTP programs with UK universities',
  },
  {
    year: '2025',
    title: 'Global Rollout Begins',
    description:
      'Launch of 21 AI Hubs across UK and India, franchise expansion program initiated',
  },
  {
    year: '2026-2030',
    title: 'Global Expansion',
    description:
      '150 Smart Clinics + 300 Micro-Labs across EU, MENA, Asia. Target: >1000 nodes worldwide',
  },
];

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Pioneering quantum-AI technologies that redefine healthcare possibilities',
  },
  {
    icon: UsersIcon,
    title: 'Collaboration',
    description: 'Building ecosystems where providers, patients, and technology unite',
  },
  {
    icon: Globe,
    title: 'Accessibility',
    description: 'Making advanced care available to everyone, everywhere',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Maintaining the highest standards in quality, ethics, and outcomes',
  },
  {
    icon: Zap,
    title: 'Sustainability',
    description: 'Creating models that are economically, socially, and environmentally sustainable',
  },
  {
    icon: Heart,
    title: 'Compassion',
    description: 'Putting human wellbeing at the center of every innovation',
  },
];

const boardMembers = [
  {
    name: '[Board Member Name]',
    title: 'Chairman & CEO',
    bio: 'Placeholder text for board member experience and background information.',
    linkedin: '#',
  },
  {
    name: '[Board Member Name]',
    title: 'Chief Technology Officer',
    bio: 'Placeholder text for board member experience and background information.',
    linkedin: '#',
  },
  {
    name: '[Board Member Name]',
    title: 'Chief Medical Officer',
    bio: 'Placeholder text for board member experience and background information.',
    linkedin: '#',
  },
  {
    name: '[Board Member Name]',
    title: 'Chief Financial Officer',
    bio: 'Placeholder text for board member experience and background information.',
    linkedin: '#',
  },
  {
    name: '[Board Member Name]',
    title: 'Independent Director',
    bio: 'Placeholder text for board member experience and background information.',
    linkedin: '#',
  },
  {
    name: '[Board Member Name]',
    title: 'Independent Director',
    bio: 'Placeholder text for board member experience and background information.',
    linkedin: '#',
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
            About Telth
          </h1>
          <p className="text-xl text-gray-300">
            Building the future of healthcare through innovation, collaboration, and vision
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function MissionVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {missions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-4lg border border-primary card-hover"
            >
              {/* <div className="w-16 h-16 bg-gradient-to-br from-[#D4A554] to-[#B8944A] rounded-xl flex items-center justify-center mb-6">
                <item.icon className="text-white" size={28} />
              </div> */}
              <h3 className="text-2xl font-bold text-[#0A1F44] mb-4">{item.title}</h3>
              <p className="text-[#2D3748] leading-relaxed">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.2", "end 0.8"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="py-24 bg-mainColour">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Milestones & Evolution
          </h2>
        </motion.div>

        <div className="relative">

          {/* Animated Scroll Line */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-1 bg-primary rounded-full origin-top"
            style={{ height: lineHeight }}
          />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative mb-12 flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } items-center`}
            >
              <div
                className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                  }`}
              >
                <div className="
                  backdrop-blur-xl bg-white p-7 rounded-2xl border border-white/30 
                  shadow-lg hover:shadow-gold transition-all duration-500
                  hover:-translate-y-2 hover:bg-white hover:border-primary group
                ">
                  <div className="text-2xl font-bold text-primary mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1F44] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-black">{item.description}</p>
                </div>
              </div>

              <div className="absolute left-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg -translate-x-1/2" />

              <div className="w-5/12" />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

function BoardOfDirectors() {
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
            Board of Directors
          </h2>
          <p className="text-xl text-[#2D3748]">
            Experienced leaders guiding Telth's vision and growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="h-80 bg-gradient-to-br from-[#D4A554]/20 to-[#B8944A]/20 flex items-center justify-center">
                <UsersIcon className="text-[#D4A554]" size={80} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0A1F44] mb-1">{member.name}</h3>
                <div className="text-[#D4A554] font-semibold mb-3">{member.title}</div>
                <p className="text-[#2D3748] text-sm mb-4">{member.bio}</p>
                <a
                  href={member.linkedin}
                  className="text-[#D4A554] hover:text-[#B8944A] text-sm font-medium inline-flex items-center"
                >
                  LinkedIn Profile →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoreValues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-2 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1F44] mb-4">
            What Drives Us
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* <div className="w-12 h-12 bg-gradient-to-br from-[#D4A554] to-[#B8944A] rounded-lg flex items-center justify-center mb-4">
                <value.icon className="text-white" size={24} />
              </div> */}
              <h3 className="text-xl font-bold text-[#0A1F44] mb-2">{value.title}</h3>
              <p className="text-[#2D3748]">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <PageHero />
      <MissionVision />
      <Timeline />
      <BoardOfDirectors />
      <CoreValues />
    </>
  );
}
