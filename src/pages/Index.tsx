import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import QuickActions from '@/components/QuickActions';
import NewsAndAnnouncements from '@/components/NewsAndAnnouncements';
import CommunityShowcase from '@/components/CommunityShowcase';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <NewsAndAnnouncements />
        <QuickActions />
        <CommunityShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
