import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, Star } from 'lucide-react';
import communityImage from '@/assets/community-gathering.jpg';
import culturalDanceImage from '@/assets/cultural-dance.jpg';

const CommunityShowcase = () => {
  const testimonials = [
    {
      name: 'Priya Patel',
      role: 'Member since 2018',
      content: 'Dallas Odia Society has been our home away from home. The cultural programs and community support have enriched our lives immensely.',
      rating: 5,
    },
    {
      name: 'Rajesh Mohanty',
      role: 'Member since 2015',
      content: 'The way this community comes together during festivals and celebrations reminds me of back home in Odisha. It\'s truly special.',
      rating: 5,
    },
    {
      name: 'Sunita Das',
      role: 'Member since 2020',
      content: 'As new residents to Dallas, DOS helped us connect with our roots and build lasting friendships. Our children love the cultural programs.',
      rating: 5,
    },
  ];

  const galleries = [
    {
      title: 'Cultural Programs',
      image: culturalDanceImage,
      description: 'Traditional dance performances celebrating our rich heritage',
    },
    {
      title: 'Community Gatherings',
      image: communityImage,
      description: 'Festivals and celebrations that bring families together',
    },
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Community Photos */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold gradient-text mb-4">
              Our Vibrant Community
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Celebrating our culture through dance, music, festivals, and the bonds that make us family
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {galleries.map((gallery, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-cultural transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={gallery.image}
                    alt={gallery.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold mb-2">{gallery.title}</h3>
                    <p className="text-sm opacity-90">{gallery.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="cultural">
              View Photo Gallery
            </Button>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold gradient-text mb-4">
              Community Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our members about their experiences and the impact of our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Quote className="h-8 w-8 text-primary opacity-50" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-cultural rounded-2xl p-12 text-white shadow-elevated">
          <h3 className="text-3xl font-serif font-bold mb-4">
            Ready to Join Our Family?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Experience the warmth of community, celebrate our rich culture, 
            and create lasting memories with the Dallas Odia Society family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Become a Member
            </Button>
            <Button variant="warm" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityShowcase;