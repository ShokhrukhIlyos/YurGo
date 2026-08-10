import sharp from 'sharp';
import fs from 'fs';

const W = 1000, H = 750;

// raw-photos/pXX-N.png -> assets/menu/<final-filename>.jpg
const MAP = {
  // Breakfast
  'p03-1.png': 'english-breakfast.jpg',
  'p03-2.png': 'pancake-classic.jpg',
  'p03-3.png': 'pancake-tvorog.jpg',
  'p03-4.png': 'pancake-meat.jpg',
  'p04-1.png': 'oatmeal-coconut.jpg',
  'p04-2.png': 'pancake-icecream.jpg',
  'p04-3.png': 'ricotta-balls.jpg',
  'p04-4.png': 'croissant-beef.jpg',
  'p05-1.png': 'menemen-classic.jpg',
  'p05-2.png': 'menemen-sausage.jpg',
  'p05-3.png': 'rice-porridge-coconut.jpg',
  'p05-4.png': 'vohas-signature-breakfast.jpg',
  'p05-5.png': 'breakfast-with-toast.jpg',
  // Salads
  'p06-1.png': 'smak-chicken-salad.jpg',
  'p06-2.png': 'chicken-eggplant-salad.jpg',
  'p06-3.png': 'salmon-salad.jpg',
  'p06-4.png': 'greek-salad.jpg',
  'p07-1.png': 'tuna-salad.jpg',
  'p07-2.png': 'burrata-salad.jpg',
  'p07-3.png': 'arugula-beef-salad.jpg',
  'p07-4.png': 'warm-beef-salad.jpg',
  'p08-1.png': 'chicken-caesar.jpg',
  'p08-2.png': 'bavarian-salad.jpg',
  'p08-3.png': 'fresh-salad.jpg',
  'p08-4.png': 'shakarob-salad.jpg',
  // Soups
  'p09-1.png': 'lentil-cream-soup.jpg',
  'p09-2.png': 'mastava.jpg',
  'p09-3.png': 'borscht.jpg',
  'p10-1.png': 'chicken-noodle-soup.jpg',
  'p10-2.png': 'lamb-soup.jpg',
  'p10-3.png': 'beef-ramen.jpg',
  'p10-4.png': 'tom-yum-seafood.jpg',
  // Second courses
  'p11-1.png': 'homestyle-potatoes.jpg',
  'p11-2.png': 'veal-creamy-mushroom.jpg',
  'p11-3.png': 'chicken-farfalle.jpg',
  'p11-4.png': 'beef-liver.jpg',
  'p12-1.png': 'chicken-roll-cheese.jpg',
  'p12-2.png': 'stewed-beef.jpg',
  'p12-3.png': 'cutlets-mash.jpg',
  'p12-4.png': 'chicken-kyiv.jpg',
  // Steaks
  'p13-1.png': 'beef-medallions-bone-marrow.jpg',
  'p13-2.png': 'salmon-steak.jpg',
  // Pasta
  'p14-1.png': 'pasta-beef.jpg',
  'p14-2.png': 'pasta-alfredo.jpg',
  'p14-3.png': 'pasta-bolognese.jpg',
  // Fast food
  'p15-1.png': 'hamburger.jpg',
  'p15-2.png': 'cheeseburger.jpg',
  'p15-3.png': 'chicken-burger.jpg',
  'p16-1.png': 'mini-burgers.jpg',
  'p16-2.png': 'beef-sandwich.jpg',
  'p16-4.png': 'mushroom-burger.jpg',
  // Pizza (single shared photo)
  'p17-1.png': 'pizza-shared.jpg',
  // Sushi
  'p18-1.png': 'philadelphia-roll.jpg',
  'p18-2.png': 'canada-eel.jpg',
  'p18-3.png': 'rainbow-roll.jpg',
  'p18-4.png': 'ebi-mango-roll.jpg',
  'p18-5.png': 'california-crab.jpg',
  'p18-6.png': 'texas-roll.jpg',
  'p18-7.png': 'unagi-sake-roll.jpg',
  'p18-8.png': 'dragon-roll.jpg',
  'p19-1.png': 'fried-roll.jpg',
  'p19-2.png': 'baked-roll.jpg',
  'p19-3.png': 'maki-dok.jpg',
  'p19-4.png': 'tokyo-roll.jpg',
  'p19-5.png': 'nigiri-set.jpg',
  'p19-6.png': 'sweet-roll.jpg',
  // Kebabs
  'p20-1.png': 'ground-meat-kebab.jpg',
  'p20-2.png': 'orama-ground-kebab.jpg',
  'p20-3.png': 'lamb-pieces.jpg',
  'p20-4.png': 'beef-pieces.jpg',
  'p21-1.png': 'napoleon-kebab.jpg',
  'p21-2.png': 'roulette-kebab.jpg',
  'p21-3.png': 'chicken-wings.jpg',
  'p21-4.png': 'beshpanja.jpg',
  // Sides
  'p23-1.png': 'village-potatoes.jpg',
  'p23-2.png': 'french-fries.jpg',
  'p23-3.png': 'rice-vegetables.jpg',
  'p24-1.png': 'grilled-vegetables.jpg',
  'p24-2.png': 'grilled-mushrooms.jpg',
  'p24-3.png': 'grilled-corn.jpg',
  // Bread
  'p25-1.png': 'lepyoshka.jpg',
  'p25-2.png': 'white-bread.jpg',
  'p25-3.png': 'bread-assorted.jpg',
  'p25-4.png': 'toast-bread.jpg',
  'p25-5.png': 'rye-bread.jpg',
};

async function run() {
  fs.mkdirSync('assets/menu', { recursive: true });
  let ok = 0;
  for (const [src, dest] of Object.entries(MAP)) {
    const srcPath = `raw-photos/${src}`;
    if (!fs.existsSync(srcPath)) {
      console.log('MISSING', srcPath);
      continue;
    }
    const buf = await sharp(srcPath)
      .resize(W, H, { fit: 'cover', position: 'centre' })
      .flatten({ background: '#ffffff' })
      .jpeg({ quality: 85 })
      .toBuffer();
    const destPath = `assets/menu/${dest}`;
    const tmp = destPath + '.tmp';
    fs.writeFileSync(tmp, buf);
    fs.renameSync(tmp, destPath);
    ok++;
  }
  console.log(`Cropped ${ok}/${Object.keys(MAP).length} real dish photos`);
}

run();
