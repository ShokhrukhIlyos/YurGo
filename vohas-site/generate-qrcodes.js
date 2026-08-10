// Generates 50 table QR codes -> assets/qrcodes/table-01.png ... table-50.png
// Each encodes BASE_URL/menu.html?t=NN
// Re-run after deploying (or renaming) the Netlify site with the real URL:
//   node generate-qrcodes.js https://your-site-name.netlify.app

const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');

const BASE_URL = (process.argv[2] || 'https://vohas-site.netlify.app').replace(/\/$/, '');
const OUT_DIR = path.join(__dirname, 'assets', 'qrcodes');
const COUNT = 50;

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

async function run() {
  for (let i = 1; i <= COUNT; i++) {
    const table = String(i).padStart(2, '0');
    const url = `${BASE_URL}/menu?t=${table}`;
    const outFile = path.join(OUT_DIR, `table-${table}.png`);
    await QRCode.toFile(outFile, url, {
      width: 600,
      margin: 2,
      color: { dark: '#16130f', light: '#ffffff' },
    });
  }
  console.log(`Generated ${COUNT} QR codes in ${OUT_DIR}`);
  console.log(`Base URL used: ${BASE_URL}`);
}

run();
