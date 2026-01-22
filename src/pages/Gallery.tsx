import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ZoomIn, Camera } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import heroImage from '@/assets/hero-driving.jpg';
import simulatorImage from '@/assets/simulator-training.jpg';
import onRoadImage from '@/assets/on-road-training.jpg';
import truckImage from '@/assets/truck-training.jpg';
import schoolImage from '@/assets/school-building.jpg';
import instructor1 from '@/assets/instructor-1.jpg';
import instructor2 from '@/assets/instructor-2.jpg';
import instructor3 from '@/assets/instructor-3.jpg';

type Category = 'all' | 'simulators' | 'cars' | 'trucks' | 'facility' | 'students';

interface GalleryImage {
  src: string;
  alt: string;
  category: Category[];
}

const galleryImages: GalleryImage[] = [
  { src: heroImage, alt: 'On-road training session in Lucknow', category: ['cars', 'students'] },
  { src: simulatorImage, alt: 'Advanced driving simulator training', category: ['simulators', 'students'] },
  { src: onRoadImage, alt: 'Professional car driving instruction', category: ['cars', 'students'] },
  { src: truckImage, alt: 'Heavy truck training vehicle', category: ['trucks'] },
  { src: schoolImage, alt: 'Master Motor Training College building', category: ['facility'] },
  { src: instructor1, alt: 'Professional driving instructor', category: ['facility'] },
  { src: instructor2, alt: 'Experienced trainer', category: ['facility'] },
  { src: instructor3, alt: 'Young instructor', category: ['facility'] },
  { src: heroImage, alt: 'City driving practice', category: ['cars', 'students'] },
  { src: simulatorImage, alt: 'Simulator cockpit view', category: ['simulators'] },
  { src: truckImage, alt: 'Commercial vehicle training', category: ['trucks'] },
  { src: onRoadImage, alt: 'Student learning to drive', category: ['cars', 'students'] },
];

const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'All Photos' },
  { id: 'simulators', label: 'Simulators' },
  { id: 'cars', label: 'Cars' },
  { id: 'trucks', label: 'Trucks' },
  { id: 'facility', label: 'Facility' },
  { id: 'students', label: 'Students' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category.includes(activeCategory));

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
              79+ Photos
            </span>
            <h1 className="heading-hero text-primary-foreground mb-6">
              Our Gallery
            </h1>
            <p className="text-xl text-silver leading-relaxed">
              See our training facilities, vehicles, and happy students in action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted border-b border-border sticky top-[72px] z-40">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 font-semibold uppercase tracking-wider text-sm transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-foreground hover:bg-secondary'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            layout
          >
            {filteredImages.map((image, index) => (
              <AnimatedSection key={`${image.src}-${index}`} delay={index * 0.05} direction="scale">
                <motion.div
                  layout
                  className="relative aspect-square overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-accent flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 text-accent-foreground" />
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Upload CTA */}
      <section className="py-12 bg-muted">
        <div className="container text-center">
          <AnimatedSection direction="up">
            <h3 className="text-2xl font-display text-foreground mb-4">
              ARE YOU A STUDENT?
            </h3>
            <p className="text-muted-foreground mb-6">
              Share your training photos with us and get featured in our gallery!
            </p>
            <a
              href="https://wa.me/918090528020?text=I%20want%20to%20share%20my%20training%20photos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold uppercase tracking-wider hover:bg-navy-light transition-colors duration-200"
            >
              <Camera className="w-5 h-5" />
              Share Your Photos
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-accent flex items-center justify-center text-accent-foreground hover:bg-crimson-dark transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </Layout>
  );
};

export default Gallery;
