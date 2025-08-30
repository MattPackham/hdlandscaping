// add-nojekyll.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

fs.writeFileSync(path.join(__dirname, 'dist', '.nojekyll'), '');
console.log('.nojekyll file created in dist/');
