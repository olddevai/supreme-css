// CSS Minification utility functions
export function minifyCSS(css: string): string {
  if (!css) return '';
  
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .replace(/\s*([{}:;,])\s*/g, '$1') // Remove spaces around special characters
    .replace(/;\}/g, '}') // Remove unnecessary semicolons
    .replace(/\s*{\s*/g, '{') // Remove spaces around braces
    .replace(/\s*}\s*/g, '}')
    .trim();
}

export function calculateStats(original: string, minified: string) {
  const originalSize = new Blob([original]).size;
  const minifiedSize = new Blob([minified]).size;
  const savedBytes = originalSize - minifiedSize;
  const savingsPercentage = originalSize ? ((savedBytes / originalSize) * 100).toFixed(1) : '0';

  return {
    originalSize,
    minifiedSize,
    savedBytes,
    savingsPercentage
  };
}