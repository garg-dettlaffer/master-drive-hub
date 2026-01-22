import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Car, Shield, Users, Award, Check, MessageCircle, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import onRoadImage from '@/assets/on-road-training.jpg';

const stages = [
  {
    step: 1,
    title: 'Vehicle Familiarization',
    duration: 'Day 1-3',
    description: 'Learn all controls, dashboard instruments, and basic vehicle operation in a stationary environment.',
  },
  {
    step: 2,
    title: 'Empty Ground Practice',
    duration: 'Day 4-7',
    description: 'Practice steering, acceleration, braking, and basic maneuvers on our training ground.',
  },
  {
    step: 3,
    title: 'Quiet Roads',
    duration: 'Day 8-10',
    description: 'Progress to quiet residential streets with minimal traffic to build confidence.',
  },
  {
    step: 4,
    title: 'City Traffic',
    duration: 'Day 11-16',
    description: 'Navigate Lucknow city traffic including intersections, roundabouts, and lane changes.',
  },
  {
    step: 5,
    title: 'Highway Driving',
    duration: 'Day 17-19',
    description: 'Learn highway entry/exit, overtaking, and maintaining high-speed control.',
  },
  {
    step: 6,
    title: 'Test Preparation',
    duration: 'Day 20-21',
    description: 'Final practice, mock tests, and RTO license test preparation.',
  },
];

const features = [
  {
    icon: Car,
    title: 'Well-Maintained Vehicles',
    description: 'Latest model cars with dual controls for safety during training.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Instructor can intervene at any moment with dual brake and steering controls.',
  },
  {
    icon: Users,
    title: 'Personal Attention',
    description: 'One-on-one training sessions for focused learning experience.',
  },
  {
    icon: Award,
    title: 'Certified Training',
    description: 'Government-approved training recognized by RTO for license tests.',
  },
];

const OnRoad = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={onRoadImage}
            alt="On-Road Training"
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
              Practical Training
            </span>
            <h1 className="heading-hero text-primary-foreground mb-6">
              On-Road<br />Training
            </h1>
            <p className="text-xl text-silver leading-relaxed mb-8">
              From basic controls to confident city driving. Patient instructors guide you every step of the way on real Lucknow roads.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/918090528020?text=I%20want%20to%20schedule%20on-road%20training"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold uppercase tracking-wider hover:bg-crimson-dark transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                Schedule Road Session
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

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1} direction="up">
                <div className="card-sharp p-8 text-center h-full">
                  <div className="w-16 h-16 bg-primary mx-auto flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="heading-card text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Training Process Timeline */}
      <section className="py-20 bg-muted">
        <div className="container">
          <SectionHeading
            title="Your Learning Journey"
            subtitle="Step-by-step progression from beginner to confident driver"
          />

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            <div className="space-y-12">
              {stages.map((stage, index) => (
                <AnimatedSection
                  key={stage.step}
                  delay={index * 0.1}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                >
                  <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <div className="card-sharp bg-card p-6 inline-block">
                        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                          {stage.duration}
                        </span>
                        <h4 className="text-xl font-semibold text-foreground my-2">{stage.title}</h4>
                        <p className="text-muted-foreground">{stage.description}</p>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-primary flex items-center justify-center text-primary-foreground font-display text-xl relative z-10 flex-shrink-0">
                      {stage.step}
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-navy">
        <div className="container">
          <SectionHeading
            title="Student Experiences"
            subtitle="Real feedback from our on-road training graduates"
            light
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection direction="left">
              <div className="bg-charcoal p-8 border-l-4 border-accent h-full">
                <p className="text-silver italic mb-6 text-lg leading-relaxed">
                  "The patient instructors made me confident on the road. I was nervous at first, but the step-by-step approach helped me overcome my fears."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy-light flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">N</span>
                  </div>
                  <div>
                    <div className="text-primary-foreground font-semibold">Nishith Rawat</div>
                    <div className="text-steel text-sm">Car Training Graduate</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-charcoal p-8 border-l-4 border-accent h-full">
                <p className="text-silver italic mb-6 text-lg leading-relaxed">
                  "Well-maintained vehicles and systematic training. The instructors know exactly how to handle nervous learners like me."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy-light flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">R</span>
                  </div>
                  <div>
                    <div className="text-primary-foreground font-semibold">Rahul Verma</div>
                    <div className="text-steel text-sm">Completed 21-Day Course</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <AnimatedSection direction="up">
              <h2 className="heading-section text-foreground mb-6">
                Ready to Hit the Road?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Our 21-day on-road training program includes everything you need to become a confident driver.
              </p>

              <div className="card-sharp bg-card p-8 mb-8">
                <div className="text-5xl font-display text-accent mb-4">₹4,000</div>
                <p className="text-muted-foreground mb-6">Complete Car Training - 21 Days</p>
                
                <ul className="grid grid-cols-2 gap-3 text-left mb-8">
                  {['One-on-one training', 'All traffic rules', 'Parking & reversing', 'License assistance'].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-accent" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://wa.me/918090528020?text=I%20want%20to%20enroll%20in%20On-Road%20Training"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold uppercase tracking-wider hover:bg-crimson-dark transition-colors duration-200"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Enroll Now
                  </a>
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    Contact Us
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OnRoad;
