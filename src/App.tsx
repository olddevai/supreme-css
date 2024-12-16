import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { MessageCircle } from 'lucide-react'; // Import the Telegram icon from lucide-react
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
      <Helmet>
        {/* Meta Tags */}
        <title>CSS Minifier - Optimize Your CSS for Better Performance</title>
        <meta
          name="description"
          content="CSS Minifier is a free tool to optimize and compress your CSS files. Improve website performance and load times with our simple and effective tool."
        />
        <meta name="keywords" content="CSS Minifier, CSS optimization, compress CSS, online tool, website performance" />
        <meta name="author" content="CSS Minifier Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CSS Minifier - Optimize Your CSS for Better Performance" />
        <meta
          property="og:description"
          content="CSS Minifier is a free tool to optimize and compress your CSS files. Improve website performance and load times with our simple and effective tool."
        />
        <meta property="og:url" content="https://css-minifiy.netlify.app" />
        <meta property="og:image" content="https://css-minifiy.netlify.app/9c1dbb7-d275-467c-b6e7-4d66da7fb7b0.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CSS Minifier - Optimize Your CSS for Better Performance" />
        <meta
          name="twitter:description"
          content="CSS Minifier is a free tool to optimize and compress your CSS files. Improve website performance and load times with our simple and effective tool."
        />
        <meta name="twitter:image" content="https://css-minifiy.netlify.app/d9c1dbb7-d275-467c-b6e7-4d66da7fb7b0.webp" />

        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "CSS Minifier",
            "url": "https://css-minifiy.netlify.app",
            "description": "A free tool to optimize and compress your CSS files for better performance.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://css-minifiy.netlify.app?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
            "publisher": {
              "@type": "Organization",
              "name": "CSS Minifier Team",
              "logo": {
                "@type": "ImageObject",
                "url": "https://css-minifiy.netlify.app/logo.png",
              },
            },
          })}
        </script>
      </Helmet>

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

      {/* Floating Telegram Button */}
      <a
        href="https://t.me/yourTelegramChannel"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 transition-colors"
        aria-label="Join our Telegram Channel"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

export default App;
