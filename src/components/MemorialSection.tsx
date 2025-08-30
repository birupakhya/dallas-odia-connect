import { Card, CardContent } from '@/components/ui/card';
import { Heart, Calendar, User } from 'lucide-react';

const MemorialSection = () => {
  // Sample memorial data - using lorem ipsum for placeholder content
  const memorials = [
    {
      id: '1',
      name: 'Lorem Ipsum Dolor',
      dates: '1940 - 2024',
      photo: '/api/placeholder/200/200',
      tribute: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      family: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      dateOfPassing: 'December 15, 2024'
    },
    {
      id: '2',
      name: 'Sit Amet Consectetur',
      dates: '1955 - 2024',
      photo: '/api/placeholder/200/200',
      tribute: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      family: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      dateOfPassing: 'November 28, 2024'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-muted/20 to-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-lg mb-6">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold gradient-text mb-4">
            In Loving Memory
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We honor and remember our beloved community members who have left us. 
            Their contributions to our cultural heritage and community spirit will forever be cherished.
          </p>
        </div>

        {memorials.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {memorials.map((memorial) => (
              <Card 
                key={memorial.id} 
                className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-white/50 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    {/* Photo */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-primary/20 shadow-md">
                        <img 
                          src={memorial.photo} 
                          alt={`${memorial.name} - In Loving Memory`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-xl font-serif font-bold text-primary mb-1">
                          {memorial.name}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium">
                          {memorial.dates}
                        </p>
                      </div>

                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {memorial.tribute}
                      </p>

                      <div className="pt-2 border-t border-border/30">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                          <User className="h-3 w-3" />
                          <span className="font-medium">Family:</span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">
                          {memorial.family}
                        </p>
                        
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>Passed away: {memorial.dateOfPassing}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4">
              <Heart className="h-8 w-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">
              No memorials to display at this time.
            </p>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            If you would like to add a memorial for a community member, please contact our leadership team. 
            We are here to support families during difficult times and honor the memory of our beloved members.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MemorialSection;
