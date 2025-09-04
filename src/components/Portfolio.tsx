import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Sample portfolio data
const portfolioItems = [
  {
    id: 1,
    title: 'Brand Identity Design',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&h=300&fit=crop&crop=center',
    link: 'https://behance.net/project1'
  },
  {
    id: 2,
    title: 'Motion Graphics Reel',
    category: 'Animation',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop&crop=center',
    link: 'https://behance.net/project2'
  },
  {
    id: 3,
    title: 'UI/UX Mobile App',
    category: 'Digital Design',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center',
    link: 'https://behance.net/project3'
  },
  {
    id: 4,
    title: 'Website Redesign',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center',
    link: 'https://behance.net/project4'
  },
  {
    id: 5,
    title: 'Logo Collection',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138c1839?w=400&h=300&fit=crop&crop=center',
    link: 'https://behance.net/project5'
  },
  {
    id: 6,
    title: 'Social Media Graphics',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center',
    link: 'https://behance.net/project6'
  }
];

const Portfolio = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = 320; // 300px + 20px gap
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gradient">
            Portfolio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are some of my recent projects
          </p>
        </div>

        {/* Portfolio Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className={`
              absolute left-0 top-1/2 -translate-y-1/2 z-10
              glass-effect hover:bg-primary hover:text-primary-foreground
              transition-all duration-300
              ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className={`
              absolute right-0 top-1/2 -translate-y-1/2 z-10
              glass-effect hover:bg-primary hover:text-primary-foreground
              transition-all duration-300
              ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="
              flex gap-5 overflow-x-auto scrollbar-hide px-12
              snap-x snap-mandatory
            "
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
            onScroll={checkScrollButtons}
          >
            {portfolioItems.map((item, index) => (
              <Card
                key={item.id}
                className="
                  flex-none w-[300px] hover-lift
                  snap-start glass-effect
                  overflow-hidden group cursor-pointer
                  animate-scale-in
                "
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => window.open(item.link, '_blank', 'noopener,noreferrer')}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        w-full h-48 object-cover
                        group-hover:scale-110 transition-transform duration-500
                      "
                      loading="lazy"
                    />
                    {/* Overlay on hover */}
                    <div className="
                      absolute inset-0 bg-primary/80 opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300
                      flex items-center justify-center
                    ">
                      <ExternalLink className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.category}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;