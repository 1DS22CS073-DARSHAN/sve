import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Calendar, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Calendar, label: 'Years Experience', value: '15+', color: 'text-blue-600' },
    { icon: Users, label: 'Happy Clients', value: '500+', color: 'text-green-600' },
    { icon: Target, label: 'Projects Completed', value: '1000+', color: 'text-purple-600' },
    { icon: Award, label: 'Quality Standards', value: 'ISO', color: 'text-yellow-600' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
          >
            About <span className="gradient-text">S V Electricals</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            With over 15 years of excellence in industrial engineering, we are your trusted partner 
            for all crane manufacturing, industrial shed construction, and maintenance services.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center mb-16 sm:mb-20 px-4">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Engineering Excellence Since 2008
            </h3>
            <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p>
                S V Electricals and Engineering Works has established itself as a leading 
                manufacturer and service provider in the industrial sector. Our commitment 
                to quality, innovation, and customer satisfaction has made us the preferred 
                choice for businesses across various industries.
              </p>
              <p>
                We specialize in designing and manufacturing all types of industrial cranes 
                including overhead cranes, jib cranes, A-frame cranes, and more. Our expertise 
                extends to industrial shed construction and comprehensive maintenance services.
              </p>
              <p>
                Our team of skilled engineers and technicians ensures that every project 
                meets the highest standards of safety, efficiency, and durability. We use 
                cutting-edge technology and premium materials to deliver solutions that 
                exceed expectations.
              </p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {['Quality Assurance', 'Expert Team', '24/7 Support', 'Custom Solutions'].map((feature, index) => (
                <motion.span
                  key={feature}
                  className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                >
                  {feature}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden"
          >
            <div className="relative bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-8" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-8" />
              
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
                <p className="text-white/90 leading-relaxed mb-6">
                  To provide innovative, reliable, and cost-effective engineering solutions 
                  that enhance industrial productivity while maintaining the highest safety standards.
                </p>
                
                <h4 className="text-2xl font-bold mb-4">Our Vision</h4>
                <p className="text-white/90 leading-relaxed">
                  To be the most trusted name in industrial crane manufacturing and 
                  engineering services, setting new benchmarks for quality and innovation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <div className="relative mb-4 inline-block">
                <stat.icon className={`h-12 w-12 ${stat.color} mx-auto`} />
                <motion.div
                  className={`absolute inset-0 ${stat.color.replace('text-', 'bg-')} rounded-full opacity-20 group-hover:opacity-30 transition-opacity`}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                />
              </div>
              <motion.div
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;