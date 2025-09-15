import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import QuickActions from '@/components/QuickActions';
import NewsAndAnnouncements from '@/components/NewsAndAnnouncements';
// import MemorialSection from '@/components/MemorialSection';
// import CommunityShowcase from '@/components/CommunityShowcase';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { organizationSchema, websiteSchema } from '@/lib/structured-data';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Dallas Odia Society - Preserving Culture, Building Community"
        description="Join Dallas Odia Society, a non-profit organization promoting Odia culture, heritage, and community in the Dallas-Fort Worth area. Experience 'Home away from Home' through cultural events and traditions."
        keywords="Dallas Odia Society, Odia community, DFW, cultural organization, non-profit, Odisha, Indian community, Dallas Fort Worth, Texas, cultural events, community service"
        canonicalUrl="/"
        structuredData={[organizationSchema, websiteSchema]}
      />
      <Navigation />
      <main>
        <HeroSection />
        <NewsAndAnnouncements />
        <QuickActions />
        {/* <MemorialSection /> */}
        {/* <CommunityShowcase /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
