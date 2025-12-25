
import React from 'react';
import { Hero } from './components/Hero';
import { PainSection } from './components/PainSection';
import { AuthoritySection } from './components/AuthoritySection';
import { RecipeGallery } from './components/RecipeGallery';
import { TherapeuticDifference } from './components/TherapeuticDifference';
import { ProductMockup } from './components/ProductMockup';
import { Testimonials } from './components/Testimonials';
import { Offers } from './components/Offers';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#D4AF37] selection:text-white overflow-x-hidden">
      <Hero />
      <PainSection />
      <AuthoritySection />
      <RecipeGallery />
      <TherapeuticDifference />
      <ProductMockup />
      <Testimonials />
      <Offers />
      <Guarantee />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
