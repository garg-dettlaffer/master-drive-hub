import { motion } from 'framer-motion';
import { Star, Award, Clock, MessageCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import instructor1 from '@/assets/instructor-1.jpg';
import instructor2 from '@/assets/instructor-2.jpg';
import instructor3 from '@/assets/instructor-3.jpg';

const instructors = [
  {
    name: 'Surjit Singh',
    role: 'Senior Instructor',
    experience: '25+ Years',
    specialization: 'Car & Highway Driving',
    image: instructor1,
    rating: 4.9,
    reviews: 450,
    bio: 'Highly experienced in simulator and on-road training. Known for his patience and detailed explanations. Has trained over 5,000 successful drivers.',
  },
  {
    name: 'Sujeet Singh',
    role: 'Lead Instructor',
    experience: '18+ Years',
    specialization: 'Truck & Heavy Vehicles',
    image: instructor2,
    rating: 4.8,
    reviews: 380,
    bio: 'Expert in heavy vehicle training with a focus on safety protocols. Specializes in helping nervous learners overcome their fears.',
  },
  {
    name: 'Suraj Kumar',
    role: 'Simulator Expert',
    experience: '10+ Years',
    specialization: 'Simulator Training',
    image: instructor3,
    rating: 4.9,
    reviews: 290,
    bio: 'Technology-savvy instructor specializing in simulator training. Helps students build confidence in a safe virtual environment.',
  },
];

const achievements = [
  { value: '50K+', label: 'Students Trained' },
  { value: '99%', label: 'Pass Rate' },
  { value: '4.8', label: 'Average Rating' },
  { value: '60', label: 'Years Combined Experience' },
];

const Instructors = () => {
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
              Our Team
            </span>
            <h1 className="heading-hero text-primary-foreground mb-6">
              Expert Instructors
            </h1>
            <p className="text-xl text-silver leading-relaxed">
              Learn from the best. Our certified instructors bring decades of experience and a passion for creating confident drivers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-accent">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1} direction="up">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-display text-accent-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-accent-foreground/80 uppercase tracking-wider text-sm">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionHeading
            title="Meet Our Team"
            subtitle="Professional, patient, and passionate about road safety"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <AnimatedSection key={instructor.name} delay={index * 0.1} direction="up">
                <div className="card-sharp bg-card overflow-hidden group h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-primary-foreground">
                        <Star className="w-5 h-5 fill-gold text-gold" />
                        <span className="font-semibold">{instructor.rating}</span>
                        <span className="text-silver text-sm">({instructor.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="heading-card text-foreground mb-1">{instructor.name}</h3>
                    <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-4">
                      {instructor.role}
                    </p>
                    <p className="text-muted-foreground mb-6 flex-1">{instructor.bio}</p>

                    {/* Details */}
                    <div className="space-y-3 mb-6 pt-4 border-t border-border">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-accent" />
                        <span className="text-foreground">{instructor.experience} Experience</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-accent" />
                        <span className="text-foreground">{instructor.specialization}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <a
                      href={`https://wa.me/918090528020?text=I%20want%20to%20book%20a%20session%20with%20${encodeURIComponent(instructor.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-primary text-primary-foreground text-center font-semibold uppercase tracking-wider hover:bg-navy-light transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Book Session
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Instructors */}
      <section className="py-20 bg-navy">
        <div className="container">
          <SectionHeading
            title="Why Learn With Us?"
            subtitle="What sets our instructors apart"
            light
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Certified', description: 'All instructors hold professional driving instructor certifications' },
              { title: 'Patient', description: 'Known for their calm and encouraging teaching approach' },
              { title: 'Experienced', description: 'Combined experience of over 60 years in driver education' },
              { title: 'Dedicated', description: 'Committed to every student\'s success and safety' },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1} direction="up">
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent mx-auto flex items-center justify-center mb-6">
                    <span className="text-3xl font-display text-accent-foreground">{index + 1}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-primary-foreground mb-2">{item.title}</h4>
                  <p className="text-silver">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Instructors;
