import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Investors() {
  return (
<div className="min-h-screen pt-20 overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F44] via-[#1A3A5F] to-[#0A1F44]" />

      {/* Light grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212,165,84,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212,165,84,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Foreground content */}
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl w-full"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-[#D4A554]/30 shadow-2xl">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-8"
            >
              <div className="inline-block px-6 py-2 bg-[#D4A554]/20 border border-[#D4A554] rounded-full mb-6">
                <span className="text-[#E8C47C] font-semibold text-sm">
                  INVESTOR RELATIONS
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
                Coming Soon
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Detailed investor information, financial reports, and partnership
                opportunities will be available here shortly.
              </p>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-[#D4A554]/20 to-[#B8944A]/10 rounded-2xl p-8 mb-8 border border-[#D4A554]/30"
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                Interested in Investment Opportunities?
              </h2>

              <p className="text-gray-300 mb-6">
                Contact our investor relations team:
              </p>

              <a
                href="mailto:invest@telth.org"
                className="inline-flex items-center space-x-2 text-[#E8C47C] hover:text-[#D4A554] text-lg font-semibold transition-colors"
              >
                <Mail size={24} />
                <span>invest@telth.org</span>
              </a>
            </motion.div>

            {/* Preview Box */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mb-8"
            >
              <div className="bg-white/5 rounded-xl p-6 border border-[#D4A554]/20">
                <p className="text-gray-400 text-sm mb-2">Preview</p>

                <p className="text-white font-semibold">
                  Series A Valuation ≈ USD 246 Million
                </p>
                <p className="text-white font-semibold">
                  Funding Target: USD 120 Million
                </p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center space-x-2 bg-gradient-to-r from-[#D4A554] to-[#B8944A] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-[#D4A554]/40 transition-all duration-300 transform hover:scale-105"
              >
                <span>Get In Touch</span>
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
