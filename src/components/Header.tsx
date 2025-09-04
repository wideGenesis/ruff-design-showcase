import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 
        glass-effect border-b border-border/20
        transition-all duration-300 ease-smooth
        ${isScrolled ? 'py-2' : 'py-4'}
      `}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className={`
            font-bold text-gradient hover-lift
            transition-all duration-300
            ${isScrolled ? 'text-xl' : 'text-2xl'}
          `}
        >
          Merlin Visuals
        </button>

        {/* Navigation Menu */}
        <nav className="flex items-center space-x-1 sm:space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection('hero')}
            className="text-sm sm:text-base hover:text-primary transition-colors"
          >
            Home
          </Button>
          <span className="text-muted-foreground">•</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection('portfolio')}
            className="text-sm sm:text-base hover:text-primary transition-colors"
          >
            Portfolio
          </Button>
          <span className="text-muted-foreground">•</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection('contacts')}
            className="text-sm sm:text-base hover:text-primary transition-colors"
          >
            Contacts
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;