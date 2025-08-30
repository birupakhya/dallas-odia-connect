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
  Clock, 
  ExternalLink, 
  Search,
  Filter,
  ArrowRight,
  Star,
  Heart
} from 'lucide-react';

const UpcomingEvents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample upcoming events data
  const upcomingEvents = [
    {
      id: '1',
      title: 'Kumar Purnima 2025',
      date: 'November 1st, 2025',
      time: '12 PM - 11 PM',
      location: '200 S. Heartz Road, Coppell 75019',
      description: 'Annual Kumar Purnima celebration with traditional rituals, cultural performances, and community bonding.',
      category: 'Cultural Events',
      status: 'Registration Open',
      capacity: 200,
      registered: 145,
      price: '$25',
      featured: true,
      highlights: ['Traditional rituals', 'Cultural performances', 'Odia cuisine']
    }
    // Commented out other events for now
    // {
    //   id: '2',
    //   title: 'Odia Language Workshop',
    //   date: 'Every Saturday',
    //   time: '10:00 AM - 12:00 PM',
    //   location: 'Irving Community Center',
    //   description: 'Weekly Odia language classes for children and adults. Learn to read, write, and speak Odia.',
    //   category: 'Educational',
    //   status: 'Ongoing',
    //   capacity: 30,
    //   registered: 25,
    //   price: '$10/session',
    //   featured: false,
    //   highlights: ['Language learning', 'Cultural education', 'Interactive sessions']
    // },
    // {
    //   id: '3',
    //   title: 'Ratha Yatra 2025',
    //   date: 'July 20, 2025',
    //   time: '4:00 PM - 8:00 PM',
    //   location: 'Plano Community Center',
    //   description: 'Grand Ratha Yatra celebration with community participation and traditional ceremonies.',
    //   category: 'Religious Events',
    //   status: 'Coming Soon',
    //   capacity: 250,
    //   registered: 0,
    //   price: 'Free',
    //   featured: true,
    //   highlights: ['Traditional ceremony', 'Community participation', 'Cultural celebration']
    // },
    // {
    //   id: '4',
    //   title: 'Annual Community Picnic',
    //   date: 'May 25, 2025',
    //   time: '11:00 AM - 4:00 PM',
    //   location: 'White Rock Lake',
    //   description: 'Family-friendly picnic with traditional Odia food, games, and community activities.',
    //   category: 'Social Events',
    //   status: 'Registration Open',
    //   capacity: 150,
    //   registered: 89,
    //   price: '$15',
    //   featured: false,
    //   highlights: ['Family activities', 'Traditional food', 'Outdoor games']
    // },
    // {
    //   id: '5',
    //   title: 'Odissi Dance Workshop',
    //   date: 'March 15, 2025',
    //   time: '2:00 PM - 5:00 PM',
    //   location: 'Dallas Arts District',
    //   description: 'Learn the basics of Odissi dance from professional instructors. All skill levels welcome.',
    //   category: 'Cultural Events',
    //   status: 'Registration Open',
    //   capacity: 40,
    //   registered: 32,
    //   price: '$30',
    //   featured: false,
    //   highlights: ['Dance instruction', 'Cultural learning', 'Professional teachers']
    // },
    // {
    //   id: '6',
    //   title: 'Charity Fundraiser',
    //   date: 'December 15, 2025',
    //   time: '7:00 PM - 11:00 PM',
    //   location: 'Plano Event Center',
    //   description: 'Annual fundraiser for community development projects and charitable causes.',
    //   category: 'Charity',
    //   status: 'Coming Soon',
    //   capacity: 100,
    //   registered: 0,
    //   price: '$50',
    //   featured: true,
    //   highlights: ['Charitable giving', 'Community support', 'Networking']
    // }
  ];

  const categories = ['all', ...new Set(upcomingEvents.map(event => event.category))];

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Registration Open':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Ongoing':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Coming Soon':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getRegistrationProgress = (registered: number, capacity: number) => {
    return (registered / capacity) * 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
              Upcoming Events
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover exciting DOS events and activities coming up. Register early to secure your spot 
              and be part of our vibrant community celebrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Calendar className="mr-2 h-5 w-5" />
                View Calendar
              </Button>
              <Button variant="outline" size="lg">
                <ExternalLink className="mr-2 h-5 w-5" />
                Subscribe to Updates
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
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category === 'all' ? 'All Events' : category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-muted-foreground">
                <p className="text-lg mb-2">No events found</p>
                <p className="text-sm">Try adjusting your search or filter criteria.</p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <Card key={event.id} className="group hover:shadow-lg transition-all duration-300 relative">
                  {event.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader>
                    <div className="space-y-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {event.title}
                      </CardTitle>
                      <Badge className={getStatusColor(event.status)}>
                        {event.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Event Details */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span className="text-sm">{event.registered}/{event.capacity} registered</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {event.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-foreground">Highlights:</h4>
                      <div className="flex flex-wrap gap-1">
                        {event.highlights.map((highlight, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            <Heart className="h-3 w-3 mr-1" />
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Registration Progress */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Registration</span>
                        <span className="font-medium">{Math.round(getRegistrationProgress(event.registered, event.capacity))}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${getRegistrationProgress(event.registered, event.capacity)}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between pt-2 border-t border-border/50">
                      <div className="text-lg font-semibold text-primary">
                        {event.price}
                      </div>
                      <Button variant="outline" size="sm" className="group">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
            Stay Connected with DOS Events
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Never miss an important event! Subscribe to our newsletter and get notified about 
            upcoming events, cultural celebrations, and community activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="flex-1"
            />
            <Button variant="hero">
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default UpcomingEvents;
