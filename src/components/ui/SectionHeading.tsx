import AnimatedSection from './AnimatedSection';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true, light = false }: SectionHeadingProps) => {
  return (
    <AnimatedSection className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`heading-section ${light ? 'text-primary-foreground' : 'text-foreground'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-silver' : 'text-muted-foreground'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-6 flex items-center gap-2 ${centered ? 'justify-center' : ''}`}>
        <div className={`w-12 h-1 ${light ? 'bg-accent' : 'bg-primary'}`} />
        <div className={`w-3 h-3 ${light ? 'bg-accent' : 'bg-primary'}`} />
        <div className={`w-12 h-1 ${light ? 'bg-accent' : 'bg-primary'}`} />
      </div>
    </AnimatedSection>
  );
};

export default SectionHeading;
