import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  const courses = [
    { name: 'Car Training', path: '/courses' },
    { name: 'Truck Training', path: '/courses' },
    { name: 'Simulator Training', path: '/simulator' },
    { name: 'On-Road Training', path: '/on-road' },
    { name: 'Advanced Driving', path: '/courses' },
  ];

  return (
    <footer className="bg-navy text-silver">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display text-3xl font-bold">M</span>
              </div>
              <div>
                <h3 className="text-primary-foreground font-display text-xl tracking-wide">
                  MASTER MOTOR
                </h3>
                <p className="text-steel text-xs uppercase tracking-widest">
                  Training College
                </p>
              </div>
            </Link>
            <p className="text-steel mb-6 leading-relaxed">
              Lucknow's oldest and most trusted driving school, shaping confident drivers since 1965.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/MasterMotorTrainingCollege"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-charcoal flex items-center justify-center text-steel hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-charcoal flex items-center justify-center text-steel hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-charcoal flex items-center justify-center text-steel hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-foreground font-display text-xl mb-6 tracking-wide">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-steel hover:text-primary-foreground transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-accent" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-primary-foreground font-display text-xl mb-6 tracking-wide">
              OUR COURSES
            </h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.name}>
                  <Link
                    to={course.path}
                    className="text-steel hover:text-primary-foreground transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-accent" />
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-primary-foreground font-display text-xl mb-6 tracking-wide">
              CONTACT US
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-steel">
                  Guru Teg Bahadur Plaza 1, Station Road, Husainganj Crossing, Near Hotel Mera Mann, Lucknow, UP 226001
                </span>
              </li>
              <li>
                <a href="tel:+918090528020" className="flex items-center gap-3 text-steel hover:text-primary-foreground transition-colors duration-200">
                  <Phone className="w-5 h-5 text-accent" />
                  +91 80905 28020
                </a>
              </li>
              <li>
                <a href="mailto:info@mastermotortraining.com" className="flex items-center gap-3 text-steel hover:text-primary-foreground transition-colors duration-200">
                  <Mail className="w-5 h-5 text-accent" />
                  info@mastermotortraining.com
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-steel">
                  Mon - Sat: 8:00 AM - 7:00 PM<br />
                  Sunday: 9:00 AM - 5:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-steel text-sm text-center md:text-left">
              © {currentYear} Master Motor Training College. All Rights Reserved. Est. 1965
            </p>
            <div className="flex items-center gap-6">
              <Link to="/faq" className="text-steel hover:text-primary-foreground text-sm transition-colors duration-200">
                FAQ
              </Link>
              <span className="text-charcoal">|</span>
              <Link to="/contact" className="text-steel hover:text-primary-foreground text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/918090528020?text=Inquiry%20about%20driving%20courses"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] flex items-center justify-center text-white shadow-hover hover:scale-110 transition-transform duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>
    </footer>
  );
};

export default Footer;
