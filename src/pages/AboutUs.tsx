import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import boardMember1 from '@/assets/board-member-1.jpg';
import boardMember2 from '@/assets/board-member-2.jpg';
import boardMember3 from '@/assets/board-member-3.jpg';
import boardMember4 from '@/assets/board-member-4.jpg';

const AboutUs = () => {
  const boardMembers = [
    {
      name: "Rajesh Kumar Pattnaik",
      title: "President",
      image: boardMember1,
      bio: "Rajesh has been serving the Odia community for over 25 years. A successful entrepreneur and philanthropist, he has dedicated his life to preserving Odia culture and supporting community initiatives. Under his leadership, our organization has grown from a small local group to a thriving community center."
    },
    {
      name: "Dr. Sunita Mohapatra",
      title: "Vice President",
      image: boardMember2,
      bio: "Dr. Sunita is a respected physician and community advocate. She has been instrumental in organizing health awareness programs and educational initiatives. Her passion for community service and cultural preservation has made her an invaluable leader in our organization."
    },
    {
      name: "Biswanath Sahoo",
      title: "Secretary",
      image: boardMember3,
      bio: "Biswanath brings over 30 years of corporate experience to our board. His expertise in organizational management and strategic planning has helped streamline our operations and expand our community outreach programs. He is also a talented classical musician."
    },
    {
      name: "Meera Dash",
      title: "Treasurer",
      image: boardMember4,
      bio: "Meera is a certified accountant with extensive experience in non-profit financial management. She ensures our organization maintains fiscal responsibility while supporting various community programs. Her attention to detail and commitment to transparency has earned the trust of our entire community."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold gradient-text mb-6">
            About Our Organization
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dedicated to preserving our rich Odia heritage while building bridges in our community. 
            We are a passionate group of leaders committed to cultural excellence and community service.
          </p>
        </section>

        {/* Mission Statement */}
        <section className="mb-20">
          <div className="bg-gradient-warm rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              To foster unity and togetherness within the Dallas Odia Society by celebrating and promoting the rich heritage of Odia culture and language. Through inclusive events, charitable initiatives, and meaningful engagement, we aim to create a safe, welcoming environment where families can connect, children can thrive, and traditions are honored with pride.
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mt-6">
              We are committed to building a vibrant cultural space in our community that inspires belonging, nurtures growth, and strengthens the bonds that unite us.
            </p>
          </div>
        </section>

        {/* Board of Directors */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold gradient-text mb-4">
              Board of Directors
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated leaders who guide our organization with wisdom, passion, and unwavering commitment to our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {boardMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-cultural transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="relative mx-auto mb-6">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                      <img 
                        src={member.image} 
                        alt={`${member.name} - ${member.title}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-serif text-primary">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-accent font-medium text-base">
                    {member.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Community Values */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold gradient-text mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Heritage</h3>
              <p className="text-muted-foreground">Preserving and celebrating our rich Odia traditions, language, and cultural practices.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Unity</h3>
              <p className="text-muted-foreground">Building bridges within our community and fostering connections across generations.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Service</h3>
              <p className="text-muted-foreground">Giving back to our community through education, support, and meaningful initiatives.</p>
            </div>
          </div>
        </section>

        {/* ByLaw Section */}
        <section className="mt-20">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">DOS ByLaw</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Our organization operates under a comprehensive set of bylaws that guide our governance, 
              membership, and community activities. These bylaws ensure transparency, accountability, 
              and proper organizational structure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Document Version</p>
                <p className="text-lg font-semibold text-primary">09-October-2024</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Last Updated</p>
                <p className="text-lg font-semibold text-primary">October 2024</p>
              </div>
            </div>
            <div className="mt-8">
              <a 
                href="https://sites.google.com/view/dallasodiasociety/about-us/bylaw-pdf-version?authuser=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0 1 1 0 002 0zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                View DOS ByLaw Document
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;