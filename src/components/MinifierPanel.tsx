import { useState, useRef, useCallback } from 'react';
import { Copy, Download, Upload, Trash2, Loader } from 'lucide-react';
import { minifyCSS, calculateStats } from '../utils/cssMinifier';

export default function MinifierPanel() {
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const minifiedCSS = minifyCSS(input);
  const stats = calculateStats(input, minifiedCSS);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      setInput(e.target?.result as string);
      setIsProcessing(false);
    };
    reader.readAsText(file);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  const downloadMinified = useCallback(() => {
    const blob = new Blob([minifiedCSS], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'minified.css';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [minifiedCSS]);

  return (
    <div className="w-full max-w-7xl mx-auto p-4 space-y-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Input Panel */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Original CSS</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                title="Upload CSS file"
              >
                <Upload className="h-5 w-5" />
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept=".css"
                className="hidden"
              />
              <button
                onClick={() => setInput('')}
                className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                title="Clear input"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-[400px] p-4 font-mono text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
            placeholder="Paste your CSS here..."
          />
        </div>

        {/* Output Panel */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Minified CSS</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => copyToClipboard(minifiedCSS)}
                className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                title="Copy to clipboard"
              >
                <Copy className="h-5 w-5" />
              </button>
              <button
                onClick={downloadMinified}
                className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                title="Download minified CSS"
              >
                <Download className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="relative">
            {isProcessing && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-gray-900/50">
                <Loader className="h-8 w-8 animate-spin" />
              </div>
            )}
            <textarea
              readOnly
              value={minifiedCSS}
              className="w-full h-[400px] p-4 font-mono text-sm border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
              placeholder="Minified output will appear here..."
            />
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
          <p className="text-sm text-gray-600 dark:text-gray-400">Original Size</p>
          <p className="text-xl font-semibold">{(stats.originalSize / 1024).toFixed(2)} KB</p>
        </div>
        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
          <p className="text-sm text-gray-600 dark:text-gray-400">Minified Size</p>
          <p className="text-xl font-semibold">{(stats.minifiedSize / 1024).toFixed(2)} KB</p>
        </div>
        <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20">
          <p className="text-sm text-gray-600 dark:text-gray-400">Bytes Saved</p>
          <p className="text-xl font-semibold">{(stats.savedBytes / 1024).toFixed(2)} KB</p>
        </div>
        <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20">
          <p className="text-sm text-gray-600 dark:text-gray-400">Reduction</p>
          <p className="text-xl font-semibold">{stats.savingsPercentage}%</p>
        </div>
      </div>
    </div>
  );
}