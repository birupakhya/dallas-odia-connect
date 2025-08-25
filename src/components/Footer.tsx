import { Button } from '@/components/ui/button';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Membership', href: '/membership' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-b from-muted/30 to-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Organization Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center shadow-cultural">
                <Heart className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold gradient-text">Dallas Odia Society</h3>
                <p className="text-sm text-muted-foreground">Home Away From Home</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              A non-profit organization dedicated to promoting and preserving Odia culture, 
              language, heritage, and values among Odia people and the wider community in 
              the Dallas-Fort Worth metropolitan area.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@dallasodiasociety.org</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span>(469) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Dallas-Fort Worth, Texas</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Support */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Connect & Support</h4>
            
            {/* Social Media */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Follow us on social media</p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Stay updated</p>
              <Button variant="cultural" size="sm" className="w-full">
                Subscribe to Newsletter
              </Button>
            </div>

            {/* Donate */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Support our mission</p>
              <Button variant="hero" size="sm" className="w-full">
                Donate Now
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 Dallas Odia Society. All rights reserved. | A 501(c)(3) non-profit organization
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;