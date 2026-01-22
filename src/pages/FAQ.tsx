import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, MessageCircle, Search, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    category: 'General',
    question: 'How long is the driving course?',
    answer: 'Our basic car training course is 21 days. Truck training takes 30 days, and simulator-only training is 7 days. We also offer customized durations based on individual learning pace.',
  },
  {
    category: 'General',
    question: 'Do you offer online classes?',
    answer: 'Yes, we offer online theoretical classes covering traffic rules, road signs, and driving theory. However, practical training must be done in person at our training center.',
  },
  {
    category: 'General',
    question: 'What is the minimum age to learn driving?',
    answer: 'For car driving, the minimum age is 18 years. For two-wheelers without gear, it is 16 years. You will need valid age proof and a learner\'s license.',
  },
  {
    category: 'Courses',
    question: 'What courses do you offer?',
    answer: 'We offer Basic Car Training (₹4,000), Truck Training (₹4,000), Simulator Training (₹2,000), Advanced Driving (₹3,000), and a Complete Package (₹8,000) that includes everything.',
  },
  {
    category: 'Courses',
    question: 'Can I choose my training timings?',
    answer: 'Yes, we offer flexible timing options. You can choose morning (8 AM - 12 PM), afternoon (12 PM - 4 PM), or evening (4 PM - 7 PM) slots based on availability.',
  },
  {
    category: 'Courses',
    question: 'Do you help with getting a driving license?',
    answer: 'Absolutely! We provide complete assistance with the RTO license process, including application, documentation, and test preparation. Our students have a 99% pass rate.',
  },
  {
    category: 'Training',
    question: 'What is simulator training?',
    answer: 'Simulator training uses advanced driving simulators that recreate real-world driving scenarios. It helps you practice complex situations like night driving, rain, and emergencies without any risk.',
  },
  {
    category: 'Training',
    question: 'What type of vehicles do you use for training?',
    answer: 'We use the latest model cars with dual controls (brake and steering). For truck training, we have commercial vehicles. All vehicles are well-maintained and regularly serviced.',
  },
  {
    category: 'Training',
    question: 'How many students per instructor?',
    answer: 'We provide one-on-one training for all practical sessions. Each student gets individual attention from their assigned instructor throughout the course.',
  },
  {
    category: 'Payment',
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, UPI, bank transfer, and all major cards. You can also pay in installments for courses above ₹4,000.',
  },
  {
    category: 'Payment',
    question: 'Is there any refund policy?',
    answer: 'Yes, we offer a full refund if you cancel within 48 hours of enrollment. After that, a pro-rata refund is provided based on classes attended.',
  },
  {
    category: 'Miscellaneous',
    question: 'Do you provide pickup and drop service?',
    answer: 'Yes, we provide free pickup and drop service within Lucknow city limits for students enrolled in courses of 21 days or more.',
  },
];

const categories = ['All', 'General', 'Courses', 'Training', 'Payment', 'Miscellaneous'];

const blogPosts = [
  {
    title: 'Tips for Safe Driving in Lucknow Traffic',
    excerpt: 'Navigating Lucknow\'s busy streets can be challenging. Here are our expert tips for staying safe and confident.',
    date: 'January 15, 2024',
  },
  {
    title: 'Understanding Traffic Signs: A Complete Guide',
    excerpt: 'From regulatory signs to warning signs, learn everything you need to know about Indian traffic signs.',
    date: 'January 10, 2024',
  },
  {
    title: 'Benefits of Simulator Training Before Road Practice',
    excerpt: 'Why starting with simulator training can make you a better and more confident driver.',
    date: 'January 5, 2024',
  },
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Help Center
            </span>
            <h1 className="heading-hero text-primary-foreground mb-6">
              FAQ & Blog
            </h1>
            <p className="text-xl text-silver leading-relaxed">
              Find answers to common questions or explore our driving tips and guides.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-muted border-b border-border">
        <div className="container">
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search frequently asked questions..."
              className="w-full pl-12 pr-4 py-4 bg-card border border-input focus:border-accent focus:outline-none transition-colors duration-200"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Quick answers to help you get started"
          />

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 font-semibold uppercase tracking-wider text-sm transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-foreground hover:bg-secondary border border-border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto space-y-4">
            {filteredFaqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.05} direction="up">
                <div className="card-sharp bg-card overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                    <div className={`w-8 h-8 bg-primary flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <div className="border-t border-border pt-4">
                            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No FAQs found matching your search.</p>
              </div>
            )}
          </div>

          {/* Ask Question CTA */}
          <AnimatedSection className="text-center mt-12" delay={0.3}>
            <p className="text-muted-foreground mb-4">Can't find what you're looking for?</p>
            <a
              href="https://wa.me/918090528020?text=I%20have%20a%20question"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold uppercase tracking-wider hover:bg-crimson-dark transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              Ask a Question
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <SectionHeading
            title="Driving Tips & Guides"
            subtitle="Expert advice to make you a better driver"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.title} delay={index * 0.1} direction="up">
                <article className="card-sharp bg-card p-8 h-full flex flex-col">
                  <span className="text-sm text-muted-foreground mb-3">{post.date}</span>
                  <h3 className="heading-card text-foreground mb-4">{post.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-1">{post.excerpt}</p>
                  <Link
                    to="#"
                    className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-wider hover:text-crimson-dark transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
