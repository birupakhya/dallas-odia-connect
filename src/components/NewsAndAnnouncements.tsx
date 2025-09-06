import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, Image } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsAndAnnouncements = () => {
  const announcements = [
    {
      id: 1,
      title: 'Kumar Purnima 2025 - Please RSVP To KP-2025',
      date: '2025-11-01',
      type: 'Survey',
      excerpt: 'Help us plan the perfect Kumar Purnima celebration for 2025. Your input is valuable in making this event a memorable experience for our entire community.',
      urgent: true,
    },
    {
      id: 2,
      title: 'Ganesh Puja Celebration 2025 - Photo Gallery',
      date: '2025-08-30',
      type: 'Gallery',
      excerpt: 'Relive the divine moments from our Ganesh Puja celebration. Browse through photos and videos from this memorable community event.',
      urgent: false,
      linkTo: '/events/gallery',
    },
  ];

  const formatDate = (dateString: string) => {
    // Handle date string to avoid timezone issues
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric',
      timeZone: 'America/Chicago' // Dallas timezone
    });
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Survey': return 'bg-primary text-primary-foreground';
      case 'Gallery': return 'bg-secondary text-secondary-foreground';
      case 'Information': return 'bg-secondary text-secondary-foreground';
      case 'Community': return 'bg-accent text-accent-foreground';
      case 'Membership': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold gradient-text mb-4">
              News & Announcements
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest community news and upcoming activities
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {announcements.map((announcement) => (
            <Card 
              key={announcement.id} 
              className={`group hover:shadow-warm transition-all duration-300 hover:-translate-y-1 ${
                announcement.urgent ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge className={getTypeColor(announcement.type)}>
                    {announcement.type}
                  </Badge>
                  {announcement.urgent && (
                    <Badge variant="destructive" className="animate-pulse">
                      Urgent
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {announcement.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center text-sm text-muted-foreground space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(announcement.date)}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {announcement.excerpt}
                </p>
                
                {announcement.type === 'Survey' ? (
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf47ibky7itILgmXoLGUZUmxu8-SeFkNc3YlAcOSgehu8PdTg/viewform" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost" className="group/btn p-0 h-auto">
                      Take Survey Now
                      <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                ) : announcement.type === 'Gallery' ? (
                  <Link to={announcement.linkTo || '/events/gallery'}>
                    <Button variant="ghost" className="group/btn p-0 h-auto">
                      <Image className="h-4 w-4 mr-1" />
                      View Photo Gallery
                      <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                ) : (
                  <Button variant="ghost" className="group/btn p-0 h-auto">
                    Read More 
                    <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Email Subscription */}
        {/* <div className="mt-16 bg-gradient-warm rounded-2xl p-8 text-center shadow-elevated">
          <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
            Stay Connected
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Please click here to subscribe to our Email group and receive the latest updates about events, 
            announcements, and community news directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button variant="hero">
              Subscribe to Email Group
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default NewsAndAnnouncements;