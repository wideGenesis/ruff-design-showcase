import { MessageCircle, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/merlinvisuals', '_blank', 'noopener,noreferrer');
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/merlinvisuals', '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-muted/30 border-t border-border/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 Merlin Visuals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;