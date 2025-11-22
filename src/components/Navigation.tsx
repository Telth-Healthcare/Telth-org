import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import telthLogo from '../components/SVG/logobg.png'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Network', path: '/network' },
    { name: 'Technology', path: '/technology' },
    { name: 'Investors', path: '/investors' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-mainColour backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <img src={telthLogo} alt='telthLogo' className='w-auto h-16'/>
            <span className="text-white font-semibold text-xl tracking-wide">
              Telth.org
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-white hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg hover:shadow-[#D4A554]/30 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0A1F44]/95 backdrop-blur-lg">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-[#D4A554]/20 text-[#D4A554]'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-gradient-to-r from-[#D4A554] to-[#B8944A] text-white py-3 px-4 rounded-lg font-medium text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
