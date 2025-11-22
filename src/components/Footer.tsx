import { Link } from 'react-router-dom';
import telthLogo from '../components/SVG/logobg.png'

export default function Footer() {
  return (
    <footer className="bg-mainColour text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={telthLogo} alt='telthLogo' className='w-auto h-16'/>
              <span className="text-xl font-semibold">Telth.org</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pioneering the world's first Quantum-AI Healthcare Ecosystem.
              Delivering precision, affordability, and accessibility across
              borders through intelligent systems that unite data, diagnostics,
              and decision-making.
            </p>
          </div>

          <div>
            <h3 className="text-primary font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/network"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Our Network
                </Link>
              </li>
              <li>
                <Link
                  to="/technology"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  to="/investors"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Investors
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#E8C47C] font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-[#D4A554] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Franchise Info
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-[#D4A554] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-[#D4A554] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  News & Blog
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-[#D4A554] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#E8C47C] font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4A554] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4A554] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4A554] transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4A554] transition-colors"
                >
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>
            © 2025 Telth Holdings Inc. All rights reserved. | Delaware, USA
          </p>
        </div>
      </div>
    </footer>
  );
}
