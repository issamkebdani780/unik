import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Science from './components/Science';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ProductCatalog from './components/ProductCatalog';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
import Engagements from './components/Engagements';

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
      <Categories />
      <Science />
      <Newsletter />
    </>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
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
  );
}

export default App;
