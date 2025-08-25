import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Users, 
  Calendar, 
  CreditCard, 
  Phone, 
  Info, 
  Heart 
} from 'lucide-react';

const QuickActions = () => {
  const actions = [
    {
      title: 'About Us',
      description: 'Learn about our history, mission, and leadership',
      icon: Info,
      href: '/about',
      variant: 'default' as const,
    },
    {
      title: 'Upcoming Events',
      description: 'Join our cultural celebrations and community gatherings',
      icon: Calendar,
      href: '/events',
      variant: 'cultural' as const,
    },
    {
      title: 'Become a Member',
      description: 'Join our growing family and experience community',
      icon: Users,
      href: '/membership',
      variant: 'hero' as const,
    },
    {
      title: 'Support Us',
      description: 'Help us continue our cultural and charitable mission',
      icon: Heart,
      href: '/donate',
      variant: 'secondary' as const,
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with our community leaders',
      icon: Phone,
      href: '/contact',
      variant: 'warm' as const,
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold gradient-text mb-4">
            Get Connected
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore everything Dallas Odia Society has to offer. From cultural events to community support, 
            we're here to make you feel at home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {actions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Card 
                key={action.title} 
                className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full shadow-cultural group-hover:animate-float">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {action.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {action.description}
                  </p>
                  <Button 
                    variant={action.variant} 
                    className="w-full mt-4"
                    asChild
                  >
                    <a href={action.href}>
                      Learn More
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;