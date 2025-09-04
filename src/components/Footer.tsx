import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, MessageSquare } from 'lucide-react';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import TermsOfServiceModal from './TermsOfServiceModal';
import FeedbackModal from './FeedbackModal';

const Footer = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Membership', href: '/get-involved/membership' },
    { name: 'Gallery', href: '/events/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-b from-muted/30 to-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
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
                <span>BoD@DallasOdiaSociety.org</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>Treasurer@DallasOdiaSociety.org</span>
              </div>
              {/* <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span>(469) 123-4567</span>
              </div> */}
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
          {/* <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Connect & Support</h4>
            
            {/* Social Media */}
            {/* <div>
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
            {/* <div>
              <p className="text-sm text-muted-foreground mb-3">Stay updated</p>
              <Button variant="cultural" size="sm" className="w-full">
                Subscribe to Newsletter
              </Button>
            </div>

            {/* Feedback */}
            {/* <div>
              <p className="text-sm text-muted-foreground mb-3">Help us improve</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => setIsFeedbackModalOpen(true)}
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Share Feedback
              </Button>
            </div>

            {/* Donate */}
            {/* <div>
              <p className="text-sm text-muted-foreground mb-3">Support our mission</p>
              <Button variant="hero" size="sm" className="w-full">
                Donate Now
              </Button>
            </div>
          </div> */}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border space-y-4">
          {/* Main Footer Info */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Dallas Odia Society. All rights reserved. | A 501(c)(3) non-profit organization
            </div>
            
            <div className="flex space-x-6 text-sm">
              <button 
                onClick={() => setIsPrivacyModalOpen(true)}
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setIsTermsModalOpen(true)}
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
          </div>

          {/* Made with Love Note */}
          <div className="text-center pt-4 border-t border-border/50">
            <p className="text-xs text-muted-foreground">
              This website is made with <Heart className="inline h-3 w-3 text-red-500" /> by DOS volunteers. 
              <a 
                href="mailto:webteam@dallasodiasociety.org" 
                className="text-primary hover:text-primary/80 transition-colors ml-1 underline"
              >
                Get in touch
              </a> if you have any questions or feedback!
            </p>
          </div>
        </div>
      </div>

      {/* Modals */}
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
      <TermsOfServiceModal 
        isOpen={isTermsModalOpen} 
        onClose={() => setIsTermsModalOpen(false)} 
      />
      <FeedbackModal 
        isOpen={isFeedbackModalOpen} 
        onClose={() => setIsFeedbackModalOpen(false)} 
      />
    </footer>
  );
};

export default Footer;