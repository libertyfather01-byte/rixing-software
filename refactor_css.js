const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.module.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace:
    // @media (prefers-color-scheme: dark) {
    //   .className {
    //      ...
    //   }
    // }
    // with:
    // :global(.dark) .className { ... }

    // This regex looks for @media block containing a single class rule
    const regex = /@media\s*\(prefers-color-scheme:\s*dark\)\s*\{\s*\.([a-zA-Z0-9_-]+)\s*\{([\s\S]*?)\}\s*\}/g;
    
    let newContent = content.replace(regex, (match, className, innerCSS) => {
      return `:global(.dark) .${className} {${innerCSS}}`;
    });

    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent);
      console.log('Refactored: ' + filePath);
    }
  }
});
