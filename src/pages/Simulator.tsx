import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Monitor, Shield, Zap, Clock, Check, MessageCircle, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import simulatorImage from '@/assets/simulator-training.jpg';

const benefits = [
  {
    icon: Shield,
    title: 'Risk-Free Learning',
    description: 'Practice complex scenarios without any danger to yourself or others.',
  },
  {
    icon: Zap,
    title: 'Accelerated Progress',
    description: 'Learn faster by repeating scenarios until you master them.',
  },
  {
    icon: Monitor,
    title: 'Real-World Scenarios',
    description: 'Experience traffic, weather, and emergency situations virtually.',
  },
  {
    icon: Clock,
    title: 'Flexible Practice',
    description: 'Practice any time without scheduling concerns or vehicle availability.',
  },
];

const scenarios = [
  'City traffic navigation',
  'Highway merging and lane changes',
  'Roundabout handling',
  'Parking (parallel, reverse, angle)',
  'Night driving conditions',
  'Rainy weather driving',
  'Foggy conditions',
  'Emergency braking',
  'Pedestrian crossing scenarios',
  'School zone awareness',
];

const Simulator = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={simulatorImage}
            alt="Simulator Training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-transparent" />
        </div>

        <div className="container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-bold uppercase tracking-widest mb-6">
              Advanced Technology
            </span>
            <h1 className="heading-hero text-primary-foreground mb-6">
              Simulator<br />Training
            </h1>
            <p className="text-xl text-silver leading-relaxed mb-8">
              Well-designed simulators help you memorize driving skills in a completely safe environment before taking to the real roads.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/918090528020?text=I%20want%20to%20try%20simulator%20training"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold uppercase tracking-wider hover:bg-crimson-dark transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                Try Simulator Demo
              </a>
              <Link
                to="/courses"
                className="flex items-center gap-2 px-8 py-4 border-2 border-primary-foreground text-primary-foreground font-semibold uppercase tracking-wider hover:bg-primary-foreground hover:text-navy transition-colors duration-200"
              >
                View All Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionHeading
            title="Why Simulator Training?"
            subtitle="The smart way to learn driving without risks"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 0.1} direction="up">
                <div className="card-sharp p-8 text-center h-full">
                  <div className="w-16 h-16 bg-primary mx-auto flex items-center justify-center mb-6">
                    <benefit.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="heading-card text-foreground mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <span className="text-accent font-semibold uppercase tracking-wider mb-4 block">
                Training Scenarios
              </span>
              <h2 className="heading-section text-foreground mb-6">
                Practice Any Driving Situation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our advanced simulators recreate real-world driving conditions. Practice scenarios that would be dangerous or impossible to replicate in actual training.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {scenarios.map((scenario) => (
                  <div key={scenario} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{scenario}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-navy p-8">
                <h3 className="heading-card text-primary-foreground mb-6">Simulator Training Package</h3>
                <div className="text-5xl font-display text-accent mb-4">₹2,000</div>
                <p className="text-silver mb-6">7-day comprehensive simulator training</p>
                
                <ul className="space-y-3 mb-8">
                  {['Virtual traffic scenarios', 'Weather condition practice', 'Emergency situation training', 'Personalized feedback'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-silver">
                      <Check className="w-5 h-5 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/918090528020?text=I%20want%20to%20enroll%20in%20Simulator%20Training"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-accent text-accent-foreground text-center font-bold uppercase tracking-wider hover:bg-crimson-dark transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enroll Now
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container text-center">
          <AnimatedSection direction="up">
            <h2 className="heading-section text-primary-foreground mb-6">
              Ready to Experience the Future of Driver Training?
            </h2>
            <p className="text-xl text-silver max-w-2xl mx-auto mb-8">
              Build confidence safely before taking to the roads. Our simulators have helped thousands become better drivers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/918090528020?text=I%20want%20to%20book%20a%20simulator%20demo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold uppercase tracking-wider hover:bg-crimson-dark transition-colors duration-200"
              >
                Book a Demo Session
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Simulator;
