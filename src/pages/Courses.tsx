import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, Check, MessageCircle, Phone, Clock, Users, Car, Truck, Monitor, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import onRoadImage from '@/assets/on-road-training.jpg';
import truckImage from '@/assets/truck-training.jpg';
import simulatorImage from '@/assets/simulator-training.jpg';

interface Course {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  duration: string;
  image: string;
  description: string;
  features: string[];
  curriculum: string[];
  icon: React.ElementType;
}

const courses: Course[] = [
  {
    id: 'car-basic',
    title: 'Basic Car Training',
    subtitle: 'Complete Beginner Course',
    price: '₹4,000',
    duration: '21 Days',
    image: onRoadImage,
    icon: Car,
    description: 'Comprehensive car driving course designed for complete beginners. Learn from controls to confident road driving.',
    features: [
      'One-on-one training sessions',
      'Simulator practice before road',
      'All traffic rules and signs',
      'Parking and reversing skills',
      'License test preparation',
      'Flexible timing options',
    ],
    curriculum: [
      'Day 1-3: Introduction to vehicle controls and dashboard',
      'Day 4-7: Simulator training - basic maneuvers',
      'Day 8-10: Empty ground practice - steering and brakes',
      'Day 11-14: City traffic introduction',
      'Day 15-18: Highway driving basics',
      'Day 19-21: Test preparation and license assistance',
    ],
  },
  {
    id: 'truck',
    title: 'Truck Driving Course',
    subtitle: 'Heavy Vehicle Training',
    price: '₹4,000',
    duration: '30 Days',
    image: truckImage,
    icon: Truck,
    description: 'Professional heavy vehicle training for commercial driving license. Overcome your fears and become a confident truck driver.',
    features: [
      'Heavy vehicle controls mastery',
      'Safety protocols training',
      'Highway and long-route driving',
      'Night driving practice',
      'Commercial license assistance',
      'Job placement support',
    ],
    curriculum: [
      'Week 1: Truck basics, controls, and safety checks',
      'Week 2: Simulator training and empty ground practice',
      'Week 3: City and highway driving',
      'Week 4: Night driving, parking, and test preparation',
    ],
  },
  {
    id: 'simulator',
    title: 'Simulator Training',
    subtitle: 'Risk-Free Practice',
    price: '₹2,000',
    duration: '7 Days',
    image: simulatorImage,
    icon: Monitor,
    description: 'Advanced simulator training to practice complex scenarios without any risk. Perfect for beginners and nervous learners.',
    features: [
      'Virtual traffic scenarios',
      'Weather condition practice',
      'Emergency situation training',
      'Night driving simulation',
      'Mistake analysis and feedback',
      'Build confidence safely',
    ],
    curriculum: [
      'Day 1-2: Basic controls and city driving scenarios',
      'Day 3-4: Complex traffic and intersection handling',
      'Day 5-6: Adverse conditions and emergency responses',
      'Day 7: Assessment and personalized feedback',
    ],
  },
  {
    id: 'advanced',
    title: 'Advanced Driving',
    subtitle: 'For Licensed Drivers',
    price: '₹3,000',
    duration: '14 Days',
    image: onRoadImage,
    icon: Car,
    description: 'Polish your driving skills and learn advanced techniques. Perfect for those wanting to become expert drivers.',
    features: [
      'Defensive driving techniques',
      'Highway high-speed handling',
      'Difficult terrain navigation',
      'Night driving mastery',
      'Fuel-efficient driving',
      'Emergency maneuvers',
    ],
    curriculum: [
      'Day 1-4: Defensive driving and anticipation',
      'Day 5-8: Highway and difficult conditions',
      'Day 9-12: Advanced parking and maneuvering',
      'Day 13-14: Final assessment and certification',
    ],
  },
  {
    id: 'combo',
    title: 'Complete Package',
    subtitle: 'Best Value',
    price: '₹8,000',
    originalPrice: '₹10,000',
    duration: '45 Days',
    image: simulatorImage,
    icon: Users,
    description: 'The ultimate driving package combining car training, simulator practice, and advanced skills. Save ₹2,000!',
    features: [
      'Everything in Basic Car Training',
      'Full Simulator Training included',
      'Advanced driving techniques',
      'Priority scheduling',
      'Free refresher sessions',
      'Lifetime license support',
    ],
    curriculum: [
      'Week 1-3: Complete Basic Car Training',
      'Week 4: Full Simulator Training',
      'Week 5-6: Advanced Driving Techniques',
      'Week 7: Final assessment and certification',
    ],
  },
];

