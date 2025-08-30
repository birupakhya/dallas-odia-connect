import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react';

const ContactUs = () => {
  // Google Form URL - replace with your actual Google Form URL
  // To get the embedded URL, go to your Google Form, click "Send", then "Embed" tab
  const googleFormUrl = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true";
  
  // Set this to true when you have a Google Form URL
  const hasGoogleForm = false;

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@dallasodiasociety.org",
      description: "Send us an email for general inquiries"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "(972) 555-0123",
      description: "Call us during business hours"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Dallas-Fort Worth Metroplex",
      description: "Serving the greater Dallas area"
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "24-48 hours",
      description: "We'll get back to you promptly"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Get in touch with the Dallas Odia Society. We'd love to hear from you and answer any questions you may have.
            </p>
            <Badge className="bg-green-100 text-green-800 border-green-200 text-base px-4 py-2">
              <MessageSquare className="mr-2 h-4 w-4" />
              We typically respond within 24-48 hours
            </Badge>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                  Get In Touch
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Have questions about our events, membership, or community activities? 
                  We're here to help! Fill out the form and we'll get back to you as soon as possible.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          <p className="text-primary font-medium mb-1">{info.content}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional Information */}
              <Card className="border-0 bg-gradient-to-r from-primary/5 to-secondary/5 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-primary">
                    Community Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">By Appointment</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Google Form Embed */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-6">
                  Use the form below to send us your message, questions, or feedback.
                </p>
              </div>

              {/* Google Form Container */}
              <Card className="border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative w-full h-[600px] bg-muted/20">
                    {hasGoogleForm ? (
                      /* Google Form iframe */
                      <iframe
                        src={googleFormUrl}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        marginHeight={0}
                        marginWidth={0}
                        title="Contact Form"
                        className="w-full h-full"
                      >
                        Loading…
                      </iframe>
                    ) : (
                      /* Placeholder for Google Form */
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <Send className="h-16 w-16 text-muted-foreground/50 mx-auto" />
                          <div>
                            <h3 className="text-lg font-medium text-muted-foreground mb-2">
                              Google Form Integration
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              To integrate your Google Form, please provide the form URL.
                            </p>
                            <Button variant="outline" className="group">
                              <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                              Contact via Email
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Alternative Contact Methods */}
              <Card className="border-0 bg-gradient-to-r from-accent/5 to-primary/5 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-serif text-primary">
                    Alternative Contact Methods
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-sm">
                      <strong>Email:</strong> info@dallasodiasociety.org
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-sm">
                      <strong>Phone:</strong> (972) 555-0123
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    <span className="text-sm">
                      <strong>Social Media:</strong> Follow us on Facebook and WhatsApp
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-primary mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">How do I become a member?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Visit our "Become a Member" page to learn about membership options and complete the registration process.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">How can I volunteer?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We welcome volunteers! Contact us through this form or email us directly to learn about volunteer opportunities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Where are your events held?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our events are held throughout the Dallas-Fort Worth metroplex. Check our Events page for specific locations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">How can I sponsor an event?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Visit our "Become a Sponsor" page to learn about sponsorship opportunities and benefits.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
