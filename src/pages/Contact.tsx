import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Name: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0ACourse: ${formData.course}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/918090528020?text=${whatsappMessage}`, '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-navy">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-bold uppercase tracking-widest mb-6">
              Get in Touch
            </span>
            <h1 className="heading-hero text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-silver leading-relaxed">
              Ready to start your driving journey? Reach out to us for inquiries, bookings, or any questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection direction="left">
              <div className="card-sharp bg-card p-8">
                <h2 className="heading-card text-foreground mb-6">Send an Inquiry</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-input focus:border-accent focus:outline-none transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-input focus:border-accent focus:outline-none transition-colors duration-200"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-input focus:border-accent focus:outline-none transition-colors duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-foreground mb-2">
                      Course Interest
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-input focus:border-accent focus:outline-none transition-colors duration-200"
                    >
                      <option value="">Select a course</option>
                      <option value="Basic Car Training">Basic Car Training (₹4,000)</option>
                      <option value="Truck Training">Truck Training (₹4,000)</option>
                      <option value="Simulator Training">Simulator Training (₹2,000)</option>
                      <option value="Advanced Driving">Advanced Driving (₹3,000)</option>
                      <option value="Complete Package">Complete Package (₹8,000)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-background border border-input focus:border-accent focus:outline-none transition-colors duration-200 resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-accent text-accent-foreground font-bold uppercase tracking-wider hover:bg-crimson-dark transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Inquiry via WhatsApp
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info & Map */}
            <AnimatedSection direction="right">
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="card-sharp bg-card p-8">
                  <h3 className="heading-card text-foreground mb-6">Contact Details</h3>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Address</h4>
                        <p className="text-muted-foreground">
                          Guru Teg Bahadur Plaza 1, Station Road, Husainganj Crossing, Near Hotel Mera Mann, Lucknow, Uttar Pradesh 226001
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                        <a href="tel:+918090528020" className="text-accent hover:underline text-lg">
                          +91 80905 28020
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Email</h4>
                        <a href="mailto:info@mastermotortraining.com" className="text-accent hover:underline">
                          info@mastermotortraining.com
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Working Hours</h4>
                        <p className="text-muted-foreground">
                          Monday - Saturday: 8:00 AM - 7:00 PM<br />
                          Sunday: 9:00 AM - 5:00 PM
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <a
                      href="tel:+918090528020"
                      className="flex-1 py-3 bg-primary text-primary-foreground text-center font-semibold uppercase tracking-wider hover:bg-navy-light transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      Call Now
                    </a>
                    <a
                      href="https://wa.me/918090528020"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 bg-accent text-accent-foreground text-center font-semibold uppercase tracking-wider hover:bg-crimson-dark transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </a>
                  </div>
                </div>

                {/* Map */}
                <div className="card-sharp overflow-hidden h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d377.61179573281913!2d80.93467554276614!3d26.839285455675483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfdac4cd619cf%3A0x8a1010769d8d7c9e!2sMaster%20Motor%20Training%20College!5e1!3m2!1sen!2sin!4v1769064596627!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Master Motor Training College Location"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Popular Times */}
      <section className="py-12 bg-muted">
        <div className="container">
          <SectionHeading
            title="Popular Times"
            subtitle="Best times to visit for shorter wait times"
          />

          <AnimatedSection direction="up">
            <div className="card-sharp bg-card p-8 max-w-3xl mx-auto">
              <div className="space-y-4">
                {['8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM'].map((time, index) => {
                  const heights = [40, 65, 30, 55, 80, 70];
                  return (
                    <div key={time} className="flex items-center gap-4">
                      <span className="w-16 text-sm text-muted-foreground">{time}</span>
                      <div className="flex-1 h-6 bg-muted relative overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${heights[index]}%` }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-full ${heights[index] > 60 ? 'bg-accent' : 'bg-primary'}`}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-24">
                        {heights[index] > 60 ? 'Usually busy' : heights[index] > 40 ? 'Moderate' : 'Usually calm'}
                      </span>
                    </div>
                  );
                })}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6">
                * Usually not too busy at 12 PM - Best time to visit
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