const Courses = () => {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const toggleCourse = (id: string) => {
    setExpandedCourse(expandedCourse === id ? null : id);
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
              Training Programs
            </span>
            <h1 className="heading-hero text-primary-foreground mb-6">
              Our Courses
            </h1>
            <p className="text-xl text-silver leading-relaxed">
              Comprehensive driving courses customized to your needs. From complete beginners to advanced drivers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionHeading
            title="Choose Your Program"
            subtitle="Flexible pricing with total options ranging from ₹2,000 to ₹8,000"
          />

          <div className="space-y-6">
            {courses.map((course, index) => (
              <AnimatedSection key={course.id} delay={index * 0.1} direction="up">
                <div className="card-sharp bg-card overflow-hidden">
                  {/* Course Header - Always Visible */}
                  <div
                    className="flex flex-col lg:flex-row cursor-pointer"
                    onClick={() => toggleCourse(course.id)}
                  >
                    <div className="lg:w-1/3 h-48 lg:h-auto relative">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-navy/60 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 bg-accent flex items-center justify-center">
                          <course.icon className="w-6 h-6 text-accent-foreground" />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 p-6 lg:p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="heading-card text-foreground">{course.title}</h3>
                            {course.originalPrice && (
                              <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-bold uppercase">
                                Save ₹2,000
                              </span>
                            )}
                          </div>
                          <p className="text-muted-foreground mb-4">{course.subtitle}</p>
                          <p className="text-foreground">{course.description}</p>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <div className="flex items-center gap-2">
                              {course.originalPrice && (
                                <span className="text-lg text-muted-foreground line-through">
                                  {course.originalPrice}
                                </span>
                              )}
                              <span className="text-3xl font-display text-accent">{course.price}</span>
                            </div>
                            <div className="text-sm text-muted-foreground flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {course.duration}
                            </div>
                          </div>

                          <div className={`w-10 h-10 bg-primary flex items-center justify-center transition-transform duration-300 ${expandedCourse === course.id ? 'rotate-180' : ''}`}>
                            <ChevronDown className="w-5 h-5 text-primary-foreground" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {expandedCourse === course.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-border"
                      >
                        <div className="p-6 lg:p-8 bg-muted/50">
                          <div className="grid lg:grid-cols-2 gap-8">
                            {/* Features */}
                            <div>
                              <h4 className="font-semibold text-foreground mb-4 uppercase tracking-wider">
                                What's Included
                              </h4>
                              <ul className="space-y-3">
                                {course.features.map((feature) => (
                                  <li key={feature} className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                                    <span className="text-foreground">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Curriculum */}
                            <div>
                              <h4 className="font-semibold text-foreground mb-4 uppercase tracking-wider">
                                Course Curriculum
                              </h4>
                              <ul className="space-y-3">
                                {course.curriculum.map((item, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <ChevronRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-muted-foreground">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* CTA */}
                          <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-border">
                            <a
                              href={`https://wa.me/918090528020?text=I%20want%20to%20enroll%20in%20${encodeURIComponent(course.title)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold uppercase tracking-wider hover:bg-crimson-dark transition-colors duration-200"
                            >
                              <MessageCircle className="w-5 h-5" />
                              Enroll Now
                            </a>
                            <a
                              href="tel:+918090528020"
                              className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                            >
                              <Phone className="w-5 h-5" />
                              Call for Details
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* More Training Options */}
      <section className="py-20 bg-muted">
        <div className="container">
          <SectionHeading
            title="Specialized Training"
            subtitle="Explore our focused training programs"
          />

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left">
              <Link to="/simulator" className="card-sharp bg-card overflow-hidden group block h-full">
                <div className="relative h-48">
                  <img
                    src={simulatorImage}
                    alt="Simulator Training"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="heading-card text-foreground mb-2 group-hover:text-accent transition-colors">
                    Simulator Training
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Practice in a safe virtual environment before hitting the road.
                  </p>
                  <span className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-wider">
                    Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <Link to="/on-road" className="card-sharp bg-card overflow-hidden group block h-full">
                <div className="relative h-48">
                  <img
                    src={onRoadImage}
                    alt="On-Road Training"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="heading-card text-foreground mb-2 group-hover:text-accent transition-colors">
                    On-Road Training
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Real-world driving experience with expert instructors by your side.
                  </p>
                  <span className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-wider">
                    Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
