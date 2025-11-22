import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const offices = [
  {
    id: 1,
    country: '🇺🇸 USA',
    city: 'Rockville, Maryland',
    name: 'Telth Holdings Inc',
    address: '909 Rose Ave, Suite 400-500, Rockville, MD 20852',
    function: 'Global HQ, Finance & Technology',
    coordinates: [39.084, -77.1528] as [number, number],
  },
  {
    id: 2,
    country: '🇬🇧 UK',
    city: 'Slough',
    name: 'Telth Healthcare Pvt Ltd (UK)',
    address: 'Botanica, Ditton Park, Riding Ct Rd, Slough SL3 9LL',
    function: 'R&D, AI Hubs, KTP Collaborations',
    coordinates: [51.5074, -0.593] as [number, number],
  },
  {
    id: 3,
    country: '🇮🇳 India',
    city: 'New Delhi',
    name: 'Telth Healthcare Pvt Ltd (India)',
    address: '3rd Floor, Vardhaman Trade Center, Nehru Place, New Delhi-110019',
    function: 'Manufacturing, Operations & Franchise Network',
    coordinates: [28.6139, 77.209] as [number, number],
  },
  {
    id: 4,
    country: '🇮🇳 India',
    city: 'Chennai',
    name: 'IIT Madras Research Park',
    address: '32, Kanagam Road, Tharamani, Chennai-600113',
    function: 'Innovation Hub & R&D',
    coordinates: [12.9716, 80.2595] as [number, number],
  },
  {
    id: 5,
    country: '🇮🇳 India',
    city: 'Dharmapuri',
    name: 'SIPCOT',
    address: 'Dharmapuri, Tamil Nadu',
    function: 'Bio-Pharmaceutical & MedTech Manufacturing',
    coordinates: [12.1357, 78.1582] as [number, number],
  },
  {
    id: 6,
    country: '🇱🇨 St. Lucia',
    city: 'Gros Islet',
    name: 'CUCOM Medical University',
    address: '#1, Beausejour Road, Gros Islet',
    function: 'Training & Education',
    coordinates: [14.0101, -60.9875] as [number, number],
  },
  {
    id: 7,
    country: '🇨🇳 China',
    city: 'Shanghai',
    name: 'Asia-Pacific Hub',
    address: 'Shanghai',
    function: 'Manufacturing & Distribution',
    coordinates: [31.2304, 121.4737] as [number, number],
    badge: 'Expanding 2026',
  },
  {
    id: 8,
    country: '🌏 Middle East',
    city: 'Dubai, UAE',
    name: 'MENA Regional Hub',
    address: 'Dubai, UAE',
    function: 'Healthcare Networks & Partnerships',
    coordinates: [25.2048, 55.2708] as [number, number],
    badge: 'Launching 2026',
  },
];

const goldIcon = new Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#D4A554" stroke="white" stroke-width="3"/>
      <circle cx="16" cy="16" r="6" fill="white"/>
    </svg>
  `),
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export default function WorldMap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-white ">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1F44] mb-4">
            Our Worldwide Presence
          </h2>
          <p className="text-xl text-[#2D3748] max-w-3xl mx-auto">
            Operating across continents with strategic hubs for innovation,
            manufacturing, and care delivery
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden relative z-[0]"
          style={{ height: '600px' }}
        >
          <MapContainer
            center={[20, 0]}
            zoom={2}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {offices.map((office) => (
              <Marker
                key={office.id}
                position={office.coordinates}
                icon={goldIcon}
                eventHandlers={{
                  mouseover: (e) => e.target.openPopup(),
                  mouseout: (e) => e.target.closePopup(),
                }}
              >
                <Popup>
                  <div className="p-2 min-w-[250px]">
                    <div className="font-bold text-[#0A1F44] mb-1">
                      {office.country} - {office.city}
                    </div>
                    <div className="text-sm font-semibold text-[#D4A554] mb-2">
                      {office.name}
                    </div>
                    <div className="text-xs text-gray-600 mb-1">
                      {office.address}
                    </div>
                    <div className="text-xs text-gray-700 mt-2">
                      <strong>Function:</strong> {office.function}
                    </div>
                    {office.badge && (
                      <div className="mt-2">
                        <span className="inline-block bg-[#0891B2] text-white text-xs px-2 py-1 rounded-full">
                          {office.badge}
                        </span>
                      </div>
                    )}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-center text-sm text-[#2D3748]"
        >
          <p>Click on the markers to view office details</p>
        </motion.div>
      </div>
    </section>
  );
}
