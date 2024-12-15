import { Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-8">
          <Code2 className="h-16 w-16 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Modern CSS Minifier
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Optimize your CSS instantly with our powerful minification tool. Reduce file size, improve load times, and enhance your website's performance.
        </p>
        <a
          href="#minifier"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Start Minifying
        </a>
      </div>
    </section>
  );
}