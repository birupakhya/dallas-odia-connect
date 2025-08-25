import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Search,
  Filter,
  ArrowRight,
  Star,
  Heart,
  Image,
  Play,
  Video,
  Camera,
  Grid3X3,
  List
} from 'lucide-react';
import PhotoGalleryGrid from '@/components/PhotoGalleryGrid';

const EventGallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Sample event photos - replace with actual DOS event photos
  const eventPhotos = [
    // Kumar Purnima 2024
    {
      id: 'kp1',
      src: '/api/placeholder/800/600',
      alt: 'Kumar Purnima 2024 - Traditional Rituals',
      title: 'Traditional Kumar Purnima Rituals',
      description: 'Beautiful traditional rituals performed during Kumar Purnima 2024 celebration',
      date: 'October 15, 2024',
      location: 'Dallas Convention Center',
      attendees: 180,
      category: 'Kumar Purnima 2024',
      eventType: 'Cultural Events'
    },
    {
      id: 'kp2',
      src: '/api/placeholder/800/600',
      alt: 'Kumar Purnima 2024 - Dance Performance',
      title: 'Odissi Dance Performance',
      description: 'Mesmerizing Odissi dance performance by local artists',
      date: 'October 15, 2024',
      location: 'Dallas Convention Center',
      attendees: 180,
      category: 'Kumar Purnima 2024',
      eventType: 'Cultural Events'
    },
    {
      id: 'kp3',
      src: '/api/placeholder/800/600',
      alt: 'Kumar Purnima 2024 - Community Gathering',
      title: 'Community Celebration',
      description: 'DOS community members celebrating Kumar Purnima together',
      date: 'October 15, 2024',
      location: 'Dallas Convention Center',
      attendees: 180,
      category: 'Kumar Purnima 2024',
      eventType: 'Cultural Events'
    },

    // Ratha Yatra 2024
    {
      id: 'ry1',
      src: '/api/placeholder/800/600',
      alt: 'Ratha Yatra 2024 - Chariot Procession',
      title: 'Traditional Chariot Procession',
      description: 'Grand Ratha Yatra chariot procession with community participation',
      date: 'July 20, 2024',
      location: 'Plano Community Center',
      attendees: 200,
      category: 'Ratha Yatra 2024',
      eventType: 'Religious Events'
    },
    {
      id: 'ry2',
      src: '/api/placeholder/800/600',
      alt: 'Ratha Yatra 2024 - Devotional Songs',
      title: 'Devotional Music Performance',
      description: 'Traditional devotional songs and music during Ratha Yatra',
      date: 'July 20, 2024',
      location: 'Plano Community Center',
      attendees: 200,
      category: 'Ratha Yatra 2024',
      eventType: 'Religious Events'
    },
    {
      id: 'ry3',
      src: '/api/placeholder/800/600',
      alt: 'Ratha Yatra 2024 - Community Participation',
      title: 'Community Participation',
      description: 'DOS community members actively participating in Ratha Yatra',
      date: 'July 20, 2024',
      location: 'Plano Community Center',
      attendees: 200,
      category: 'Ratha Yatra 2024',
      eventType: 'Religious Events'
    },

    // Annual Picnic 2024
    {
      id: 'ap1',
      src: '/api/placeholder/800/600',
      alt: 'Annual Picnic 2024 - Family Activities',
      title: 'Family Fun Activities',
      description: 'Children and families enjoying outdoor activities and games',
      date: 'May 25, 2024',
      location: 'White Rock Lake',
      attendees: 120,
      category: 'Annual Picnic 2024',
      eventType: 'Social Events'
    },
    {
      id: 'ap2',
      src: '/api/placeholder/800/600',
      alt: 'Annual Picnic 2024 - Traditional Food',
      title: 'Traditional Odia Cuisine',
      description: 'Delicious traditional Odia food prepared by community members',
      date: 'May 25, 2024',
      location: 'White Rock Lake',
      attendees: 120,
      category: 'Annual Picnic 2024',
      eventType: 'Social Events'
    },
    {
      id: 'ap3',
      src: '/api/placeholder/800/600',
      alt: 'Annual Picnic 2024 - Community Bonding',
      title: 'Community Bonding',
      description: 'DOS members strengthening friendships and community bonds',
      date: 'May 25, 2024',
      location: 'White Rock Lake',
      attendees: 120,
      category: 'Annual Picnic 2024',
      eventType: 'Social Events'
    },

    // Odia Language Workshop 2024
    {
      id: 'olw1',
      src: '/api/placeholder/800/600',
      alt: 'Odia Language Workshop 2024 - Learning Session',
      title: 'Language Learning Session',
      description: 'Children and adults learning Odia language together',
      date: 'September 2024',
      location: 'Irving Library',
      attendees: 45,
      category: 'Odia Language Workshop 2024',
      eventType: 'Educational'
    },
    {
      id: 'olw2',
      src: '/api/placeholder/800/600',
      alt: 'Odia Language Workshop 2024 - Cultural Activities',
      title: 'Cultural Activities',
      description: 'Interactive cultural activities during language workshop',
      date: 'September 2024',
      location: 'Irving Library',
      attendees: 45,
      category: 'Odia Language Workshop 2024',
      eventType: 'Educational'
    },

    // Charity Fundraiser 2024
    {
      id: 'cf1',
      src: '/api/placeholder/800/600',
      alt: 'Charity Fundraiser 2024 - Community Support',
      title: 'Community Support',
      description: 'DOS community showing support for charitable causes',
      date: 'December 15, 2024',
      location: 'Plano Event Center',
      attendees: 100,
      category: 'Charity Fundraiser 2024',
      eventType: 'Charity'
    },
    {
      id: 'cf2',
      src: '/api/placeholder/800/600',
      alt: 'Charity Fundraiser 2024 - Fundraising Activities',
      title: 'Fundraising Activities',
      description: 'Various fundraising activities and community participation',
      date: 'December 15, 2024',
      location: 'Plano Event Center',
      attendees: 100,
      category: 'Charity Fundraiser 2024',
      eventType: 'Charity'
    }
  ];

  const events = ['all', ...new Set(eventPhotos.map(photo => photo.category))];

  const filteredPhotos = eventPhotos.filter(photo => {
    const matchesSearch = photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         photo.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesEvent = selectedEvent === 'all' || photo.category === selectedEvent;
    return matchesSearch && matchesEvent;
  });

  const getEventTypeColor = (eventType: string) => {
    switch (eventType) {
      case 'Cultural Events':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Religious Events':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Social Events':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Educational':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Charity':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
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
              Event Photos & Videos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Relive the magic of our DOS events through beautiful photos and videos. 
              Each image captures the spirit, joy, and cultural richness of our community celebrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Image className="mr-2 h-5 w-5" />
                Browse Photos
              </Button>
              <Button variant="outline" size="lg">
                <Video className="mr-2 h-5 w-5" />
                Watch Videos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search photos and videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Event Filter */}
            <div className="flex gap-2">
              {events.map((event) => (
                <Button
                  key={event}
                  variant={selectedEvent === event ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedEvent(event)}
                >
                  {event === 'all' ? 'All Events' : event}
                </Button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-1">
              <Button
                variant={viewMode === 'grid' ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-primary">{eventPhotos.length}</div>
              <div className="text-sm text-muted-foreground">Total Photos</div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-primary">{events.length - 1}</div>
              <div className="text-sm text-muted-foreground">Events Covered</div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-primary">12</div>
              <div className="text-sm text-muted-foreground">Videos</div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-primary">645</div>
              <div className="text-sm text-muted-foreground">Total Attendees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoGalleryGrid
        photos={filteredPhotos}
        title="Event Memories"
        subtitle="Click on any photo to view it in full size with our iPhone-like gallery viewer"
        showFilters={false}
      />

      {/* Event Highlights */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
            Featured Events
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.slice(1, 7).map((event) => {
              const eventPhotos = eventPhotos.filter(photo => photo.category === event);
              const eventType = eventPhotos[0]?.eventType || 'Cultural Events';
              
              return (
                <Card key={event} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="space-y-2">
                      <CardTitle className="text-xl">{event}</CardTitle>
                      <Badge className={getEventTypeColor(eventType)}>
                        {eventType}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Image className="h-4 w-4" />
                        <span>{eventPhotos.length} photos</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Play className="h-4 w-4" />
                        <span>2 videos</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Beautiful memories from our {event.toLowerCase()} celebration.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      View Event Photos
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
            Share Your Event Photos
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Have photos from DOS events? Share them with our community! 
            Your memories help preserve our cultural heritage and strengthen community bonds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <Camera className="mr-2 h-5 w-5" />
              Upload Photos
            </Button>
            <Button variant="outline" size="lg">
              <Calendar className="mr-2 h-5 w-5" />
              View Upcoming Events
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EventGallery;
