import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Users, Car, Shield, MapPin, Clock, Check, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import schoolImage from '@/assets/school-building.jpg';
import simulatorImage from '@/assets/simulator-training.jpg';

const milestones = [
  { year: '1965', title: 'Foundation', description: 'Master Motor Training College was established in Lucknow' },
  { year: '1980', title: 'Expansion', description: 'Added truck and heavy vehicle training programs' },
  { year: '2000', title: 'Modernization', description: 'Introduced first driving simulators in the region' },
  { year: '2010', title: 'Digital Era', description: 'Online booking and digital learning resources added' },
  { year: '2024', title: 'Present Day', description: 'Over 50,000 students trained with 99% pass rate' },
];

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Every aspect of our training prioritizes road safety and responsible driving habits.',
  },
  {
    icon: Users,
    title: 'Individual Attention',
    description: 'Small batch sizes ensure personalized guidance for every student.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Nearly 60 years of maintaining the highest standards in driver education.',
  },
  {
    icon: Car,
    title: 'Modern Fleet',
    description: 'Well-maintained latest vehicles for comfortable and safe learning experience.',
  },
];

const amenities = [
  'Online Classes Available',
  'Modern Simulators',
  'Gender-Neutral Toilets',
  'LGBTQ+ Friendly',
  'Air-Conditioned Training Vehicles',
  'Flexible Timings',
  'License Assistance',
  'Free Pickup & Drop',
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={schoolImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-bold uppercase tracking-widest mb-6">
              About Us
            </span>
            <h1 className="heading-hero text-primary-foreground mb-6">
              Our Story
            </h1>
            <p className="text-xl text-silver leading-relaxed">
              For nearly 60 years, Master Motor Training College has been Lucknow's trusted partner in creating confident, skilled drivers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src={schoolImage}
                  alt="Master Motor Training College Building"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent p-8">
                  <div className="text-5xl font-display text-accent-foreground">1965</div>
                  <div className="text-accent-foreground/80 uppercase tracking-wider">Established</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="text-accent font-semibold uppercase tracking-wider mb-4 block">
                Our Legacy
              </span>
              <h2 className="heading-section text-foreground mb-6">
                The Oldest & Best Motor Driving School in Lucknow
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Established in 1965, Master Motor Training College is a reputed driving school offering basic training on car and truck simulators along with a wide range of latest cars. We are proud to be Lucknow's oldest and most trusted institution for driver education.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We believe in providing individual attention to each student, using the best equipment and vehicles available. Our mission is ensuring students gain not just a license, but lifelong safe driving skills that make our roads safer for everyone.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {values.slice(0, 2).map((value) => (
                  <div key={value.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide our training methodology"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1} direction="up">
                <div className="card-sharp bg-card p-8 text-center h-full">
                  <div className="w-16 h-16 bg-primary mx-auto flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="heading-card text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-navy">
        <div className="container">
          <SectionHeading
            title="Our Journey"
            subtitle="Key milestones in our 60-year legacy"
            light
          />

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-navy-light hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <AnimatedSection
                  key={milestone.year}
                  delay={index * 0.1}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                >
                  <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <div className="bg-charcoal p-6 inline-block">
                        <div className="text-3xl font-display text-accent mb-2">{milestone.year}</div>
                        <h4 className="text-xl font-semibold text-primary-foreground mb-2">{milestone.title}</h4>
                        <p className="text-silver">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-4 h-4 bg-accent relative z-10" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <span className="text-accent font-semibold uppercase tracking-wider mb-4 block">
                Facilities
              </span>
              <h2 className="heading-section text-foreground mb-6">
                Modern Amenities for Your Comfort
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We've equipped our training center with everything you need for a comfortable and effective learning experience.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{amenity}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="https://goo.gl/maps/..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold uppercase tracking-wider hover:bg-navy-light transition-colors duration-200"
                >
                  <MapPin className="w-5 h-5" />
                  Get Directions
                </a>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <img
                src={simulatorImage}
                alt="Modern Training Facilities"
                className="w-full h-[500px] object-cover"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
