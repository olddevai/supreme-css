import { Zap, Lock, Upload, Download, RefreshCw, FileText } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: 'Real-time Processing',
      description: 'Instant minification as you type with live preview and statistics.',
    },
    {
      icon: <Lock className="h-8 w-8 text-green-500" />,
      title: 'Secure Processing',
      description: 'All processing happens in your browser. No server uploads needed.',
    },
    {
      icon: <Upload className="h-8 w-8 text-blue-500" />,
      title: 'File Upload',
      description: 'Easily upload your CSS files directly from your computer.',
    },
    {
      icon: <Download className="h-8 w-8 text-purple-500" />,
      title: 'Quick Export',
      description: 'Download minified CSS or copy directly to your clipboard.',
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-red-500" />,
      title: 'Cross-browser Support',
      description: 'Works perfectly across all modern browsers and devices.',
    },
    {
      icon: <FileText className="h-8 w-8 text-indigo-500" />,
      title: 'Detailed Statistics',
      description: 'Get comprehensive insights about size reduction and optimization.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}