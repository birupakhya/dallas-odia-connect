import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const NewsAndAnnouncements = () => {
  const announcements = [
    {
      id: 1,
      title: 'Kumar Purnima Celebration 2025',
      date: '2024-11-15',
      type: 'Event',
      excerpt: 'Join us for the traditional Kumar Purnima celebration with cultural programs, traditional food, and community bonding.',
      urgent: true,
    },
    {
      id: 2,
      title: 'New Member Orientation',
      date: '2024-11-20',
      type: 'Meeting',
      excerpt: 'Welcome session for new members to learn about our community, activities, and how to get involved.',
      urgent: false,
    },
    {
      id: 3,
      title: 'Odia Language Classes for Children',
      date: '2024-12-01',
      type: 'Education',
      excerpt: 'Starting December, we will offer Odia language classes for children to help preserve our mother tongue.',
      urgent: false,
    },
    {
      id: 4,
      title: 'Annual Cultural Program Planning',
      date: '2024-11-25',
      type: 'Planning',
      excerpt: 'Community meeting to plan our annual cultural program. All members welcome to contribute ideas.',
      urgent: false,
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Event': return 'bg-primary text-primary-foreground';
      case 'Meeting': return 'bg-secondary text-secondary-foreground';
      case 'Education': return 'bg-accent text-accent-foreground';
      case 'Planning': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold gradient-text mb-4">
              News & Announcements
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest community news and upcoming activities
            </p>
          </div>
          <Button variant="warm">
            View All News
          </Button>
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
                
                <Button variant="ghost" className="group/btn p-0 h-auto">
                  Read More 
                  <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-warm rounded-2xl p-8 text-center shadow-elevated">
          <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
            Stay Connected
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our email newsletter to receive the latest updates about events, 
            announcements, and community news directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button variant="hero">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndAnnouncements;