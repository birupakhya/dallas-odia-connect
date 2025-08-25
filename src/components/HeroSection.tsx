import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowRight, Users, Calendar, Heart, Star, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-temple.jpg';
import culturalDanceImage from '@/assets/cultural-dance.jpg';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <Carousel 
        opts={{ 
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {/* Default Hero Slide */}
          <CarouselItem>
            <div className="relative bg-gradient-warm">
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
            </div>
          </CarouselItem>

          {/* Kumar Purnima Event Slide */}
          <CarouselItem>
            <div className="relative bg-gradient-cultural">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={culturalDanceImage}
                  alt="Cultural dance performance during Kumar Purnima celebration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-primary/70"></div>
              </div>

              {/* Content */}
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Text Content */}
                  <div className="text-white space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-yellow-300">
                        <Star className="h-6 w-6" />
                        <span className="text-lg font-medium">Featured Event</span>
                      </div>
                      <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                        Kumar Purnima
                      </h1>
                      <p className="text-xl md:text-2xl font-light opacity-90">
                        Celebrating the Festival of Youth & Love
                      </p>
                      <p className="text-lg opacity-80 max-w-lg">
                        Join us for one of Odisha's most beautiful festivals celebrating youth, 
                        love, and the divine union of Radha and Krishna with traditional dances, 
                        music, and community festivities.
                      </p>
                    </div>

                    {/* Event Details */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-yellow-300" />
                        <span className="text-lg font-medium">November 15, 2024</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-yellow-300" />
                        <span>Community Center, Dallas</span>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button variant="hero" size="lg" className="group">
                        Register Now
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button variant="warm" size="lg">
                        Event Details
                      </Button>
                    </div>
                  </div>

                  {/* Event Highlights Card */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-elevated border border-white/20">
                    <h3 className="text-2xl font-serif font-semibold text-white mb-6">Event Highlights</h3>
                    <div className="space-y-4 text-white/90">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2"></div>
                        <span>Traditional Odissi dance performances</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2"></div>
                        <span>Authentic Odia cuisine and sweets</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2"></div>
                        <span>Cultural games and activities for all ages</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2"></div>
                        <span>Community bonding and networking</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
            </div>
          </CarouselItem>
        </CarouselContent>
        
        {/* Navigation Arrows */}
        <CarouselPrevious className="left-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
        <CarouselNext className="right-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
      </Carousel>
    </section>
  );
};

export default HeroSection;