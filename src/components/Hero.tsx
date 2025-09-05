import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';
import mascotDog from '@/assets/mascot-dog.png';

const Hero = () => {
  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-transparent to-background/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              I help brands look{' '}
              <span className="text-gradient">unforgettable</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
              Creative designer with 5+ years of experience in digital branding and UI/UX. 
              I blend aesthetics with strategy to build memorable visual identities.
            </p>

            <Button 
              onClick={scrollToContacts}
              size="lg"
              className="
                bg-primary hover:bg-primary-glow text-primary-foreground
                px-8 py-4 text-lg font-semibold rounded-full
                shadow-glow hover:shadow-medium
                transition-all duration-300 hover:scale-105
                min-h-[48px] min-w-[200px]
              "
            >
              Let's Create Magic
            </Button>
          </div>

          {/* Mascot */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-slide-up">
            <div className="relative">
              <img
                src={mascotDog}
                alt="Merlin - Creative Mascot"
                className="
                  w-64 sm:w-80 lg:w-96 h-auto
                  hover:scale-105 transition-transform duration-500
                  drop-shadow-lg
                "
                loading="eager"
              />
              {/* Floating animation effect */}
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;