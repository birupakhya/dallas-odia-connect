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
  Search,
  Filter,
  ArrowRight,
  Star,
  Heart,
  Image,
  Play,
  Award,
  Trophy
} from 'lucide-react';

const PastEvents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');

  // Sample past events data
  const pastEvents = [
    {
      id: '1',
      title: 'Ratha Yatra 2024',
      date: 'July 20, 2024',
      time: '4:00 PM - 8:00 PM',
      location: 'Plano Community Center',
      description: 'Successful Ratha Yatra celebration with over 200 community members participating in traditional ceremonies and cultural activities.',
      category: 'Religious Events',
      attendees: 200,
      photos: 45,
      videos: 3,
      highlights: ['Traditional ceremony', 'Community participation', 'Cultural celebration'],
      achievements: ['Best Community Event 2024', 'Cultural Excellence Award'],
      memories: 'The 2024 Ratha Yatra was a spectacular celebration that brought together our entire community. The traditional chariot procession, devotional songs, and cultural performances created an unforgettable experience for all attendees.',
      featured: true
    },
    {
      id: '2',
      title: 'Annual Picnic 2024',
      date: 'May 25, 2024',
      time: '11:00 AM - 4:00 PM',
      location: 'White Rock Lake',
      description: 'Wonderful family picnic with traditional Odia food, games, and community bonding activities.',
      category: 'Social Events',
      attendees: 120,
      photos: 38,
      videos: 2,
      highlights: ['Family activities', 'Traditional food', 'Outdoor games'],
      achievements: ['Community Bonding Award'],
      memories: 'Our annual picnic at White Rock Lake was a perfect day filled with laughter, traditional Odia cuisine, and community bonding. Children enjoyed various games while adults shared stories and strengthened friendships.',
      featured: false
    },
    {
      id: '3',
      title: 'Kumar Purnima 2024',
      date: 'October 15, 2024',
      time: '6:00 PM - 10:00 PM',
      location: 'Dallas Convention Center',
      description: 'Magical Kumar Purnima celebration featuring traditional rituals, classical dance performances, and community festivities.',
      category: 'Cultural Events',
      attendees: 180,
      photos: 52,
      videos: 4,
      highlights: ['Traditional rituals', 'Cultural performances', 'Odia cuisine'],
      achievements: ['Cultural Excellence Award', 'Best Traditional Event'],
      memories: 'The 2024 Kumar Purnima celebration was a magical evening that perfectly captured the essence of Odia culture. The traditional rituals, mesmerizing dance performances, and authentic cuisine created an atmosphere of pure cultural celebration.',
      featured: true
    },
    {
      id: '4',
      title: 'Odia Language Workshop 2024',
      date: 'September 2024',
      time: 'Weekly Sessions',
      location: 'Irving Library',
      description: 'Successful language workshop series helping children and adults learn Odia language and cultural heritage.',
      category: 'Educational',
      attendees: 45,
      photos: 25,
      videos: 1,
      highlights: ['Language learning', 'Cultural education', 'Interactive sessions'],
      achievements: ['Educational Excellence Award'],
      memories: 'Our Odia language workshop series was a tremendous success, with participants of all ages learning to read, write, and speak Odia. The interactive sessions and cultural activities made learning both fun and meaningful.',
      featured: false
    },
    {
      id: '5',
      title: 'Charity Fundraiser 2024',
      date: 'December 15, 2024',
      time: '7:00 PM - 11:00 PM',
      location: 'Plano Event Center',
      description: 'Successful charity fundraiser supporting community development projects and charitable causes.',
      category: 'Charity',
      attendees: 100,
      photos: 30,
      videos: 2,
      highlights: ['Charitable giving', 'Community support', 'Networking'],
      achievements: ['Charity Excellence Award', 'Community Impact Award'],
      memories: 'The 2024 charity fundraiser was a heartwarming event that demonstrated our community\'s commitment to giving back. The generous donations and community support will help numerous families and causes.',
      featured: true
    },
    {
      id: '6',
      title: 'Odissi Dance Performance 2024',
      date: 'November 20, 2024',
      time: '7:00 PM - 9:00 PM',
      location: 'Dallas Arts District',
      description: 'Stunning Odissi dance performance showcasing classical Indian dance forms and cultural heritage.',
      category: 'Cultural Events',
      attendees: 80,
      photos: 28,
      videos: 3,
      highlights: ['Dance performance', 'Cultural showcase', 'Artistic excellence'],
      achievements: ['Artistic Excellence Award'],
      memories: 'The Odissi dance performance was a mesmerizing showcase of classical Indian dance. The graceful movements, traditional music, and cultural storytelling captivated the audience and celebrated our rich heritage.',
      featured: false
    }
  ];

  const years = ['all', '2024', '2023', '2022'];

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
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
              Past Events & Memories
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Relive the magic of our community events through photos, videos, and cherished memories. 
              Each event represents the strength and unity of our DOS family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Image className="mr-2 h-5 w-5" />
                View Photo Gallery
              </Button>
              <Button variant="outline" size="lg">
                <Play className="mr-2 h-5 w-5" />
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
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span className="text-sm">{event.attendees} attendees</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {event.description}
                    </p>

                    {/* Media Stats */}
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Image className="h-4 w-4" />
                        <span>{event.photos} photos</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Play className="h-4 w-4" />
                        <span>{event.videos} videos</span>
                      </div>
                    </div>

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

                    {/* Achievements */}
                    {event.achievements.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-foreground">Achievements:</h4>
                        <div className="flex flex-wrap gap-1">
                          {event.achievements.map((achievement, index) => (
                            <Badge key={index} className="bg-yellow-100 text-yellow-800 border-yellow-200 text-xs">
                              <Trophy className="h-3 w-3 mr-1" />
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2 border-t border-border/50">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Image className="mr-2 h-4 w-4" />
                        Photos
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Play className="mr-2 h-4 w-4" />
                        Videos
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Memories Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12 text-center">
            Community Memories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.slice(0, 4).map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{event.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {event.memories}
                  </p>
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
    </div>
  );
};

export default PastEvents;
