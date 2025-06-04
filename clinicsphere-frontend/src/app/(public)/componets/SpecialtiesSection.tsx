import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaRegStar, FaHeart, FaRegHeart, FaClock, FaUserMd, FaArrowRight } from 'react-icons/fa';

const SpecialtiesSection = () => {
  const [favorites, setFavorites] = useState<any>({});
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const specialties = [
    {
      id: 1,
      title: "Cardiology",
      description: "Expert care for your heart health with advanced diagnostic tools.",
      rating: 4.8,
      reviews: 124,
      duration: "30 min",
      price: "$120",
      icon: <FaHeart className="text-red-500" />,
    },
    {
      id: 2,
      title: "Neurology",
      description: "Specialized treatment for neurological disorders and brain health.",
      rating: 4.7,
      reviews: 98,
      duration: "45 min",
      price: "$150",
      icon: <FaUserMd className="text-blue-500" />,
    },
    {
      id: 3,
      title: "Pediatrics",
      description: "Compassionate care for children of all ages from birth through adolescence.",
      rating: 4.9,
      reviews: 210,
      duration: "25 min",
      price: "$90",
      icon: <FaUserMd className="text-green-500" />,
    },
    {
      id: 4,
      title: "Orthopedics",
      description: "Comprehensive bone and joint care with surgical and non-surgical options.",
      rating: 4.6,
      reviews: 87,
      duration: "40 min",
      price: "$140",
      icon: <FaUserMd className="text-purple-500" />,
    },
    {
      id: 5,
      title: "Dermatology",
      description: "Skin care solutions for all conditions from acne to skin cancer.",
      rating: 4.5,
      reviews: 143,
      duration: "20 min",
      price: "$110",
      icon: <FaUserMd className="text-amber-500" />,
    },
    {
      id: 6,
      title: "Gastroenterology",
      description: "Expert digestive system care with advanced endoscopic procedures.",
      rating: 4.7,
      reviews: 76,
      duration: "35 min",
      price: "$130",
      icon: <FaUserMd className="text-teal-500" />,
    },
  ];

  const toggleFavorite = (id:any) => {
    setFavorites((prev: { [x: string]: any; }) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const renderStars = (rating:any) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaRegStar key="half" className="text-yellow-400" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-200/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-indigo-200/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Top Specialties
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Expert care in various medical fields with top-rated specialists
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty:any) => (
            <motion.div
              key={specialty.id}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden border border-white/50 transition-all duration-300 ${
                hoveredCard === specialty.id ? 'shadow-2xl scale-[1.02] border-blue-200' : ''
              }`}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredCard(specialty.id)}
              onHoverEnd={() => setHoveredCard(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-6 flex justify-between items-start">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <span className="text-2xl">{specialty.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{specialty.title}</h3>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {renderStars(specialty.rating)}
                      </div>
                      <span className="text-gray-500 ml-2 text-sm">
                        {specialty.rating} ({specialty.reviews})
                      </span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => toggleFavorite(specialty.id)}
                  className="text-pink-500 hover:text-pink-600 transition-colors"
                >
                  {favorites[specialty.id] ? (
                    <FaHeart className="text-xl" />
                  ) : (
                    <FaRegHeart className="text-xl" />
                  )}
                </button>
              </div>
              <div className="px-6 pb-4">
                <p className="text-gray-600 mb-4">{specialty.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-gray-500">
                    <FaClock className="mr-2" />
                    <span>{specialty.duration}</span>
                  </div>
                  <div className="text-lg font-bold text-blue-600">{specialty.price}</div>
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="flex justify-between items-center">
                  <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center">
                    Book Now
                    <FaArrowRight className="ml-2 text-sm" />
                  </button>
                  
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((item) => (
                      <div 
                        key={item}
                        className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white shadow-sm overflow-hidden"
                      >
                        <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                          <FaUserMd className="text-gray-500" />
                        </div>
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-600">
                      +5
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/10"></div>
          
          <h3 className="text-3xl font-bold text-white mb-4">Can't find your specialty?</h3>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            We have over 50 medical specialties available. Contact us and we'll help you find the right specialist.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-all duration-300">
              View All Specialties
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;