import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ExecutiveSummary from '@/components/ExecutiveSummary';
import DataOverview from '@/components/DataOverview';
import ISIMethodology from '@/components/ISIMethodology';
import VisualizationGallery from '@/components/VisualizationGallery';
import Conclusions from '@/components/Conclusions';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ExecutiveSummary />
      <DataOverview />
      <ISIMethodology />
      <VisualizationGallery />
      <Conclusions />
      <Footer />
    </div>
  );
};

export default Index;
