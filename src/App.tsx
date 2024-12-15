import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MinifierPanel from './components/MinifierPanel';
import Features from './components/Features';
import FAQ from './components/FAQ';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true' ||
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero />
          <section id="minifier" className="py-12">
            <MinifierPanel />
          </section>
          <Features />
          <FAQ />
        </main>
        <footer className="py-8 text-center text-gray-600 dark:text-gray-400 border-t dark:border-gray-800">
          <p>© {new Date().getFullYear()} CSS Minifier. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;