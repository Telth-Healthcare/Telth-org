import { Link } from "react-router-dom";
import heroGif from "../assets/hero-background.gif";
import { Card, CardContent } from "../components/ui/card";
import { useIntersection } from "../hooks/use-intersection";
import { Button } from "./ui/button";

const ecosystemPillars = [
  { number: "01", title: "Quantum AI Smart Clinics", description: "15 minutes of diagnostics = 15 days of lab precision. Revolutionary care delivery at scale." },
  { number: "02", title: "RootCloud™", description: "Blockchain-secured global medical data layer enabling seamless interoperability." },
  { number: "03", title: "IoMT Devices & TWBAN™", description: "Continuous real-time body monitoring through advanced wearable networks." },
  { number: "04", title: "G-Med ID™", description: "Universal digital identity for health records with AI-powered analysis." },
  { number: "05", title: "P3DSC™ Protocol", description: "Platform for Precision, Prevention, Diagnostics, and Smart-Care delivery." },
  { number: "06", title: "Health & Wealth Card™", description: "Subscription-based membership ecosystem for comprehensive care access." },
  { number: "07", title: "Telth Mart & NatLife™", description: "Organic wellness marketplace integrated with IoMT retail solutions." },
];

const marketStats = [
  { value: "$9.7T", label: "Global Healthcare Market" },
  { value: "$650B", label: "AI Healthcare by 2030" },
  { value: "$500B", label: "IoMT & Wearables by 2029" },
  { value: "$1T", label: "Preventive Health by 2035" },
];

const coreValues = [
  { tag: "INNOVATION", title: "Innovation", description: "Pioneering quantum-AI technologies that redefine healthcare possibilities" },
  { tag: "COLLABORATION", title: "Collaboration", description: "Building ecosystems where providers, patients, and technology unite" },
  { tag: "ACCESSIBILITY", title: "Accessibility", description: "Making advanced care available to everyone, everywhere" },
  { tag: "EXCELLENCE", title: "Excellence", description: "Maintaining the highest standards in quality, ethics, and outcomes" },
  { tag: "SUSTAINABILITY", title: "Sustainability", description: "Creating economically, socially, and environmentally sustainable models" },
  { tag: "COMPASSION", title: "Compassion", description: "Putting human wellbeing at the center of every innovation" },
];

const technologies = [
  { category: "BLOCKCHAIN", title: "RootCloud™", description: "Hybrid private-blockchain architecture providing secure, decentralized data interoperability across clinics, labs, wearables, and care platforms.", badge: "Data Security" },
  { category: "AI/ML", title: "P3DSC™ Protocol", description: "AI-enabled protocol stack delivering personalized care flows and clinical decision support.", badge: "Care Protocols" },
  { category: "IoMT", title: "TWBAN™ Network", description: "IoMT real-time monitoring integrating wearables & sensors for comprehensive health tracking.", badge: "FDA Approved" },
  { category: "QUANTUM-AI", title: "Quantum-AI Engine™", description: "15-minute precision diagnostics equivalent to 15 days of lab work.", badge: "Patent Pending" },
  { category: "PLATFORM", title: "G-Med ID™", description: "Universal digital identity system with secure patient data management & consent sharing.", badge: "HIPAA Compliant" },
  { category: "TELEMEDICINE", title: "DigiDoc AI Central", description: "Real-time care collaboration with AI-assisted diagnosis.", badge: "SOC 2 Certified" },
];

const Home = ({ onNavigate }) => {
  const heroRef = useIntersection(0.1);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        ref={heroRef.ref}
        className={`relative min-h-screen flex items-center justify-center pt-20 overflow-hidden fade-in-view ${
          heroRef.isVisible ? "in-view" : ""
        }`}
      >
        {/* GIF Background */}
        <img
          src={heroGif}
          alt="Hero background animation"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-[1000px] mx-auto space-y-8">
            <h1 className="text-white leading-[1.05] tracking-tight">
              REDEFINING
              <br />
              HEALTHCARE
              <br />
              <span className="text-gold">WITH QUANTUM-AI</span>
            </h1>

            <div className="w-20 h-1 bg-primary mx-auto"></div>

            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-normal">
              A global ecosystem transforming care delivery through artificial intelligence, IoMT,
              and preventive medicine
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <Button size="lg" variant="gold" onClick={onNavigate}>
                Explore Ecosystem
              </Button>

              <Button size="lg" variant="outline">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
