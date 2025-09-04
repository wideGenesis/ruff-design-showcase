import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Linkedin, Mail } from 'lucide-react';

const Contacts = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/merlinvisuals', '_blank', 'noopener,noreferrer');
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/merlinvisuals', '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:hello@merlinvisuals.com';
  };

  return (
    <section id="contacts" className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          {/* Section Header */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Let's Work Together
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Have a project in mind? Let's create something amazing together.
          </p>

          {/* Main CTA Button */}
          <Button
            onClick={handleTelegramClick}
            size="lg"
            className="
              bg-white text-primary hover:bg-white/90
              px-8 py-4 text-lg font-semibold rounded-full
              shadow-glow hover:shadow-medium
              transition-all duration-300 hover:scale-105
              min-h-[48px] min-w-[200px] mb-12
            "
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Get in Touch
          </Button>

          {/* Contact Options */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {/* Telegram */}
            <Card className="glass-effect hover-lift cursor-pointer group" onClick={handleTelegramClick}>
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-8 w-8 mx-auto mb-3 text-primary group-hover:text-primary-glow transition-colors" />
                <h3 className="font-semibold mb-1">Telegram</h3>
                <p className="text-sm text-muted-foreground">Quick chat</p>
              </CardContent>
            </Card>

            {/* LinkedIn */}
            <Card className="glass-effect hover-lift cursor-pointer group" onClick={handleLinkedInClick}>
              <CardContent className="p-6 text-center">
                <Linkedin className="h-8 w-8 mx-auto mb-3 text-primary group-hover:text-primary-glow transition-colors" />
                <h3 className="font-semibold mb-1">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">Professional network</p>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="glass-effect hover-lift cursor-pointer group sm:col-span-2 lg:col-span-1" onClick={handleEmailClick}>
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-3 text-primary group-hover:text-primary-glow transition-colors" />
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">hello@merlinvisuals.com</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;