import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Abstract from '@/components/Abstract';
import DatasetDescription from '@/components/DatasetDescription';
import Methodology from '@/components/Methodology';
import EDA from '@/components/EDA';
import VisualAnalysis from '@/components/VisualAnalysis';
import Conclusions from '@/components/Conclusions';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <Abstract />
      <DatasetDescription />
      <Methodology />
      <EDA />
      <VisualAnalysis />
      <Conclusions />
      <Footer />
    </div>
  );
};

export default Index;
