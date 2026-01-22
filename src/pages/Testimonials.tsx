import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight, MessageCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

interface Review {
  name: string;
  date: string;
  rating: number;
  text: string;
  ownerResponse?: string;
}

const reviews: Review[] = [
  {
    name: 'Prabhat Chandra Agarwal',
    date: '2 months ago',
    rating: 5,
    text: 'Highly appreciated for professionalism. The instructors are patient and knowledgeable. Master Motor Training College is undoubtedly the best driving school in Lucknow. I learned so much in just 21 days.',
    ownerResponse: 'Thank you so much for your kind words, Prabhat! We are glad to have helped you on your driving journey. Safe driving!',
  },
  {
    name: 'Nishith Rawat',
    date: '1 month ago',
    rating: 5,
    text: 'Patient instructors made me confident. I was extremely nervous when I started, as I had never sat behind the wheel before. But the step-by-step training and constant encouragement helped me overcome my fears. The simulator training was incredibly helpful.',
  },
  {
    name: 'Rahul Verma',
    date: '3 weeks ago',
    rating: 5,
    text: 'Well-maintained vehicles and excellent training methodology. The dual-control cars gave me peace of mind knowing the instructor could take over if needed. Highly recommend for anyone learning to drive in Lucknow.',
  },
  {
    name: 'Priya Singh',
    date: '1 month ago',
    rating: 5,
    text: 'As a woman, I was initially hesitant about learning to drive. But the instructors here are very professional and respectful. They made me feel comfortable and confident. Now I drive to work every day!',
    ownerResponse: 'We are so proud of your achievement, Priya! It was our pleasure to teach you. Keep driving safely!',
  },
  {
    name: 'Amit Kumar',
    date: '2 weeks ago',
    rating: 4,
    text: 'Good driving school with experienced instructors. The only reason for 4 stars is the waiting time for booking slots during peak hours. Otherwise, training quality is excellent.',
  },
  {
    name: 'Sunita Devi',
    date: '3 months ago',
    rating: 5,
    text: 'I took the truck driving course here. Being my first time handling such a heavy vehicle, I was scared. But Sujeet Sir was incredibly patient and helped me overcome my fears. Got my commercial license on the first attempt!',
  },
  {
    name: 'Ravi Prakash',
    date: '1 month ago',
    rating: 5,
    text: 'The simulator training is a game-changer! It helped me understand how to react in various scenarios without any risk. Highly recommend starting with the simulator before road training.',
  },
  {
    name: 'Neha Agarwal',
    date: '2 months ago',
    rating: 5,
    text: 'Excellent experience! The staff is friendly, the vehicles are well-maintained, and the training is comprehensive. I passed my driving test on the first attempt. Thank you, Master Motor!',
    ownerResponse: 'Congratulations on passing your test, Neha! We are happy to have been part of your learning journey.',
  },
];

const stats = {
  totalReviews: '1,200+',
  averageRating: '4.8',
  fiveStarPercentage: '92%',
};

const Testimonials = () => {
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
              Student Reviews
            </span>
            <h1 className="heading-hero text-primary-foreground mb-6">
              Testimonials
            </h1>
            <p className="text-xl text-silver leading-relaxed">
              Hear from the thousands of confident drivers we've trained over the years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-accent">
        <div className="container">
          <div className="grid grid-cols-3 gap-8 text-center">
            <AnimatedSection delay={0} direction="up">
              <div className="text-4xl md:text-5xl font-display text-accent-foreground mb-2">
                {stats.totalReviews}
              </div>
              <div className="text-accent-foreground/80 uppercase tracking-wider text-sm">
                Total Reviews
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1} direction="up">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-4xl md:text-5xl font-display text-accent-foreground">
                  {stats.averageRating}
                </span>
                <Star className="w-8 h-8 fill-gold text-gold" />
              </div>
              <div className="text-accent-foreground/80 uppercase tracking-wider text-sm">
                Average Rating
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} direction="up">
              <div className="text-4xl md:text-5xl font-display text-accent-foreground mb-2">
                {stats.fiveStarPercentage}
              </div>
              <div className="text-accent-foreground/80 uppercase tracking-wider text-sm">
                5-Star Reviews
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionHeading
            title="What Our Students Say"
            subtitle="Real reviews from verified students"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <AnimatedSection key={review.name} delay={index * 0.1} direction="up">
                <div className="card-sharp bg-card p-8 h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-xl">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{review.name}</h4>
                        <p className="text-sm text-muted-foreground">{review.date}</p>
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-muted-foreground/30" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating
                            ? 'fill-gold text-gold'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-foreground leading-relaxed mb-4">
                    "{review.text}"
                  </p>

                  {/* Owner Response */}
                  {review.ownerResponse && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-2 font-semibold uppercase tracking-wider">
                        Response from Owner
                      </p>
                      <p className="text-sm text-muted-foreground italic">
                        {review.ownerResponse}
                      </p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leave Review CTA */}
      <section className="py-20 bg-navy">
        <div className="container text-center">
          <AnimatedSection direction="up">
            <h2 className="heading-section text-primary-foreground mb-6">
              Share Your Experience
            </h2>
            <p className="text-xl text-silver max-w-2xl mx-auto mb-8">
              Are you a graduate of Master Motor Training College? We'd love to hear about your experience!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.google.com/maps/place/Master+Motor+Training+College/@26.8392855,80.9346755,19z/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-bold uppercase tracking-wider hover:bg-crimson-dark transition-colors duration-200"
              >
                Leave a Google Review
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/918090528020?text=I%20want%20to%20share%20my%20feedback"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 border-2 border-primary-foreground text-primary-foreground font-semibold uppercase tracking-wider hover:bg-primary-foreground hover:text-navy transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                Share via WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
