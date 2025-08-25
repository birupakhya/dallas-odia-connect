import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  ExternalLink, 
  CheckCircle, 
  AlertCircle,
  Star,
  Heart,
  Share2
} from 'lucide-react';

const CurrentEvent = () => {
  // Sample current event data
  const currentEvent = {
    title: "Kumar Purnima 2025",
    status: "Registration Open",
    date: "October 15, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Dallas Convention Center",
    address: "650 S Griffin St, Dallas, TX 75202",
    description: "Join us for the most anticipated cultural celebration of the year! Kumar Purnima 2025 promises to be an unforgettable evening filled with traditional rituals, mesmerizing cultural performances, and community bonding.",
    longDescription: `Kumar Purnima, also known as Kumara Purnima, is one of the most significant festivals celebrated by the Odia community. This year, we're bringing together the best of Odia culture, tradition, and community spirit in a grand celebration that you won't want to miss.

Our event will feature:
• Traditional Kumar Purnima rituals and prayers
• Classical Odissi dance performances
• Live Odia music and cultural programs
• Traditional Odia cuisine and food stalls
• Children's cultural activities and competitions
• Community networking and socializing
• Cultural exhibition and information booths`,
    registrationDeadline: "October 10, 2025",
    capacity: 200,
    registered: 145,
    price: {
      member: "$25",
      nonMember: "$35",
      children: "$15"
    },
    highlights: [
      "Traditional Kumar Purnima rituals",
      "Live cultural performances",
      "Authentic Odia cuisine",
      "Children's activities",
      "Cultural exhibition",
      "Community networking"
    ],
    schedule: [
      { time: "6:00 PM", activity: "Registration & Welcome" },
      { time: "6:30 PM", activity: "Traditional Rituals" },
      { time: "7:15 PM", activity: "Cultural Performances" },
      { time: "8:00 PM", activity: "Dinner & Socializing" },
      { time: "9:00 PM", activity: "Children's Activities" },
      { time: "9:30 PM", activity: "Community Networking" },
      { time: "10:00 PM", activity: "Closing Ceremony" }
    ],
    performers: [
      "Odissi Dance Group - Dallas",
      "Odia Music Ensemble",
      "Children's Cultural Group",
      "Traditional Ritual Specialists"
    ]
  };

  const registrationProgress = (currentEvent.registered / currentEvent.capacity) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Event Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  {currentEvent.status}
                </Badge>
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary">
                  {currentEvent.title}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {currentEvent.description}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary">{currentEvent.registered}</div>
                  <div className="text-sm text-muted-foreground">Registered</div>
                </div>
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary">{currentEvent.capacity}</div>
                  <div className="text-sm text-muted-foreground">Capacity</div>
                </div>
              </div>

              {/* Registration Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Registration Progress</span>
                  <span className="font-medium">{Math.round(registrationProgress)}%</span>
                </div>
                <Progress value={registrationProgress} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  {currentEvent.capacity - currentEvent.registered} spots remaining
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="group">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Register Now
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="mr-2 h-5 w-5" />
                  Share Event
                </Button>
              </div>
            </div>

            {/* Event Card */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-elevated border border-white/20">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-5 w-5" />
                    <span>{currentEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-5 w-5" />
                    <span>{currentEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-5 w-5" />
                    <span>{currentEvent.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-5 w-5" />
                    <span>{currentEvent.registered} registered</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">Registration Fees</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">DOS Members</span>
                      <span className="font-medium">{currentEvent.price.member}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Non-Members</span>
                      <span className="font-medium">{currentEvent.price.nonMember}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Children (5-12)</span>
                      <span className="font-medium">{currentEvent.price.children}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground">
                    <AlertCircle className="inline h-4 w-4 mr-1" />
                    Registration deadline: {currentEvent.registrationDeadline}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About the Event */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">About the Event</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-muted-foreground leading-relaxed">
                      {currentEvent.longDescription}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Event Schedule */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">Event Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {currentEvent.schedule.map((item, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
                        <div className="text-sm font-medium text-primary min-w-[80px]">
                          {item.time}
                        </div>
                        <div className="flex-1 text-muted-foreground">
                          {item.activity}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Performers */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">Featured Performers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {currentEvent.performers.map((performer, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                        <Star className="h-5 w-5 text-yellow-500" />
                        <span className="text-muted-foreground">{performer}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Event Highlights */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-serif">Event Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {currentEvent.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Heart className="h-4 w-4 text-red-500" />
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Location Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-serif">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="font-medium">{currentEvent.location}</div>
                    <div className="text-sm text-muted-foreground">{currentEvent.address}</div>
                    <Button variant="outline" size="sm" className="w-full">
                      <MapPin className="mr-2 h-4 w-4" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-serif">Questions?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Have questions about this event? Contact our event coordinator.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Contact Coordinator
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
            Don't Miss This Special Celebration
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join us for an unforgettable evening of culture, tradition, and community. 
            Register now to secure your spot!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <CheckCircle className="mr-2 h-5 w-5" />
              Register Now
            </Button>
            <Button variant="outline" size="lg">
              <Share2 className="mr-2 h-5 w-5" />
              Share with Friends
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CurrentEvent;
