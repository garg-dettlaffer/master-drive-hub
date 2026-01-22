import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Clock, Users, Award, Car, Truck, ArrowRight, Star, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import heroImage from '@/assets/hero-driving.jpg';
import simulatorImage from '@/assets/simulator-training.jpg';
import onRoadImage from '@/assets/on-road-training.jpg';
import truckImage from '@/assets/truck-training.jpg';

const features = [
  {
    icon: Award,
    title: 'Since 1965',
    description: 'Nearly 60 years of excellence in driver education',
  },
  {
    icon: Users,
    title: 'Expert Instructors',
    description: 'Professionally trained, patient, and experienced trainers',
  },
  {
    icon: Car,
    title: 'Modern Fleet',
    description: 'Wide range of latest cars and truck simulators',
  },
];

const courses = [
  {
    title: 'Car Training',
    price: '₹4,000',
    duration: '21 Days',
    image: onRoadImage,
    features: ['Basic controls', 'Simulator practice', 'Road training', 'License assistance'],
  },
  {
    title: 'Truck Training',
    price: '₹4,000',
    duration: '30 Days',
    image: truckImage,
    features: ['Heavy vehicle basics', 'Safety protocols', 'Highway driving', 'Commercial license'],
  },
  {
    title: 'Simulator Training',
    price: '₹2,000',
    duration: '7 Days',
    image: simulatorImage,
    features: ['Virtual practice', 'Risk-free learning', 'Night driving simulation', 'Traffic scenarios'],
  },
];

const testimonials = [
  {
    name: 'Prabhat Chandra Agarwal',
    rating: 5,
    text: 'Highly appreciated for professionalism. The instructors are patient and knowledgeable. Best driving school in Lucknow!',
  },
  {
    name: 'Nishith Rawat',
    rating: 5,
    text: 'Patient instructors made me confident. The simulator training was incredibly helpful before going on the road.',
  },
  {
    name: 'Rahul Verma',
    rating: 5,
    text: 'Well-maintained vehicles and excellent training methodology. Highly recommend for anyone learning to drive.',
  },
];

const stats = [
  { value: '60+', label: 'Years Experience' },
  { value: '50K+', label: 'Students Trained' },
  { value: '99%', label: 'Pass Rate' },
  { value: '79+', label: 'Training Photos' },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Master Motor Training College - Driving Excellence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
        </div>

        {/* Content */}
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-bold uppercase tracking-widest">
                Est. 1965 — Lucknow's Finest
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-hero text-primary-foreground mb-6"
            >
              Master Motor
              <br />
              <span className="text-accent">Training College</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-silver mb-8 leading-relaxed"
            >
              Customized Car and Truck Training with Simulator Practice.
              <br className="hidden md:block" />
              Building confident drivers for nearly 60 years.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://wa.me/918090528020?text=Inquiry%20about%20driving%20courses"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 bg-accent hover:bg-crimson-dark text-accent-foreground font-bold uppercase tracking-wider transition-all duration-200 shadow-cta hover:shadow-hover"
              >
                <MessageCircle className="w-5 h-5" />
                Send Inquiry to WhatsApp
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:+918090528020"
                className="flex items-center gap-3 px-8 py-4 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-navy font-semibold uppercase tracking-wider transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-silver/20"
            >
              <div className="flex items-center gap-3 text-silver">
                <Clock className="w-5 h-5 text-accent" />
                <span>Open until 7 PM</span>
              </div>
              <div className="flex items-center gap-3 text-silver">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Husainganj, Lucknow</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-silver/50 flex justify-center pt-2"
          >
            <div className="w-1 h-3 bg-accent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-navy py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1} direction="up">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-display text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-silver uppercase tracking-wider text-sm">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionHeading
            title="Why Choose Master Motor?"
            subtitle="Lucknow's oldest and most trusted driving school with a legacy of excellence"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1} direction="up">
                <div className="card-sharp p-8 h-full group">
                  <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="heading-card text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <SectionHeading
            title="Our Training Programs"
            subtitle="Comprehensive courses designed for every skill level"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <AnimatedSection key={course.title} delay={index * 0.1} direction="scale">
                <div className="card-sharp bg-card overflow-hidden group h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold uppercase">
                        {course.duration}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="heading-card text-foreground mb-2">{course.title}</h3>
                    <div className="text-3xl font-display text-accent mb-4">{course.price}</div>
                    <ul className="space-y-2 mb-6 flex-1">
                      {course.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/courses"
                      className="w-full py-3 bg-primary text-primary-foreground text-center font-semibold uppercase tracking-wider hover:bg-navy-light transition-colors duration-200"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12" delay={0.4}>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wider hover:text-accent transition-colors duration-200"
            >
              View All Courses
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src={simulatorImage}
                  alt="Simulator Training at Master Motor"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-display text-accent-foreground">60</div>
                    <div className="text-sm uppercase tracking-wider text-accent-foreground/80">Years of Trust</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="text-accent font-semibold uppercase tracking-wider mb-4 block">
                About Our School
              </span>
              <h2 className="heading-section text-foreground mb-6">
                The Oldest & Best Motor Driving School in Lucknow
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Established in 1965, Master Motor Training College has been the cornerstone of driver education in Lucknow. We provide individual attention, use the best equipment and vehicles, and ensure every student gains not just a license, but lifelong safe driving skills.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our modern simulators allow students to practice in a safe environment before taking to the roads. With well-maintained vehicles and experienced instructors, we've trained over 50,000 confident drivers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="px-6 py-3 bg-primary text-primary-foreground font-semibold uppercase tracking-wider hover:bg-navy-light transition-colors duration-200"
                >
                  Learn More About Us
                </Link>
                <Link
                  to="/gallery"
                  className="px-6 py-3 border-2 border-primary text-primary font-semibold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  View Gallery
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-navy">
        <div className="container">
          <SectionHeading
            title="What Our Students Say"
            subtitle="Real experiences from our graduates"
            light
          />

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 0.1} direction="up">
                <div className="bg-charcoal p-8 h-full border-l-4 border-accent">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-silver mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-navy-light flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-primary-foreground font-semibold">{testimonial.name}</div>
                      <div className="text-steel text-sm">Verified Student</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12" delay={0.4}>
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-wider hover:text-primary-foreground transition-colors duration-200"
            >
              Read All Reviews
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionHeading
            title="Visit Our Training Center"
            subtitle="Conveniently located at Husainganj, Lucknow"
          />

          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection direction="left">
              <div className="h-[400px] border border-border">
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
            </AnimatedSection>

            <AnimatedSection direction="right">
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
                    <a href="tel:+918090528020" className="text-accent hover:underline">
                      +91 80905 28020
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

                <div className="pt-6 flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/918090528020?text=Inquiry%20about%20driving%20courses"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold uppercase tracking-wider hover:bg-crimson-dark transition-colors duration-200"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book a Session
                  </a>
                  <a
                    href="https://goo.gl/maps/..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    <MapPin className="w-5 h-5" />
                    Get Directions
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="container text-center">
          <AnimatedSection direction="up">
            <h2 className="heading-section text-accent-foreground mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-accent-foreground/80 max-w-2xl mx-auto mb-8">
              Join thousands of confident drivers trained at Master Motor Training College. 
              Your license to freedom starts here.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/918090528020?text=I%20want%20to%20enroll%20in%20driving%20course"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider hover:bg-navy-light transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                Enroll Now via WhatsApp
              </a>
              <a
                href="tel:+918090528020"
                className="flex items-center gap-2 px-8 py-4 bg-accent-foreground text-accent font-bold uppercase tracking-wider hover:bg-accent-foreground/90 transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                Call +91 80905 28020
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
