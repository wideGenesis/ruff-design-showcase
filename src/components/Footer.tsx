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
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © 2025 Merlin Visuals. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleTelegramClick}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              <span className="text-sm">Telegram</span>
            </Button>

            <span className="text-muted-foreground">•</span>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleLinkedInClick}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-4 w-4 mr-2" />
              <span className="text-sm">LinkedIn</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;