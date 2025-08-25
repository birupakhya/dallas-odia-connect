import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Calendar, Heart } from 'lucide-react';
import heroImage from '@/assets/hero-temple.jpg';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-warm">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Traditional Odisha temple with golden sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                Dallas Odia Society
              </h1>
              <p className="text-xl md:text-2xl font-light opacity-90">
                Preserving Culture, Building Community
              </p>
              <p className="text-lg opacity-80 max-w-lg">
                Experience "Home Away From Home" through cultural celebrations, meaningful connections, 
                and an inclusive Odia community in the Dallas-Fort Worth area.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Join Our Community
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="warm" size="lg">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8" />
                </div>
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm opacity-80">Members</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="h-8 w-8" />
                </div>
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm opacity-80">Years</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Heart className="h-8 w-8" />
                </div>
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm opacity-80">Events</div>
              </div>
            </div>
          </div>

          {/* Mission Statement Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-elevated border border-white/20">
            <h3 className="text-2xl font-serif font-semibold text-white mb-6">Our Vision</h3>
            <blockquote className="text-white/90 text-lg italic leading-relaxed">
              "To be an inclusive Odia community in the Dallas Fort-Worth metropolitan area where 
              society members cooperate and collaborate to promote and celebrate Odia culture, 
              tradition, to build a reliable support system for the members in the community and 
              to provide an experience of 'Home away from Home' to its members."
            </blockquote>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;