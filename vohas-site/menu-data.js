// Full menu data for menu.html
// Each item's image should be placed at assets/menu/<img>
// (JPG or PNG, ~1000x750px recommended). Missing images fall back
// to assets/menu/placeholder.svg automatically.
// To add real descriptions, edit the `desc` field below.

const MENU_ITEMS = [
  // Breakfast
  { cat: 'breakfast', name: 'English Breakfast', price: '66,000 UZS', img: 'english-breakfast.jpg', desc: 'Hunting sausages, eggs, mushrooms, tomatoes, mixed salad, toast' },
  { cat: 'breakfast', name: 'VOHAS Signature Breakfast', price: '69,000 UZS', img: 'vohas-signature-breakfast.jpg', desc: 'Omelet, spinach, mushrooms, bran bread' },
  { cat: 'breakfast', name: 'Breakfast with Toast', price: '70,000 UZS', img: 'breakfast-with-toast.jpg', desc: 'Salmon, avocado, mixed salad, scrambled eggs' },
  { cat: 'breakfast', name: 'Classic Menemen', price: '56,000 UZS', img: 'classic-menemen.jpg', desc: 'Egg, tomatoes, bell pepper' },
  { cat: 'breakfast', name: 'Classic Pancake', price: '25,000 UZS', img: 'classic-pancake.jpg', desc: 'Condensed milk, Nutella, seasonal fruits' },

  // Coffee & Drinks
  { cat: 'drinks', name: 'Turkish Tea, Glass', price: '5,000 UZS', img: 'turkish-tea.jpg', desc: 'Tea' },
  { cat: 'drinks', name: 'Moroccan Tea', price: '48,000 UZS', img: 'moroccan-tea.jpg', desc: 'Tea' },
  { cat: 'drinks', name: 'Sea Buckthorn with Orange', price: '75,000 UZS', img: 'sea-buckthorn-orange.jpg', desc: 'Tea' },
  { cat: 'drinks', name: 'Espresso', price: '22,000 UZS', img: 'espresso.jpg', desc: 'Black coffee' },
  { cat: 'drinks', name: 'Americano', price: '27,000 UZS', img: 'americano.jpg', desc: 'Black coffee' },
  { cat: 'drinks', name: 'Latte', price: '30,000 UZS', img: 'latte.jpg', desc: 'Milk coffee' },
  { cat: 'drinks', name: 'Mocha', price: '45,000 UZS', img: 'mocha.jpg', desc: 'Milk coffee' },
  { cat: 'drinks', name: 'Iced Latte', price: '36,000 UZS', img: 'iced-latte.jpg', desc: 'Iced coffee' },
  { cat: 'drinks', name: 'Classic Mojito', price: '35,000 UZS', img: 'classic-mojito.jpg', desc: 'Mojito' },
  { cat: 'drinks', name: 'Orange Fresh Juice', price: '60,000 UZS', img: 'orange-fresh-juice.jpg', desc: 'Fresh juice' },
  { cat: 'drinks', name: 'Mango-Passion Fruit', price: '35,000 UZS', img: 'mango-passion-fruit.jpg', desc: 'Lemonade' },

  // Salads & Soups
  { cat: 'starters', name: 'Chicken Caesar', price: '60,000 UZS', img: 'chicken-caesar.jpg', desc: 'Salad' },
  { cat: 'starters', name: 'Greek Salad', price: '68,000 UZS', img: 'greek-salad.jpg', desc: 'Salad' },
  { cat: 'starters', name: 'Tuna Salad', price: '80,000 UZS', img: 'tuna-salad.jpg', desc: 'Salad' },
  { cat: 'starters', name: 'Burrata Salad', price: '84,000 UZS', img: 'burrata-salad.jpg', desc: 'Salad' },
  { cat: 'starters', name: 'Fresh Salad', price: '23,000 UZS', img: 'fresh-salad.jpg', desc: 'Salad' },
  { cat: 'starters', name: 'Lentil Cream Soup', price: '30,000 UZS', img: 'lentil-cream-soup.jpg', desc: 'Soup' },
  { cat: 'starters', name: 'Mastava', price: '36,000 UZS', img: 'mastava.jpg', desc: 'Soup' },
  { cat: 'starters', name: 'Borscht', price: '40,000 UZS', img: 'borscht.jpg', desc: 'Soup' },
  { cat: 'starters', name: 'Beef Ramen', price: '84,000 UZS', img: 'beef-ramen.jpg', desc: 'Soup' },
  { cat: 'starters', name: 'Tom Yum with Seafood', price: '54,000 UZS', img: 'tom-yum-seafood.jpg', desc: 'Soup' },

  // Mains & Steaks
  { cat: 'mains', name: 'Homestyle Potatoes', price: '81,000 UZS', img: 'homestyle-potatoes.jpg', desc: 'Main course' },
  { cat: 'mains', name: 'Veal in Creamy Mushroom Sauce', price: '93,000 UZS', img: 'veal-creamy-mushroom.jpg', desc: 'Main course' },
  { cat: 'mains', name: 'Stewed Beef', price: '105,000 UZS', img: 'stewed-beef.jpg', desc: 'Main course' },
  { cat: 'mains', name: 'Chicken Kyiv', price: '80,000 UZS', img: 'chicken-kyiv.jpg', desc: 'Main course' },
  { cat: 'mains', name: 'Beef Medallions with Bone Marrow', price: '169,000 UZS', img: 'beef-medallions-bone-marrow.jpg', desc: 'Steak' },
  { cat: 'mains', name: 'Salmon Steak', price: '126,000 UZS', img: 'salmon-steak.jpg', desc: 'Steak' },
  { cat: 'mains', name: 'Pasta Alfredo', price: '60,000 UZS', img: 'pasta-alfredo.jpg', desc: 'Pasta' },
  { cat: 'mains', name: 'Pasta Bolognese', price: '78,000 UZS', img: 'pasta-bolognese.jpg', desc: 'Pasta' },

  // Pizza, Burgers & Kebabs
  { cat: 'casual', name: 'Hamburger', price: '66,000 UZS', img: 'hamburger.jpg', desc: 'Fast food' },
  { cat: 'casual', name: 'Cheeseburger', price: '70,000 UZS', img: 'cheeseburger.jpg', desc: 'Fast food' },
  { cat: 'casual', name: 'Chicken Burger', price: '57,000 UZS', img: 'chicken-burger.jpg', desc: 'Fast food' },
  { cat: 'casual', name: 'Mini Burgers', price: '58,000 UZS', img: 'mini-burgers.jpg', desc: 'Fast food' },
  { cat: 'casual', name: 'Pepperoni Pizza', price: '93,000 UZS', img: 'pepperoni-pizza.jpg', desc: 'Pizza' },
  { cat: 'casual', name: 'Meat Pizza', price: '120,000 UZS', img: 'meat-pizza.jpg', desc: 'Pizza' },
  { cat: 'casual', name: 'Ground Meat Kebab', price: '42,000 UZS', img: 'ground-meat-kebab.jpg', desc: 'Kebab' },
  { cat: 'casual', name: 'Lamb Pieces', price: '58,000 UZS', img: 'lamb-pieces.jpg', desc: 'Kebab' },
  { cat: 'casual', name: 'Beshpanja', price: '108,000 UZS', img: 'beshpanja.jpg', desc: 'Kebab' },
  { cat: 'casual', name: 'Assorted Kebab', price: '478,000 UZS', img: 'assorted-kebab.jpg', desc: 'For the company' },
  { cat: 'casual', name: 'VOHAS Assorted Platter', price: '478,000 UZS', img: 'vohas-assorted-platter.jpg', desc: 'For the company' },

  // Sushi & Rolls
  { cat: 'sushi', name: 'Philadelphia Roll', price: '100,000 UZS', img: 'philadelphia-roll.jpg', desc: 'Roll' },
  { cat: 'sushi', name: 'Canada with Eel', price: '98,000 UZS', img: 'canada-eel.jpg', desc: 'Roll' },
  { cat: 'sushi', name: 'Rainbow Roll', price: '99,000 UZS', img: 'rainbow-roll.jpg', desc: 'Roll' },
  { cat: 'sushi', name: 'Ebi Mango Roll', price: '110,000 UZS', img: 'ebi-mango-roll.jpg', desc: 'Roll' },
  { cat: 'sushi', name: 'California with Crab', price: '68,000 UZS', img: 'california-crab.jpg', desc: 'Roll' },
  { cat: 'sushi', name: 'Fried Roll with Salmon', price: '69,000 UZS', img: 'fried-roll-salmon.jpg', desc: 'Roll' },
  { cat: 'sushi', name: 'Baked Roll with Shrimp', price: '87,000 UZS', img: 'baked-roll-shrimp.jpg', desc: 'Roll' },
  { cat: 'sushi', name: 'Sweet Roll', price: '71,000 UZS', img: 'sweet-roll.jpg', desc: 'Roll' },
  { cat: 'sushi', name: 'Premium Set', price: '393,000 UZS', img: 'premium-set.jpg', desc: 'Set' },
  { cat: 'sushi', name: 'Unagi Set', price: '243,000 UZS', img: 'unagi-set.jpg', desc: 'Set' },
  { cat: 'sushi', name: 'Hot Set', price: '170,000 UZS', img: 'hot-set.jpg', desc: 'Set' },
];
