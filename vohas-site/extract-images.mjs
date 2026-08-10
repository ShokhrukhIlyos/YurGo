import * as mupdf from 'mupdf';
import fs from 'fs';

const buf = fs.readFileSync('Yangi menyu.pdf');
const doc = mupdf.Document.openDocument(buf, 'application/pdf');
const n = doc.countPages();

fs.mkdirSync('raw-photos', { recursive: true });

for (let i = 0; i < n; i++) {
  const page = doc.loadPage(i);
  const captured = [];

  const device = new mupdf.Device({
    fillImage(image, ctm, alpha) {
      // ctm maps unit square [0,1]x[0,1] to page space; use e,f (translation) and a,d (scale) to get bbox
      const x0 = ctm[4];
      const y0 = ctm[5];
      captured.push({ image, y: y0, x: x0 });
    },
  });

  page.run(device, mupdf.Matrix.identity);
  device.close();

  // sort top-to-bottom (page space y grows upward in PDF, so smaller y = lower on page => sort descending y for top-first)
  captured.sort((a, b) => a.y - b.y || a.x - b.x);

  captured.forEach((c, idx) => {
    try {
      const pixmap = c.image.toPixmap();
      const png = pixmap.asPNG();
      const w = c.image.getWidth();
      const h = c.image.getHeight();
      if (w < 100 || h < 80) return; // skip tiny decorative images
      fs.writeFileSync(`raw-photos/p${String(i + 1).padStart(2, '0')}-${idx + 1}.png`, png);
    } catch (e) {
      console.log('skip image on page', i + 1, e.message);
    }
  });

  console.log(`page ${i + 1}: ${captured.length} images captured`);
}
