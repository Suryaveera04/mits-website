import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

let count = 0;

walkDir('src', (filePath) => {
  if (!filePath.endsWith('.ts') && !filePath.endsWith('.tsx')) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace Hero-Section/image%20X.JPG or image%20X.jpg with image-X.jpg and double-quoted url
  content = content.replace(/backgroundImage:\s*`url\(\$\{BASE\}Hero-Section\/image%20(\d)\.JPG\)`/g, 'backgroundImage: `url("${BASE}Hero-Section/image-$1.jpg")`');
  content = content.replace(/backgroundImage:\s*`url\(\$\{BASE\}Hero-Section\/image%20(\d)\.jpg\)`/g, 'backgroundImage: `url("${BASE}Hero-Section/image-$1.jpg")`');
  
  // Replace general unquoted url(${...})
  content = content.replace(/backgroundImage:\s*`url\((?!\s*["'])(\$\{BASE\}[^`]+)\)`/g, 'backgroundImage: `url("$1")`');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    count++;
    console.log(`Updated ${filePath}`);
  }
});

console.log(`Total files updated: ${count}`);
