import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaStethoscope, FaHeartbeat, FaUserMd, FaAmbulance, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-blue-900 to-indigo-900 text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/5 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-700/20 blur-3xl"></div>
      <div className="absolute -bottom-60 -left-60 w-96 h-96 rounded-full bg-indigo-700/20 blur-3xl"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-white p-2 rounded-lg mr-3">
                <FaUserMd className="text-3xl text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent">
                ClinicSphere
              </h2>
            </div>
            
            <p className="text-blue-100 mb-6">
              Providing compassionate, world-class healthcare for our community since 2005. Our patient-centered approach ensures the best possible outcomes.
            </p>
            
            <div className="flex space-x-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition-colors"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="text-blue-200" />
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 border-l-4 border-teal-400 pl-3">Quick Links</h3>
            
            <ul className="space-y-3">
              {[
                { text: 'Find a Doctor', icon: <FaUserMd /> },
                { text: 'Services & Specialties', icon: <FaStethoscope /> },
                { text: 'Patient Resources', icon: <FaHeartbeat /> },
                { text: 'Health Checkups', icon: <FaHeartbeat /> },
                { text: 'Emergency Services', icon: <FaAmbulance /> },
                { text: 'Online Bill Pay', icon: <FaHeartbeat /> },
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href="#" className="flex items-center text-blue-100 hover:text-white transition-colors">
                    <span className="text-teal-400 mr-2">{item.icon}</span>
                    {item.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 border-l-4 border-teal-400 pl-3">Medical Departments</h3>
            
            <div className="grid grid-cols-2 gap-3">
              {[
                'Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics',
                'Dermatology', 'Oncology', 'Gastroenterology', 'Ophthalmology',
                'Endocrinology', 'Pulmonology', 'Urology', 'Rheumatology'
              ].map((dept, index) => (
                <motion.div
                  key={index}
                  whileHover={{ backgroundColor: 'rgba(14, 165, 233, 0.2)' }}
                  className="bg-blue-800/30 hover:bg-blue-700/30 rounded-lg transition-colors"
                >
                  <a href="#" className="block p-2 text-sm text-blue-100 hover:text-white">
                    {dept}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 border-l-4 border-teal-400 pl-3">Contact Us</h3>
            
            <ul className="space-y-4 mb-8">
              {[
                { icon: <FaMapMarkerAlt />, text: '123 Medical Drive, Health City, HC 12345' },
                { icon: <FaPhone />, text: '(123) 456-7890' },
                { icon: <FaEnvelope />, text: 'info@clinicsphere.com' },
                { icon: <FaClock />, text: '24/7 Emergency Services Available' },
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-teal-400 mt-1 mr-3">{item.icon}</span>
                  <span className="text-blue-100">{item.text}</span>
                </li>
              ))}
            </ul>
            
            <div>
              <h4 className="text-lg font-semibold mb-3">Subscribe to Our Newsletter</h4>
              <p className="text-blue-100 mb-4">
                Get health tips, news, and updates delivered to your inbox.
              </p>
              
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-l-lg w-full bg-blue-800/50 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-teal-500 to-emerald-600 px-5 rounded-r-lg font-medium"
                >
                  <FaArrowRight />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-800 pt-10 pb-8">
          <h3 className="text-lg font-bold text-center mb-6">Recognized for Excellence</h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[1, 2, 3, 4, 5].map((item) => (
              <motion.div
                key={item}
                className="bg-blue-800/30 p-4 rounded-lg flex items-center"
                whileHover={{ y: -5 }}
              >
                <div className="bg-gradient-to-br from-teal-400 to-emerald-500 w-12 h-12 rounded-full flex items-center justify-center mr-3">
                  <FaHeartbeat className="text-xl text-white" />
                </div>
                <div>
                  <div className="font-bold">Healthcare Excellence</div>
                  <div className="text-sm text-blue-200">Award {item}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-blue-800/50 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-300 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} ClinicSphere. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {['Privacy Policy', 'Terms of Use', 'Accessibility', 'Sitemap', 'Careers'].map((item, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-blue-300 hover:text-white text-sm transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            
            <div className="mt-4 md:mt-0">
              <div className="flex items-center bg-blue-800/50 px-4 py-2 rounded-full">
                <div className="w-3 h-3 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                <span className="text-sm text-blue-200">24/7 Emergency: (123) 456-7890</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="fixed right-6 bottom-6 z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.a
          href="/appointment"
          className="flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full shadow-xl font-bold"
          whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(239, 68, 68, 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          <FaPhone className="mr-2" />
          Emergency Contact
        </motion.a>
      </motion.div>
    </footer>
  );
};

export default Footer;