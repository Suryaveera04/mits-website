import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

let modifiedCount = 0;

walkDir('src', (filePath) => {
  if (!filePath.endsWith('.ts') && !filePath.endsWith('.tsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace stray replacement characters
  content = content.replace(/\?"/g, ' - ');
  content = content.replace(/\uFFFD/g, ' - ');
  content = content.replace(/Amount in - Lakhs/g, 'Amount in ₹ Lakhs');
  content = content.replace(/Amount in \? Lakhs/g, 'Amount in ₹ Lakhs');
  content = content.replace(/Patents - Academic/g, 'Patents — Academic');
  content = content.replace(/Patents \? Academic/g, 'Patents — Academic');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedCount++;
    console.log(`Fixed UTF-8 in: ${filePath}`);
  }
});

console.log(`Total files cleaned: ${modifiedCount}`);
