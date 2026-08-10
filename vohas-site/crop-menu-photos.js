// One-off: center-crop every photo in assets/menu/ to a uniform 4:3 ratio
// so all menu cards render the same size regardless of source image shape.
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const DIR = path.join(__dirname, 'assets', 'menu');
const WIDTH = 1000;
const HEIGHT = 750; // 4:3

async function run() {
  const files = fs.readdirSync(DIR).filter((f) => /\.(jpe?g|png)$/i.test(f));
  for (const file of files) {
    const p = path.join(DIR, file);
    const buf = await sharp(p)
      .resize(WIDTH, HEIGHT, { fit: 'cover', position: 'centre' })
      .jpeg({ quality: 82 })
      .toBuffer();
    const tmp = p + '.tmp';
    fs.writeFileSync(tmp, buf);
    fs.renameSync(tmp, p);
    console.log('cropped', file);
  }
  console.log(`Done: ${files.length} images normalized to ${WIDTH}x${HEIGHT}`);
}

run();
