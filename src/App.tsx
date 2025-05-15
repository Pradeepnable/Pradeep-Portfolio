import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import ThemeProvider from './context/ThemeContext';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  const [mounted, setMounted] = useState(false);

  // Set mounted to true on client side
  useEffect(() => {
    setMounted(true);
  }, []);

  // To avoid hydration mismatch
  if (!mounted) return null;

  return (
    <ThemeProvider>
      <div className="relative min-h-screen transition-colors duration-300 dark:bg-gray-900 bg-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;