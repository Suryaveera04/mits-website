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

  // Replace ? followed by numbers (e.g., ?10 LPA, ?18.46 Cr, ?1107, ?3,000) with ₹ symbol or numbers
  content = content.replace(/\?(\d+(?:\.\d+)?\s*(?:LPA|Cr|Lakhs|L|K|k)?)/g, '₹$1');
  
  // Replace "Amount in ? Lakhs" or "in ? Lakhs"
  content = content.replace(/Amount in \? Lakhs/g, 'Amount in ₹ Lakhs');
  content = content.replace(/Amount in \ufffd Lakhs/g, 'Amount in ₹ Lakhs');
  content = content.replace(/in \? Lakhs/g, 'in ₹ Lakhs');

  // Replace "Patents ? Academic Year wise" -> "Patents — Academic Year wise"
  content = content.replace(/Patents \? Academic/g, 'Patents — Academic');
  content = content.replace(/Patents \ufffd Academic/g, 'Patents — Academic');

  // Replace "SOUL 3.0integrated" -> "SOUL 3.0 Integrated"
  content = content.replace(/SOUL 3\.0integrated/g, 'SOUL 3.0 Integrated');

  // Replace stray replacement character  in text strings
  content = content.replace(/—/g, '—');
  content = content.replace(/–/g, '–');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedCount++;
    console.log(`Cleaned encoding in: ${filePath}`);
  }
});

console.log(`Total files cleaned: ${modifiedCount}`);
