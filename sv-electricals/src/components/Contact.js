import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom Marker Icon
let DefaultIcon = L.divIcon({
  className: 'custom-div-icon',
  html: `<div style="background-color: #3b82f6; width: 25px; height: 25px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"></div>`,
  iconSize: [25, 25],
  iconAnchor: [12, 12]
});
L.Marker.prototype.options.icon = DefaultIcon;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const companyLocation = [13.011606, 77.491790];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 83108 81293'],
      linkPrefix: 'tel:',
      color: 'text-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['shankarsvelectricals.engworks@gmail.com'],
      linkPrefix: 'mailto:',
      color: 'text-green-600'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['13th Cross, Andrahalli Main Road, Near Jodi Muneshwara Temple', 'Peenya 2nd Stage, Bengaluru 560091'],
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'],
      color: 'text-orange-600'
    }
  ];

  const services = [
    'Industrial Cranes',
    'Industrial Sheds',
    'Maintenance Services',
    'Custom Solutions',
    'Other'
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Phone number should be 10 digits';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    const payload = {
      access_key: '49092fb3-dcf1-4a33-80ee-440e8d1d3ddf',
      subject: 'New Contact Form Submission',
      from_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In <span className="gradient-text">Touch</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Ready to start your next project? Contact us today for a free consultation.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Message Sent Successfully!</h4>
                <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                <button onClick={() => setIsSubmitted(false)} className="mt-4 text-blue-600 font-semibold">Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Full Name *" className={`w-full border px-4 py-3 rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300'}`} />
                {errors.name && <p className="text-sm text-red-600 flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{errors.name}</p>}
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number *" className={`w-full border px-4 py-3 rounded-lg ${errors.phone ? 'border-red-500' : 'border-gray-300'}`} />
                {errors.phone && <p className="text-sm text-red-600 flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{errors.phone}</p>}
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address *" className={`w-full border px-4 py-3 rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
                {errors.email && <p className="text-sm text-red-600 flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{errors.email}</p>}
                <select name="service" value={formData.service} onChange={handleInputChange} className={`w-full border px-4 py-3 rounded-lg ${errors.service ? 'border-red-500' : 'border-gray-300'}`}>
                  <option value="">Select a service</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.service && <p className="text-sm text-red-600 flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{errors.service}</p>}
                <textarea name="message" rows="4" value={formData.message} onChange={handleInputChange} placeholder="Message *" className={`w-full border px-4 py-3 rounded-lg resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}></textarea>
                {errors.message && <p className="text-sm text-red-600 flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{errors.message}</p>}
                <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div key={info.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.6 }} className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gray-100 ${info.color}`}><info.icon className="h-6 w-6" /></div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">
                          {info.linkPrefix ? <a href={`${info.linkPrefix}${detail}`} className="hover:underline">{detail}</a> : detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Our Location</h3>
              <div className="h-64 rounded-lg overflow-hidden">
                <MapContainer center={companyLocation} zoom={14} style={{ height: '100%', width: '100%' }}>
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' />
                  <Marker position={companyLocation}>
                    <Popup>
                      <div className="text-center">
                        <strong>S V Electricals and Engineering Works</strong><br />Industrial Area, Sector 15<br />Peenya 2nd Stage, Bengaluru - 560091
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
