import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import telthLogo from '../components/SVG/logobg.png';

export default function Footer() {
  return (
    <footer className="bg-mainColour text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={telthLogo} alt="telthLogo" className="w-auto h-16" />
              <span className="text-xl font-semibold">Telth</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pioneering the world's first Quantum-AI Healthcare Ecosystem.
              Delivering precision, affordability, and accessibility across
              borders through intelligent systems that unite data, diagnostics,
              and decision-making.
            </p>
          </div>

          {/* Company Links */}
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

          {/* Social Links (replaces Resources) */}
          <div>
            <h3 className="text-primary font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/company/telth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/CareTelth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-5 h-5" />
                  Twitter
                </a>
              </li>
              {/* <li>
                <a
                  href="https://facebook.com/telth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5" />
                  Facebook
                </a>
              </li> */}
              <li>
                <a
                  href="https://www.instagram.com/telth_care/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@Telthcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
                  aria-label="YouTube"
                >
                  <FaYoutube className="w-5 h-5" />
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-primary font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Compliance
                </a>
              </li>
            </ul>
          </div> */}
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