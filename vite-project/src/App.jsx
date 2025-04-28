// App.jsx - Convert to a single-page layout with all sections
import Navbar from './components/Navbar/Navbar';
import { useTheme } from './contexts/ThemeContext';

// Import components
import About from './pages/About/About';
import Solutions from './pages/Solutions/Solutions';
import CaseStudies from './pages/CaseStudies/CaseStudies';
import Contact from './pages/Contact/Contact';
import HeroVideo from './components/HeroVideo';

function App() {
  const { darkMode } = useTheme();

  return (
    <div className={`App ${darkMode ? 'dark bg-gray-800 text-white' : 'bg-white text-gray-900'} min-h-screen transition-colors duration-200`}>
      <Navbar />
      <main>
        <section id="hero" className="scroll-mt-16">
          <HeroVideo />
        </section>
        <section id="about" className="scroll-mt-16">
          <About />
        </section>
        <section id="solutions" className="scroll-mt-16">
          <Solutions />
        </section>
        <section id="case-studies" className="scroll-mt-16">
          <CaseStudies />
        </section>
        <section id="contact" className="scroll-mt-16">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;