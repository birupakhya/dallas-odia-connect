import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Search,
  Filter,
  ArrowRight,
  Star,
  Image,
  Users,
  Play
} from 'lucide-react';

const PastEvents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');

  // Sample past events data
  const pastEvents = [
    {
      id: '1',
      title: 'Ganesh Puja Celebration 2025',
      date: 'August 30, 2025',
      time: '10:30 AM - 1:45 PM',
      location: 'Shri Ram Mandir, 6521 Chase Oaks Blvd, Plano, TX 75023',
      description: 'A divine celebration of Lord Ganesh featuring traditional rituals, cultural performances, and community festivities. The event included morning puja, community lunch, and concluded with clean-up activities.',
      category: 'Religious Events',
      featured: true
    }
  ];

  const years = ['all', '2025'];

  const filteredEvents = pastEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const eventYear = event.date.split(' ')[2]; // Extract year from date
    const matchesYear = selectedYear === 'all' || eventYear === selectedYear;
    return matchesSearch && matchesYear;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
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
              Past Events & Photo Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Relive the magic of our community events through our comprehensive photo gallery. 
              Each event represents the strength and unity of our DOS family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/events/gallery">
                <Button variant="hero" size="lg">
                  <Image className="mr-2 h-5 w-5" />
                  Browse Photo Gallery
                </Button>
              </Link>
              <Link to="/events/gallery?type=videos">
                <Button variant="outline" size="lg">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Videos
                </Button>
              </Link>
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
                placeholder="Search past events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Year Filter */}
            <div className="flex gap-2">
              {years.map((year) => (
                <Button
                  key={year}
                  variant={selectedYear === year ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedYear(year)}
                >
                  {year === 'all' ? 'All Years' : year}
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
                <p className="text-lg mb-2">No past events found</p>
                <p className="text-sm">Try adjusting your search or year filter.</p>
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
                      <Badge className={getCategoryColor(event.category)}>
                        {event.category}
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
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {event.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2 border-t border-border/50">
                      <Link to="/events/gallery" className="flex-1">
                        <Button variant="default" size="sm" className="w-full">
                          <Image className="mr-2 h-4 w-4" />
                          Photo Gallery
                        </Button>
                      </Link>
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
            Create New Memories Together
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join us for upcoming events and be part of creating new memories for our community. 
            Every event is an opportunity to strengthen our bonds and celebrate our culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <Calendar className="mr-2 h-5 w-5" />
              View Upcoming Events
            </Button>
            <Button variant="outline" size="lg">
              <Users className="mr-2 h-5 w-5" />
              Become a Member
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PastEvents;
