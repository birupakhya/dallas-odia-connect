import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import amitabhHeadshot from '@/assets/amitabh-headshot.png';
import boardMember2 from '@/assets/board-member-2.jpg';
import boardMember3 from '@/assets/board-member-3.jpg';

const AboutUs = () => {
  const boardMembers = [
    {
      name: "Amitabh Mishra",
      title: "President",
      image: amitabhHeadshot,
      bio: "Amitabh grew up in Burla, and came to the US as a student at Texas A&M University. He worked at Intel, SAP, GE and Novartis prior to his current stint at Accenture Advisory Services. Before his current role at DOS, he served as Treasurer. His leadership philosophy is to provide a fun, safe and secure environment to the community while ensuring ethical behavior. He lives with his family in Murphy, TX."
    },
    {
      name: "Sobhan Samantaray",
      title: "Treasurer",
      // image: boardMember2, // Removed image for now
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      name: "Jayabrata Tripathy",
      title: "Secretary",
      // image: boardMember3, // Removed image for now
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ];

  // Event Committee data
  const eventCommittee = [
    {
      name: "Nilashree Behera"
    },
    {
      name: "Pushpa Mohapatra"
    }
  ];

  // Grievance Committee data
  const grievanceCommittee = [
    {
      name: "Jaydeep Biswal"
    },
    {
      name: "Gagan Acharya"
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
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={`${member.name} - Board Member`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-muted/50 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-4xl text-muted-foreground/50 mb-2">👤</div>
                            <div className="text-xs text-muted-foreground">Photo Coming Soon</div>
                          </div>
                        </div>
                      )}
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

        {/* Event Committee */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold gradient-text mb-4">
              Event Committee
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our dedicated event committee works tirelessly to create memorable cultural celebrations, 
              community gatherings, and educational programs that bring our community together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {eventCommittee.map((member, index) => (
              <Card key={index} className="group hover:shadow-cultural transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl md:text-2xl font-serif text-primary">
                    {member.name}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Grievance Committee */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold gradient-text mb-4">
              Grievance Committee
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our grievance committee ensures fair and transparent resolution of community concerns, 
              maintaining harmony and trust within our organization through impartial mediation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {grievanceCommittee.map((member, index) => (
              <Card key={index} className="group hover:shadow-cultural transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl md:text-2xl font-serif text-primary">
                    {member.name}
                  </CardTitle>
                </CardHeader>
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