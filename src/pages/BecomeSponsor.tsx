import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, DollarSign, Gift, HelpCircle, CreditCard, Package } from 'lucide-react';

const BecomeSponsor = () => {
  const sponsorshipTopics = [
    {
      title: "Different Sponsorship Options",
      description: "Explore various sponsorship levels and opportunities to support DOS events and initiatives",
      icon: Star,
      status: "Coming Soon"
    },
    {
      title: "Benefits of Sponsorship",
      description: "Discover the advantages and recognition opportunities available to DOS sponsors",
      icon: Gift,
      status: "Coming Soon"
    },
    {
      title: "Payment Methods for Sponsorship",
      description: "Learn about the different ways to make sponsorship payments and contributions",
      icon: CreditCard,
      status: "Coming Soon"
    },
    {
      title: "Welcome Kit for New Sponsor",
      description: "Information about the welcome package and resources provided to new sponsors",
      icon: Package,
      status: "Coming Soon"
    },
    {
      title: "Standard FAQs about Sponsorship",
      description: "Common questions and answers about becoming a DOS sponsor",
      icon: HelpCircle,
      status: "Coming Soon"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold gradient-text mb-6">
            Become a Sponsor
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Support the Dallas Odia Society and help us continue our mission of preserving Odia culture 
            and building community in the DFW area.
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-20">
          <div className="bg-gradient-warm rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Why Sponsor DOS?
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Your sponsorship helps us organize cultural events, support community initiatives, 
              and maintain our mission of providing a "Home Away From Home" for Odia families in Dallas-Fort Worth. 
              As a non-profit organization, we rely on the generous support of sponsors like you to continue our work.
            </p>
          </div>
        </section>

        {/* Sponsorship Topics */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold gradient-text mb-4">
              Sponsorship Information
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're working on comprehensive sponsorship information. Check back soon for detailed guides and resources.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsorshipTopics.map((topic, index) => (
              <Card key={index} className="group hover:shadow-warm transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <topic.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-serif text-primary">{topic.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">{topic.status}</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    {topic.description}
                  </p>
                  <Button variant="outline" className="w-full" disabled>
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Interested in Sponsoring?
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              While we're preparing detailed sponsorship information, you can still express your interest 
              in becoming a sponsor. Contact us to learn more about sponsorship opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="mailto:BoD@DallasOdiaSociety.org?subject=Sponsorship%20Inquiry&body=Hello,%0D%0A%0D%0AI%20am%20interested%20in%20becoming%20a%20sponsor%20for%20the%20Dallas%20Odia%20Society.%0D%0A%0D%0APlease%20let%20me%20know%20about%20the%20available%20sponsorship%20opportunities%20and%20how%20to%20proceed.%0D%0A%0D%0AThank%20you!">
                  Contact Us About Sponsorship
                  <DollarSign className="h-5 w-5 ml-2 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              <Button variant="warm" size="lg" asChild>
                <a href="mailto:BoD@DallasOdiaSociety.org?subject=Learn%20More%20About%20DOS&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20learn%20more%20about%20the%20Dallas%20Odia%20Society%20and%20its%20activities.%0D%0A%0D%0APlease%20provide%20me%20with%20more%20information.%0D%0A%0D%0AThank%20you!">
                  Learn More About DOS
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Preview */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold gradient-text mb-4">
              Sponsorship Benefits Preview
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here's a preview of what sponsors can expect when supporting DOS.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary">Recognition</h3>
              <p className="text-muted-foreground">
                Get recognized at events and in our community communications for your generous support.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Gift className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary">Community Impact</h3>
              <p className="text-muted-foreground">
                Make a meaningful impact on preserving Odia culture and supporting our community.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary">Exclusive Access</h3>
              <p className="text-muted-foreground">
                Enjoy exclusive access to special events and community gatherings.
              </p>
            </div>
          </div>
        </section>

        {/* Coming Soon Notice */}
        <section className="text-center">
          <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">
              Detailed Information Coming Soon
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              We're currently developing comprehensive sponsorship information including detailed options, 
              benefits, payment methods, and frequently asked questions. Check back soon for complete details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <a href="mailto:BoD@DallasOdiaSociety.org?subject=Subscribe%20for%20Sponsorship%20Updates&body=Hello,%0D%0A%0D%0APlease%20add%20me%20to%20your%20mailing%20list%20for%20sponsorship%20updates%20and%20opportunities.%0D%0A%0D%0AThank%20you!">
                  Subscribe for Updates
                </a>
              </Button>
              <Button variant="hero" asChild>
                <a href="mailto:BoD@DallasOdiaSociety.org?subject=Contact%20Us%20Now%20-%20Sponsorship&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20contact%20you%20regarding%20sponsorship%20opportunities%20with%20the%20Dallas%20Odia%20Society.%0D%0A%0D%0APlease%20let%20me%20know%20how%20to%20proceed.%0D%0A%0D%0AThank%20you!">
                  Contact Us Now
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BecomeSponsor;
