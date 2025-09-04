import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, Star, Facebook, Mail, Phone } from 'lucide-react';

const BecomeMember = () => {
  const benefits = [
    "Participate in all DOS socio-cultural events",
    "Be part of the event management and other committees to directly influence the vision, mission and purpose of DOS",
    "Be a voice for change, by providing feedback and suggestions to Board",
    "Attend the annual membership meetings"
  ];

  const paidMemberRights = [
    "They can vote in elections to choose board of directors",
    "They are invited to General Body Meetings or Special Meetings and can have a say on DOS matters",
    "They can be part of various committees",
    "They will be part of a special mailing list"
  ];

  const membershipTypes = [
    {
      type: "Annual Membership",
      description: "Up to 2 members over 21 years of age per family",
      price: "$11",
      duration: "1 Year"
    },
    {
      type: "5 Years Membership",
      description: "Up to 2 members over 21 years of age per family",
      price: "$49",
      duration: "5 Years"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold gradient-text mb-6">
            Become A Member
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join the Dallas Odia Society and become part of our vibrant community. 
            Experience "Home Away From Home" with fellow Odia families in the DFW area.
          </p>
        </section>

        {/* Universal Benefits */}
        <section className="mb-20">
          <div className="bg-gradient-warm rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Benefits for All Members
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
              Irrespective of the type of membership, the following benefits are for all categories.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 text-left">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Categories */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold gradient-text mb-4">
              Membership Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              DOS offers two categories of membership to suit different needs and preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Subscribed Membership */}
            <Card className="group hover:shadow-warm transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-serif text-primary">Subscribed Membership</CardTitle>
                <Badge variant="secondary" className="w-fit mx-auto">Free</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Subscribed members are eligible to be part of the DOS WhatsApp group, DOS subscribed email group 
                  and DOS Facebook page, once their membership request is approved.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-primary">What's Included:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Access to DOS WhatsApp group</li>
                    <li>• DOS subscribed email group</li>
                    <li>• DOS Facebook page access</li>
                    <li>• Event notifications</li>
                  </ul>
                </div>
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground">
                    <strong>Note:</strong> Subscribed membership will not have voting rights and will not count towards quorum and/or voting requirements of this bylaw.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Paid Membership */}
            <Card className="group hover:shadow-warm transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-serif text-primary">Paid Membership</CardTitle>
                <Badge variant="default" className="w-fit mx-auto">Premium</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Paid members are given certain rights that the subscribed members don't have.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-primary">Special Rights:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {paidMemberRights.map((right, index) => (
                      <li key={index}>• {right}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-primary/10 rounded-lg p-3">
                  <p className="text-xs text-primary">
                    <strong>Important:</strong> Each paid membership will be counted towards the quorum and/or voting requirements of this Bylaw.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Membership Plans */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold gradient-text mb-4">
              Paid Membership Plans
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the membership plan that works best for your family.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {membershipTypes.map((plan, index) => (
              <Card key={index} className="group hover:shadow-warm transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-serif text-primary">{plan.type}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{plan.price}</div>
                  <p className="text-sm text-muted-foreground">{plan.duration}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <Button variant="hero" className="w-full" asChild>
                    <a href={`mailto:BoD@DallasOdiaSociety.org?subject=Membership%20Inquiry%20-%20${encodeURIComponent(plan.type)}&body=Hello,%0D%0A%0D%0AI%20am%20interested%20in%20the%20${encodeURIComponent(plan.type)}%20(${plan.price})%20for%20the%20Dallas%20Odia%20Society.%0D%0A%0D%0APlease%20let%20me%20know%20how%20to%20proceed%20with%20the%20membership%20process.%0D%0A%0D%0AThank%20you!`}>
                      Choose {plan.type}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How to Join */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              How to Join
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Facebook className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">Step 1: Facebook Request</h3>
                <p className="text-muted-foreground">
                  Request to join the DOS Facebook Group with your Name, Location, and Phone information.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">Step 2: Subscribed Member</h3>
                <p className="text-muted-foreground">
                  You'll be made a Subscribed Member and added to various WhatsApp Groups.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">Step 3: Paid Membership</h3>
                <p className="text-muted-foreground">
                  Apply for Paid Membership. The Treasurer may do additional verification.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="mb-20">
          <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-serif font-bold text-primary mb-6 text-center">
              Important Information
            </h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              <div className="bg-background rounded-lg p-4">
                <p className="text-muted-foreground">
                  <strong>Know Your Member Policy:</strong> We have a policy of "Know Your Member" to remain compliant with law 
                  and also intend to provide a safer environment for our friends and families. Please cooperate and share your 
                  address and phone number and family member details along with your name and e-mail id when you apply for 
                  Subscribed Membership.
                </p>
              </div>
              <div className="bg-background rounded-lg p-4">
                <p className="text-muted-foreground">
                  <strong>Recommendation:</strong> You are recommended to join as a Paid Member as the cost of membership is 
                  kept very reasonable and the organization being non-profit needs support of members like you.
                </p>
              </div>
              <div className="bg-background rounded-lg p-4">
                <p className="text-muted-foreground">
                  <strong>Membership Changes:</strong> Please note that the DOS Board could take decisions to change, add, 
                  modify or remove type of memberships and its price options.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="text-center">
          <div className="bg-gradient-warm rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">
              Coming Soon
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">Payment Methods</h3>
                <p className="text-sm text-muted-foreground">How to make payments for Membership</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">Welcome Kit</h3>
                <p className="text-sm text-muted-foreground">Welcome Kit for New Member</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">FAQs</h3>
                <p className="text-sm text-muted-foreground">Standard FAQs about membership</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BecomeMember;
