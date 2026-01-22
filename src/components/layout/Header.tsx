import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle, ChevronDown } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { 
    name: 'Training', 
    path: '/courses',
    submenu: [
      { name: 'All Courses', path: '/courses' },
      { name: 'Simulator Training', path: '/simulator' },
      { name: 'On-Road Training', path: '/on-road' },
    ]
  },
  { name: 'Instructors', path: '/instructors' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
  { name: 'FAQ', path: '/faq' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-navy shadow-hover py-2' 
          : 'bg-navy/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-accent flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <span className="text-accent-foreground font-display text-2xl font-bold">M</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-primary-foreground font-display text-lg leading-tight tracking-wide">
                MASTER MOTOR
              </h1>
              <p className="text-silver text-xs uppercase tracking-widest">
                Training College
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors duration-200 flex items-center gap-1 ${
                    location.pathname === item.path
                      ? 'text-accent'
                      : 'text-silver hover:text-primary-foreground'
                  }`}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="w-3 h-3" />}
                </Link>
                
                {/* Submenu */}
                <AnimatePresence>
                  {item.submenu && activeSubmenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 bg-charcoal border border-navy-light min-w-[200px] shadow-hover"
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-3 text-sm text-silver hover:text-primary-foreground hover:bg-navy-light transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+918090528020"
              className="flex items-center gap-2 px-4 py-2 border-2 border-silver text-silver hover:border-primary-foreground hover:text-primary-foreground transition-colors duration-200 text-sm font-medium uppercase tracking-wider"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">Call Now</span>
            </a>
            <a
              href="https://wa.me/918090528020?text=Inquiry%20about%20driving%20courses"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-crimson-dark text-accent-foreground transition-all duration-200 text-sm font-bold uppercase tracking-wider shadow-cta hover:shadow-hover"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-primary-foreground hover:text-accent transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <nav className="py-4 border-t border-navy-light mt-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className={`block py-3 text-base font-medium uppercase tracking-wider ${
                        location.pathname === item.path
                          ? 'text-accent'
                          : 'text-silver hover:text-primary-foreground'
                      }`}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="pl-4 border-l-2 border-navy-light">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block py-2 text-sm text-steel hover:text-silver"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
                
                {/* Mobile CTA */}
                <div className="flex gap-3 mt-6 pt-4 border-t border-navy-light">
                  <a
                    href="tel:+918090528020"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-silver text-silver text-sm font-medium uppercase tracking-wider"
                  >
                    <Phone className="w-4 h-4" />
                    Call
                  </a>
                  <a
                    href="https://wa.me/918090528020?text=Inquiry%20about%20driving%20courses"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-accent text-accent-foreground text-sm font-bold uppercase tracking-wider"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
