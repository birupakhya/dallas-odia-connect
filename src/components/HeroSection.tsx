import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowRight, Users, Calendar, Heart, Star, MapPin, Clock } from 'lucide-react';
import heroImage from '@/assets/new-hero-temple-cropped.jpg';
import culturalDanceImage from '@/assets/cultural-dance.jpg';
import ganeshPujaBg from '@/assets/ganesh-puja-bg.jpg';
import Autoplay from 'embla-carousel-autoplay';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <Carousel 
        opts={{ 
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({ delay: 15000, stopOnInteraction: false })
        ]}
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
                        Non-Profit Organization for Socio-Cultural & Charitable Purposes
                      </p>
                      <p className="text-lg opacity-80 max-w-lg">
                        DALLAS ODIA SOCIETY is a non-profit organization operated exclusively for 
                        socio-cultural and charitable purposes, serving the Odia community in the 
                        Dallas-Fort Worth metropolitan area.
                      </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link to="/get-involved/membership">
                        <Button variant="hero" size="lg" className="group">
                          Become a Member
                          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                      <Link to="/about">
                        <Button variant="warm" size="lg">
                          Learn More
                        </Button>
                      </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 pt-8">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Users className="h-8 w-8" />
                        </div>
                        <div className="text-2xl font-bold">20+</div>
                        <div className="text-sm opacity-80">Years</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Calendar className="h-8 w-8" />
                        </div>
                        <div className="text-2xl font-bold">2004</div>
                        <div className="text-sm opacity-80">Founded</div>
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

          {/* Ganesh Puja Celebration 2025 Slide */}
          <CarouselItem>
            <div className="relative bg-gradient-warm">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={ganeshPujaBg}
                  alt="Ganesh Puja celebration background"
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
                      <div className="flex items-center gap-2 text-yellow-300">
                        <Star className="h-6 w-6" />
                        <span className="text-lg font-medium">Recent Event</span>
                      </div>
                      <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                        Ganesh Puja Celebration 2025
                      </h1>
                      <p className="text-xl md:text-2xl font-light opacity-90">
                        A Divine Celebration of Lord Ganesh
                      </p>
                      <p className="text-lg opacity-80 max-w-lg">
                        Join us in celebrating the divine presence of Lord Ganesh through 
                        traditional rituals, cultural performances, and community festivities. 
                        Experience the spiritual essence of this sacred celebration.
                      </p>
                    </div>

                    {/* Event Details */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-yellow-300" />
                        <span className="text-lg font-medium">Saturday, August 30th, 2025</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-yellow-300" />
                        <span>10:30 AM - 1:45 PM</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-yellow-300" />
                        <span>Shri Ram Mandir, 6521 Chase Oaks Blvd, Plano, TX 75023</span>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link to="/events/gallery">
                        <Button variant="hero" size="lg" className="group">
                          View Gallery
                          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                      <Button variant="warm" size="lg">
                        Learn More
                      </Button>
                    </div>
                  </div>

                  {/* Event Highlights Card */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-elevated border border-white/20">
                    <h3 className="text-2xl font-serif font-semibold text-white mb-6">Event Highlights</h3>
                    <div className="space-y-4 text-white/90">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2"></div>
                        <span>Traditional Ganesh Puja rituals</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2"></div>
                        <span>Cultural dance performances</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2"></div>
                        <span>Traditional Odia cuisine</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2"></div>
                        <span>Community celebration and bonding</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
            </div>
          </CarouselItem>

          {/* Kumar Purnima Survey 2025 Slide */}
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
                        <span className="text-lg font-medium">Important Survey</span>
                      </div>
                      <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                        Kumar Purnima Survey 2025
                      </h1>
                      <p className="text-xl md:text-2xl font-light opacity-90">
                        Please RSVP To KP-2025
                      </p>
                      <p className="text-lg opacity-80 max-w-lg">
                        Help us plan the perfect Kumar Purnima celebration for 2025. 
                        Your input is valuable in making this event a memorable experience 
                        for our entire community.
                      </p>
                    </div>

                    {/* Event Details */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-yellow-300" />
                        <span className="text-lg font-medium">November 1st, 2025</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-yellow-300" />
                        <span>12 PM - 11 PM</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-yellow-300" />
                        <span>200 S. Heartz Road, Coppell 75019</span>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSf47ibky7itILgmXoLGUZUmxu8-SeFkNc3YlAcOSgehu8PdTg/viewform" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button variant="hero" size="lg" className="group">
                          Take Survey Now
                          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </a>
                      <Button variant="warm" size="lg">
                        Learn About KP-2025
                      </Button>
                    </div>
                  </div>

                  {/* Survey Highlights Card */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-elevated border border-white/20">
                    <h3 className="text-2xl font-serif font-semibold text-white mb-6">Survey Topics</h3>
                    <div className="space-y-4 text-white/90">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2"></div>
                        <span>Preferred event date and time</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2"></div>
                        <span>Venue preferences and accessibility</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2"></div>
                        <span>Cultural activities and performances</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2"></div>
                        <span>Food preferences and dietary requirements</span>
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