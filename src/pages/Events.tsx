import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Clock, ExternalLink, Image, Play } from 'lucide-react';
import PhotoGalleryGrid from '@/components/PhotoGalleryGrid';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  attendees: number;
  status: 'upcoming' | 'ongoing' | 'past';
  category: string;
  photos: Photo[];
}

interface Photo {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  date?: string;
  location?: string;
  attendees?: number;
  category?: string;
}

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Sample event photos - replace with actual DOS event photos
  const samplePhotos: Photo[] = [
    {
      id: '1',
      src: '/api/placeholder/800/600',
      alt: 'Kumar Purnima Celebration 2024',
      title: 'Kumar Purnima Celebration',
      description: 'Annual Kumar Purnima celebration with traditional rituals and cultural performances',
      date: 'October 2024',
      location: 'Dallas Convention Center',
      attendees: 150,
      category: 'Cultural Events'
    },
    {
      id: '2',
      src: '/api/placeholder/800/600',
      alt: 'Ratha Yatra Festival',
      title: 'Ratha Yatra Festival',
      description: 'Grand Ratha Yatra celebration with community participation',
      date: 'July 2024',
      location: 'Plano Community Center',
      attendees: 200,
      category: 'Religious Events'
    },
    {
      id: '3',
      src: '/api/placeholder/800/600',
      alt: 'Odia Language Workshop',
      title: 'Odia Language Workshop',
      description: 'Educational workshop for children to learn Odia language and culture',
      date: 'September 2024',
      location: 'Irving Library',
      attendees: 45,
      category: 'Educational'
    },
    {
      id: '4',
      src: '/api/placeholder/800/600',
      alt: 'Community Picnic',
      title: 'Annual Community Picnic',
      description: 'Family-friendly picnic with traditional Odia food and games',
      date: 'May 2024',
      location: 'White Rock Lake',
      attendees: 120,
      category: 'Social Events'
    },
    {
      id: '5',
      src: '/api/placeholder/800/600',
      alt: 'Dance Performance',
      title: 'Classical Dance Performance',
      description: 'Odissi dance performance by local artists',
      date: 'November 2024',
      location: 'Dallas Arts District',
      attendees: 80,
      category: 'Cultural Events'
    },
    {
      id: '6',
      src: '/api/placeholder/800/600',
      alt: 'Charity Fundraiser',
      title: 'Charity Fundraiser',
      description: 'Annual fundraiser for community development projects',
      date: 'December 2024',
      location: 'Plano Event Center',
      attendees: 100,
      category: 'Charity'
    }
  ];

  const upcomingEvents: Event[] = [
    {
      id: '1',
      title: 'Kumar Purnima 2025',
      date: 'November 1st, 2025',
      time: '12 PM - 11 PM',
      location: '200 S. Heartz Road, Coppell 75019',
      description: 'Annual Kumar Purnima celebration with traditional rituals, cultural performances, and community bonding.',
      attendees: 0,
      status: 'upcoming',
      category: 'Cultural Events',
      photos: samplePhotos.filter(p => p.category === 'Cultural Events')
    }
  ];

  const pastEvents: Event[] = [
    {
      id: '1',
      title: 'Ganesh Puja Celebration 2025',
      date: 'August 30, 2025',
      time: '10:30 AM - 1:45 PM',
      location: 'Shri Ram Mandir, 6521 Chase Oaks Blvd, Plano, TX 75023',
      description: 'A divine celebration of Lord Ganesh featuring traditional rituals, cultural performances, and community festivities. The event included morning puja, community lunch, and concluded with clean-up activities.',
      attendees: 0,
      status: 'past',
      category: 'Religious Events',
      photos: samplePhotos.filter(p => p.category === 'Religious Events')
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'ongoing':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'past':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'Upcoming';
      case 'ongoing':
        return 'Ongoing';
      case 'past':
        return 'Past';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
              DOS Events & Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover our vibrant community events, cultural celebrations, and memorable moments 
              captured through the lens of our DOS family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Calendar className="mr-2 h-5 w-5" />
                View Calendar
              </Button>
              <Button variant="outline" size="lg">
                <ExternalLink className="mr-2 h-5 w-5" />
                Join Event
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                      <Badge className={getStatusColor(event.status)}>
                        {getStatusText(event.status)}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    {/* <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} registered</span>
                    </div> */}
                  </div>
                  <p className="text-muted-foreground">{event.description}</p>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf47ibky7itILgmXoLGUZUmxu8-SeFkNc3YlAcOSgehu8PdTg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="hero" className="w-full">
                      Register
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Event Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Relive the magic of our community events through our comprehensive photo gallery. 
              Each event represents the strength and unity of our DOS family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/events/gallery">
                <Button variant="hero" size="lg">
                  <Image className="mr-2 h-5 w-5" />
                  Browse Photo Gallery
                </Button>
              </a>
              <a href="/events/gallery?type=videos">
                <Button variant="outline" size="lg">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Videos
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
            Past Events
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                      <Badge className={getStatusColor(event.status)}>
                        {getStatusText(event.status)}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} attended</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{event.description}</p>
                  <a href="/events/gallery" className="w-full">
                    <Button 
                      variant="outline" 
                      className="w-full"
                    >
                      <Image className="mr-2 h-4 w-4" />
                      View Photo Gallery
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
            Join Our Next Event
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Be part of our vibrant community and create memories that last a lifetime. 
            Stay connected with your cultural roots while building new friendships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/events/upcoming">
              <Button variant="hero" size="lg">
                <Calendar className="mr-2 h-5 w-5" />
                View All Events
              </Button>
            </a>
            <a href="/get-involved/membership">
              <Button variant="outline" size="lg">
                <Users className="mr-2 h-5 w-5" />
                Become a Member
              </Button>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Events;
