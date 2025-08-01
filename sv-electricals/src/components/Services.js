import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Building2, Settings, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Truck,
      title: 'Industrial Cranes',
      subtitle: 'Manufacturing & Installation',
      description: 'Complete range of industrial cranes designed for heavy-duty operations and optimal performance.',
      features: [
        'Overhead Cranes',
        'Jib Cranes',
        'A-Frame Cranes',
        'Gantry Cranes',
        'Custom Designs'
      ],
      color: 'blue',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      id: 2,
      icon: Building2,
      title: 'Industrial Sheds',
      subtitle: 'Construction & Design',
      description: 'Robust industrial shed construction with modern engineering techniques and quality materials.',
      features: [
        'Pre-Engineered Buildings',
        'Warehouse Construction',
        'Factory Sheds',
        'Storage Facilities',
        'Steel Structures'
      ],
      color: 'green',
      gradient: 'from-green-500 to-green-700'
    },
    {
      id: 3,
      icon: Settings,
      title: 'Maintenance Services',
      subtitle: 'Support & Repair',
      description: 'Comprehensive maintenance and repair services to ensure optimal performance and longevity.',
      features: [
        'Preventive Maintenance',
        'Emergency Repairs',
        'Parts Replacement',
        'Performance Upgrades',
        '24/7 Support'
      ],
      color: 'purple',
      gradient: 'from-purple-500 to-purple-700'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive industrial solutions from design to maintenance, 
            ensuring your operations run smoothly and efficiently.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative p-6 sm:p-8">
                {/* Icon */}
                <div className="relative mb-4 sm:mb-6">
                  <div className={`inline-flex p-3 sm:p-4 rounded-2xl bg-${service.color}-100 text-${service.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <motion.div
                    className={`absolute inset-0 bg-${service.color}-600 rounded-2xl opacity-20`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  />
                </div>

                {/* Content */}
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                      {service.title}
                    </h3>
                    <p className={`text-sm font-medium text-${service.color}-600`}>
                      {service.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * featureIndex, duration: 0.4 }}
                      className="flex items-center space-x-2 sm:space-x-3"
                    >
                      <CheckCircle className={`h-4 w-4 sm:h-5 sm:w-5 text-${service.color}-600 flex-shrink-0`} />
                      <span className="text-gray-700 text-xs sm:text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group/btn w-full bg-gradient-to-r ${service.gradient} text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-200 text-sm sm:text-base`}
                >
                  <a href='#contact'>
                    <span>Contact Us</span>
                  </a>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-10 translate-x-5" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/10 to-transparent rounded-full translate-y-8 -translate-x-5" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 sm:mt-16 text-center px-4"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-white/90 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Every industry has unique requirements. Our expert team can design and 
              implement custom solutions tailored to your specific needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base"
            >
              Get Custom Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;