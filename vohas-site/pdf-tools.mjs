import * as mupdf from 'mupdf';
import fs from 'fs';

const buf = fs.readFileSync('Yangi menyu.pdf');
const doc = mupdf.Document.openDocument(buf, 'application/pdf');
const n = doc.countPages();
console.log('pages:', n);

fs.mkdirSync('pdf-pages', { recursive: true });

for (let i = 0; i < n; i++) {
  const page = doc.loadPage(i);
  const zoom = 2.2;
  const matrix = mupdf.Matrix.scale(zoom, zoom);
  const pixmap = page.toPixmap(matrix, mupdf.ColorSpace.DeviceRGB, false, true);
  const png = pixmap.asPNG();
  fs.writeFileSync(`pdf-pages/page-${String(i + 1).padStart(2, '0')}.png`, png);
  console.log('rendered page', i + 1);
}
