// Advanced CSS Minification utility functions
export function MinifyCSS(css: string): string {
  if (!css) return '';

  return css
    // Remove comments
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // Remove extra whitespace
    .replace(/\s+/g, ' ')
    // Remove spaces around special characters
    .replace(/\s*([{}:;,])\s*/g, '$1')
    // Remove unnecessary semicolons
    .replace(/;\}/g, '}')
    // Optimize zero values
    .replace(/\b0+(\.\d+)?(px|em|rem|%|vw|vh)?\b/g, '0')
    // Shorten hex colors
    .replace(/#([a-fA-F0-9])\1([a-fA-F0-9])\2([a-fA-F0-9])\3/g, '#$1$2$3')
    // Combine identical selectors
    .replace(/([a-zA-Z0-9.#:_-]+)\s*{([^}]*)}\s*\1\s*{([^}]*)}/g, (_, sel, block1, block2) => `${sel}{${block1}${block2}}`)
    // Simplify long forms to shorthand (e.g., margin/padding)
    .replace(/:\s*([^:;]*)(?:\s+\1){3}(;|})/g, ':$1$2')
    // Remove spaces around braces
    .replace(/\s*{\s*/g, '{')
    .replace(/\s*}\s*/g, '}')
    // Trim whitespace
    .trim();
}

// Stats calculation remains the same
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
