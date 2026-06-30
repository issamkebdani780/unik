import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import ProductShowcase from './components/ProductShowcase';
import Science from './components/Science';
import UGCCommunity from './components/UGCCommunity';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ProductCatalog from './components/ProductCatalog';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
import Engagements from './components/Engagements';
import { ThemeProvider } from './context/ThemeContext';

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
}

// Home Page Component
const Home = () => {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <Science />
      <UGCCommunity />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-brand-light text-black transition-colors duration-500 selection:bg-black selection:text-white">
        <ScrollToTop />
        <Header />
        
        <main className="transition-all duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<ProductCatalog />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/engagements" element={<Engagements />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
