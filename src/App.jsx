import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Science from './components/Science';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      <Header />
      <main>
        <Hero />
        <Categories />
        <Science />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
