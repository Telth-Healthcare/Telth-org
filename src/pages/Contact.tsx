import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Briefcase, Users, Handshake, Newspaper } from 'lucide-react';

const offices = [
  {
    flag: '🇺🇸',
    name: 'USA Headquarters',
    company: 'Telth Holdings Inc',
    address: 'Suite 400, 909 Rose Ave\nRockville, Maryland 20852, USA',
    email: 'info@telth.org',
    phone: '+1 (234) 564-4564',
  },
  {
    flag: '🇬🇧',
    name: 'United Kingdom',
    company: 'Telth Healthcare Pvt Ltd (UK)',
    address: 'Suite 14, Ditton Park\nBotanica, Riding Ct Rd\nSlough - SL3 9LL, UK',
    email: 'info@telth.org',
    phone: '+44 7554 469843',
  },
  {
    flag: '🇮🇳',
    name: 'India - New Delhi',
    company: 'Telth Healthcare Pvt Ltd (India)',
    address: 'The Chambers Vardhaman Trade Center\n3rd Floor, Nehru Place\nNew Delhi 110019, India',
    email: 'info@telth.org',
    phone: '1800-570-0140',
  },
  {
    flag: '🇮🇳',
    name: 'India - Dharmapuri',
    company: 'SIPCOT Manufacturing Hub',
    address: 'Bio-Pharmaceutical & MedTech\nDharmapuri, Tamil Nadu',
    email: 'info@telth.org',
  },
  {
    flag: '🇮🇳',
    country: 'India - Salem',
    name: 'GCC Tidel Neo',
    address: 'P36Q+8W7, Kullagoundanoor, Karuppur, Salem, Tamil Nadu',
    // phone: '+91 79048 77505',
  },
  {
    flag: '🇱🇨',
    name: 'St. Lucia',
    company: 'CUCOM Medical University',
    address: '#1, Beausejour Road\nGros Islet, Saint Lucia',
    email: 'info@telth.org',
  },
  {
    flag: '🇨🇳',
    name: 'China',
    company: 'Asia-Pacific Hub',
    address: 'Shanghai & Guangzhou\nFocus: Manufacturing & Distribution',
    email: 'info@telth.org',
    badge: 'Expanding 2026',
  },
  {
    flag: '🌏',
    name: 'Middle East',
    company: 'MENA Regional Hub',
    address: 'Dubai, UAE & Riyadh, KSA\nFocus: Healthcare Networks & Partnerships',
    email: 'info@telth.org',
    badge: 'Launching 2026',
  },
];

const keyContacts = [
  { icon: Briefcase, title: 'General Inquiries', email: 'info@telth.org' },
  { icon: Users, title: 'Investor Relations', email: 'invest@telth.org' },
  { icon: Handshake, title: 'Partnerships', email: 'partnerships@telth.org' },
  { icon: Newspaper, title: 'Media & Press', email: 'press@telth.org' },
];

function PageHero() {
  return (
    <div className="relative pt-32 pb-16 bg-gradient-to-br from-[#0A1F44] to-[#1A3A5F]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300">Let's transform healthcare together</p>
        </motion.div>
      </div>
    </div>
  );
}

function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    inquiryType: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    fd.append("first_name", formData.name);
    fd.append("email", formData.email);
    fd.append("phone", formData.phone);
    fd.append("message", formData.message);
    fd.append("organization", formData.organization);
    fd.append("inquiryType", formData.inquiryType);
    fd.append("subject", "New Contact Form Submission");
    fd.append("botcheck", "");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: fd,
    });

    const data = await response.json();

    if (data.success) {
      alert("Message sent successfully!");
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        inquiryType: '',
        message: '',
      });
    } else {
      alert(data.message || "Something went wrong. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#0A1F44] mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#2D3748] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A554] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2D3748] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A554] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2D3748] mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A554] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2D3748] mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A554] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2D3748] mb-2">
                  Inquiry Type *
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A554] focus:border-transparent transition-all"
                >
                  <option value="">Select an option</option>
                  <option value="investor">Investor Relations</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="franchise">Franchise Inquiry</option>
                  <option value="media">Media & Press</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2D3748] mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4A554] focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#D4A554] to-[#B8944A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-[#D4A554]/30 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#0A1F44] mb-6">Our Offices</h2>
            <div className="space-y-4 max-h-[700px] overflow-y-auto pr-2">
              {offices.map((office, index) => (
                <div
                  key={index}
                  className="bg-[#FFF8F0] rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{office.flag}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0A1F44] mb-1">{office.country}</h3>
                      <p className="text-sm font-semibold text-[#D4A554] mb-2">{office.name}</p>
                      <div className="space-y-2 text-sm text-[#2D3748]">
                        <div className="flex items-start space-x-2">
                          <MapPin size={16} className="text-[#D4A554] mt-0.5 flex-shrink-0" />
                          <p className="whitespace-pre-line">{office.address}</p>
                        </div>
                        {office.email && (
                          <div className="flex items-center space-x-2">
                            <Mail size={16} className="text-[#D4A554] flex-shrink-0" />
                            <a
                              href={`mailto:${office.email}`}
                              className="text-[#D4A554] hover:underline"
                            >
                              {office.email}
                            </a>
                          </div>
                        )}
                        {office.phone && (
                          <div className="flex items-center space-x-2">
                            <Phone size={16} className="text-[#D4A554] flex-shrink-0" />
                            <a
                              href={`tel:${office.phone}`}
                              className="text-[#D4A554] hover:underline"
                            >
                              {office.phone}
                            </a>
                          </div>
                        )}
                        {office.badge && (
                          <span className="inline-block bg-[#0891B2] text-white text-xs px-3 py-1 rounded-full mt-2">
                            {office.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function KeyContacts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#0A1F44] mb-4">Key Contacts</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyContacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#D4A554] to-[#B8944A] rounded-full flex items-center justify-center mx-auto mb-4">
                <contact.icon className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-[#0A1F44] mb-3">{contact.title}</h3>
              <a
                href={`mailto:${contact.email}`}
                className="text-[#D4A554] hover:text-[#B8944A] font-medium text-sm transition-colors"
              >
                {contact.email}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <>
      <PageHero />
      <ContactForm />
      <KeyContacts />
    </>
  );
}
