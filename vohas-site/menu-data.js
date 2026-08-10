// Full menu data for menu.html — sourced from the restaurant's own PDF menu
// ("Yangi menyu.pdf"). Photos are real dish photos cropped from that PDF,
// stored in assets/menu/. Items with no `img` field (bar drinks, pizza
// variants sharing one photo, company platters) fall back to the shared
// photo or the placeholder graphic automatically.
// To update prices or dish names, edit the fields below directly.

const MENU_ITEMS = [
  // Bar — Тea
  { cat: 'bar', name: 'Turkish Tea (Glass / Pot)', price: '5,000 / 40,000 UZS', desc: 'Tea' },
  { cat: 'bar', name: 'Black / Green Tea', price: '8,000 UZS', desc: 'Tea' },
  { cat: 'bar', name: 'Black / Green Tea with Lemon', price: '24,000 UZS', desc: 'Tea' },
  { cat: 'bar', name: 'Moroccan Tea', price: '48,000 UZS', desc: 'Tea' },
  { cat: 'bar', name: 'Berry Tea', price: '48,000 UZS', desc: 'Tea' },
  { cat: 'bar', name: 'Calming Tea', price: '22,000 UZS', desc: 'Tea' },
  { cat: 'bar', name: 'Sea Buckthorn with Orange', price: '75,000 UZS', desc: 'Tea' },
  // Bar — Black coffee
  { cat: 'bar', name: 'Espresso', price: '22,000 UZS', desc: 'Black coffee' },
  { cat: 'bar', name: 'Americano', price: '27,000 UZS', desc: 'Black coffee' },
  // Bar — Milk coffee
  { cat: 'bar', name: 'Latte', price: '30,000 UZS', desc: 'Milk coffee' },
  { cat: 'bar', name: 'Flat White', price: '32,000 UZS', desc: 'Milk coffee' },
  { cat: 'bar', name: 'Raf', price: '42,000 UZS', desc: 'Milk coffee' },
  { cat: 'bar', name: 'Mocha', price: '45,000 UZS', desc: 'Milk coffee' },
  { cat: 'bar', name: 'Cappuccino', price: '29,000 UZS', desc: 'Milk coffee' },
  // Bar — Iced coffee
  { cat: 'bar', name: 'Iced Latte', price: '36,000 UZS', desc: 'Iced coffee' },
  { cat: 'bar', name: 'Iced Cappuccino', price: '36,000 UZS', desc: 'Iced coffee' },
  { cat: 'bar', name: 'Iced Americano', price: '22,000 UZS', desc: 'Iced coffee' },
  { cat: 'bar', name: 'Iced Raf', price: '42,000 UZS', desc: 'Iced coffee' },
  // Bar — Mojito
  { cat: 'bar', name: 'Classic Mojito', price: '35,000 UZS', desc: 'Mojito' },
  { cat: 'bar', name: 'Ocean Mojito', price: '35,000 UZS', desc: 'Mojito' },
  { cat: 'bar', name: 'Strawberry Mojito', price: '35,000 UZS', desc: 'Mojito' },
  { cat: 'bar', name: 'Berry Mojito', price: '40,000 UZS', desc: 'Mojito' },
  // Bar — Fresh juice
  { cat: 'bar', name: 'Carrot Fresh', price: '24,000 UZS', desc: 'Fresh juice' },
  { cat: 'bar', name: 'Apple Fresh', price: '35,000 UZS', desc: 'Fresh juice' },
  { cat: 'bar', name: 'Apple-Carrot Fresh', price: '36,000 UZS', desc: 'Fresh juice' },
  { cat: 'bar', name: 'Orange Fresh', price: '60,000 UZS', desc: 'Fresh juice' },
  { cat: 'bar', name: 'Apple-Celery Fresh', price: '40,000 UZS', desc: 'Fresh juice' },
  { cat: 'bar', name: 'Apple Sunny Fresh', price: '42,000 UZS', desc: 'Fresh juice' },
  // Bar — Lemonade
  { cat: 'bar', name: 'Raspberry Ginger Lemonade', price: '44,000 UZS', desc: 'Lemonade' },
  { cat: 'bar', name: 'Pineapple Lemonade', price: '40,000 UZS', desc: 'Lemonade' },
  { cat: 'bar', name: 'Mango Passion Fruit Lemonade', price: '35,000 UZS', desc: 'Lemonade' },
  { cat: 'bar', name: 'Citrus Lemonade', price: '36,000 UZS', desc: 'Lemonade' },

  // Breakfast (8:00–12:00)
  { cat: 'breakfast', name: 'English Breakfast', price: '66,000 UZS', img: 'english-breakfast.jpg', desc: 'Hunting sausages, eggs, mushrooms, ripe tomatoes, mixed salad, toast' },
  { cat: 'breakfast', name: 'Pancake Classic', price: '25,000 UZS', img: 'pancake-classic.jpg', desc: 'Condensed milk, Nutella, seasonal fruits' },
  { cat: 'breakfast', name: 'Pancake with Cottage Cheese', price: '45,000 UZS', img: 'pancake-tvorog.jpg', desc: 'Ricotta sauce, corn flakes' },
  { cat: 'breakfast', name: 'Pancake with Meat', price: '45,000 UZS', img: 'pancake-meat.jpg', desc: 'Ground beef filling' },
  { cat: 'breakfast', name: 'Oatmeal on Coconut Milk', price: '60,000 UZS', img: 'oatmeal-coconut.jpg', desc: 'Rice, coconut milk, seasonal fruits' },
  { cat: 'breakfast', name: 'Pancake with Ice Cream', price: '45,000 UZS', img: 'pancake-icecream.jpg', desc: 'Sweet pancake, seasonal fruits' },
  { cat: 'breakfast', name: 'Ricotta Fritters', price: '45,000 UZS', img: 'ricotta-balls.jpg', desc: 'Ricotta sauce, corn flakes' },
  { cat: 'breakfast', name: 'Croissant with Beef', price: '45,000 UZS', img: 'croissant-beef.jpg', desc: 'Savory croissant, beef filling' },
  { cat: 'breakfast', name: 'Menemen Classic', price: '56,000 UZS', img: 'menemen-classic.jpg', desc: 'Egg, ripe tomatoes, bell pepper' },
  { cat: 'breakfast', name: 'Menemen with Sausage', price: '63,000 UZS', img: 'menemen-sausage.jpg', desc: 'Egg, ripe tomatoes, bell pepper, sausage' },
  { cat: 'breakfast', name: 'VOHAS Signature Breakfast', price: '69,000 UZS', img: 'vohas-signature-breakfast.jpg', desc: 'Omelet, spinach, mushrooms, bran bread' },
  { cat: 'breakfast', name: 'Breakfast with Toast', price: '70,000 UZS', img: 'breakfast-with-toast.jpg', desc: 'Salmon, avocado, mixed salad, scrambled eggs' },

  // Salads
  { cat: 'salads', name: 'Smak with Chicken', price: '60,000 UZS', img: 'smak-chicken-salad.jpg', desc: 'Tomatoes, lettuce, croutons, chicken, gouda cheese, garlic, mayonnaise' },
  { cat: 'salads', name: 'Chicken & Eggplant Salad', price: '68,000 UZS', img: 'chicken-eggplant-salad.jpg', desc: 'Breaded chicken breast, breaded eggplant, cherry tomatoes, feta, signature sauce' },
  { cat: 'salads', name: 'Salmon Salad', price: '69,000 UZS', img: 'salmon-salad.jpg', desc: 'Mixed greens, signature sauce, tomatoes, avocado, daikon' },
  { cat: 'salads', name: 'Greek Salad', price: '68,000 UZS', img: 'greek-salad.jpg', desc: 'Ripe tomatoes, cucumbers, mixed greens, olives, feta cheese' },
  { cat: 'salads', name: 'Tuna Salad', price: '80,000 UZS', img: 'tuna-salad.jpg', desc: 'Canned tuna, tomatoes, avocado, mixed greens, signature sauce' },
  { cat: 'salads', name: 'Burrata Salad', price: '84,000 UZS', img: 'burrata-salad.jpg', desc: 'Mixed greens, pesto sauce, tomatoes, burrata cheese' },
  { cat: 'salads', name: 'Arugula Salad with Beef', price: '87,000 UZS', img: 'arugula-beef-salad.jpg', desc: 'Mixed greens, beef, signature sauce' },
  { cat: 'salads', name: 'Warm Salad with Beef', price: '87,000 UZS', img: 'warm-beef-salad.jpg', desc: 'Veal, eggplant, ripe tomatoes, mixed greens, sauce' },
  { cat: 'salads', name: 'Chicken Caesar', price: '60,000 UZS', img: 'chicken-caesar.jpg', desc: 'Iceberg, cherry tomatoes, croutons, chicken, parmesan, quail egg' },
  { cat: 'salads', name: 'Bavarian Salad', price: '63,000 UZS', img: 'bavarian-salad.jpg', desc: 'Beef, marinated mushrooms, marinated cucumbers, onion, greens' },
  { cat: 'salads', name: 'Fresh Salad', price: '23,000 UZS', img: 'fresh-salad.jpg', desc: 'Ripe tomatoes, cucumbers, onion, spinach' },
  { cat: 'salads', name: 'Shakarob', price: '30,000 UZS', img: 'shakarob-salad.jpg', desc: 'Ripe tomatoes, cucumbers, onion, spinach, suzma' },

  // Soups
  { cat: 'soups', name: 'Lentil Cream Soup', price: '30,000 UZS', img: 'lentil-cream-soup.jpg', desc: 'Lentils, potato, paprika, onion, cream, croutons, lemon' },
  { cat: 'soups', name: 'Mastava', price: '36,000 UZS', img: 'mastava.jpg', desc: 'Rice, onion, carrot, potato, cilantro, beef, tomato paste' },
  { cat: 'soups', name: 'Borscht', price: '40,000 UZS', img: 'borscht.jpg', desc: 'Beetroot, beef, green onion, sour cream, black bread' },
  { cat: 'soups', name: 'Chicken Noodle Soup', price: '30,000 UZS', img: 'chicken-noodle-soup.jpg', desc: 'Boiled chicken, egg noodles, rich broth, herbs' },
  { cat: 'soups', name: 'Hearty Lamb Soup', price: '44,000 UZS', img: 'lamb-soup.jpg', desc: 'Tender lamb loin, rich broth, vegetables and herbs' },
  { cat: 'soups', name: 'Beef Ramen', price: '84,000 UZS', img: 'beef-ramen.jpg', desc: 'Wheat noodles, beef, boiled egg, cheddar, mushrooms' },
  { cat: 'soups', name: 'Chicken Ramen', price: '84,000 UZS', img: 'beef-ramen.jpg', desc: 'Wheat noodles, chicken, boiled egg, cheddar, mushrooms' },
  { cat: 'soups', name: 'Tom Yum with Chicken', price: '54,000 UZS', img: 'tom-yum-seafood.jpg', desc: 'Rice, chicken, cherry tomatoes, mushrooms' },
  { cat: 'soups', name: 'Tom Yum with Seafood', price: '81,000 UZS', img: 'tom-yum-seafood.jpg', desc: 'Rice, salmon, shrimp, mussels, cherry tomatoes, mushrooms' },

  // Second courses / Mains
  { cat: 'mains', name: 'Homestyle Potatoes', price: '81,000 UZS', img: 'homestyle-potatoes.jpg', desc: 'Potato, beef tenderloin, mushrooms, pickles, cream, herbs' },
  { cat: 'mains', name: 'Veal in Creamy Mushroom Sauce', price: '93,000 UZS', img: 'veal-creamy-mushroom.jpg', desc: 'Beef tenderloin, mushrooms, cream, mashed potato, corn' },
  { cat: 'mains', name: 'Chicken with Farfalle', price: '84,000 UZS', img: 'chicken-farfalle.jpg', desc: 'Chicken thigh, farfalle pasta, mixed greens' },
  { cat: 'mains', name: 'Beef Liver', price: '63,000 UZS', img: 'beef-liver.jpg', desc: 'Beef liver, onion, bran bread, potato, sauce' },
  { cat: 'mains', name: 'Chicken Roll with Cheese', price: '78,000 UZS', img: 'chicken-roll-cheese.jpg', desc: 'Chicken fillet, mozzarella, mixed greens, creamy mushroom sauce, coleslaw' },
  { cat: 'mains', name: 'Stewed Beef', price: '105,000 UZS', img: 'stewed-beef.jpg', desc: 'Slow-braised beef, spices, black bread, onion' },
  { cat: 'mains', name: 'Cutlets with Mash', price: '84,000 UZS', img: 'cutlets-mash.jpg', desc: 'Beef cutlets, mashed potato, signature sauce, egg' },
  { cat: 'mains', name: 'Chicken Kyiv', price: '80,000 UZS', img: 'chicken-kyiv.jpg', desc: 'Juicy chicken mince, creamy butter, mashed potato, sweet corn, creamy mushroom sauce' },

  // Steaks
  { cat: 'steaks', name: 'Beef Medallions with Bone Marrow', price: '169,000 UZS', img: 'beef-medallions-bone-marrow.jpg', desc: 'Beef tenderloin, french fries, bone marrow, coleslaw, black bread' },
  { cat: 'steaks', name: 'Salmon Steak', price: '126,000 UZS', img: 'salmon-steak.jpg', desc: 'Salmon, mashed potato, hollandaise sauce' },

  // Pasta
  { cat: 'pasta', name: 'Pasta with Beef', price: '80,000 UZS', img: 'pasta-beef.jpg', desc: 'Beef tenderloin, mushrooms, fettuccine' },
  { cat: 'pasta', name: 'Pasta Alfredo', price: '60,000 UZS', img: 'pasta-alfredo.jpg', desc: 'Chicken fillet, mushrooms, fettuccine, cream, parmesan' },
  { cat: 'pasta', name: 'Pasta Bolognese', price: '78,000 UZS', img: 'pasta-bolognese.jpg', desc: 'Ground beef, tomato sauce, parmesan, spaghetti' },

  // Fast Food
  { cat: 'fastfood', name: 'Hamburger', price: '66,000 UZS', img: 'hamburger.jpg', desc: 'Juicy beef patty, ripe tomatoes, potato wedges, sauce' },
  { cat: 'fastfood', name: 'Cheeseburger', price: '70,000 UZS', img: 'cheeseburger.jpg', desc: 'Juicy beef patty, cheddar, ripe tomatoes, potato wedges, salsa sauce' },
  { cat: 'fastfood', name: 'Chicken Burger', price: '57,000 UZS', img: 'chicken-burger.jpg', desc: 'Chicken thigh, ripe tomatoes, potato wedges, sauce' },
  { cat: 'fastfood', name: 'Mini Burgers', price: '58,000 UZS', img: 'mini-burgers.jpg', desc: 'Tender beef patty, signature sauce, potato balls, ripe tomatoes, cheese sauce' },
  { cat: 'fastfood', name: 'Beef Sandwich', price: '65,000 UZS', img: 'beef-sandwich.jpg', desc: 'Tender beef tenderloin, signature sauce, potato wedges, tomatoes, mushrooms, mozzarella, ketchup' },
  { cat: 'fastfood', name: 'Mushroom Burger', price: '57,000 UZS', img: 'mushroom-burger.jpg', desc: 'Juicy beef patty, ripe tomatoes, potato wedges, sauce, mushrooms' },

  // Pizza / Pide
  { cat: 'pizza', name: 'Pide with Cheese', price: '80,000 UZS', img: 'pizza-shared.jpg', desc: 'Pide' },
  { cat: 'pizza', name: 'Margherita', price: '69,000 UZS', img: 'pizza-shared.jpg', desc: 'Pizza' },
  { cat: 'pizza', name: 'Pizza Caesar', price: '80,000 UZS', img: 'pizza-shared.jpg', desc: 'Pizza' },
  { cat: 'pizza', name: 'Pepperoni', price: '93,000 UZS', img: 'pizza-shared.jpg', desc: 'Pizza' },
  { cat: 'pizza', name: 'Beef Cutlet Pizza', price: '95,000 UZS', img: 'pizza-shared.jpg', desc: 'Pizza' },
  { cat: 'pizza', name: 'Meat Pizza', price: '120,000 UZS', img: 'pizza-shared.jpg', desc: 'Pizza' },
  { cat: 'pizza', name: 'Pizza Mix', price: '120,000 UZS', img: 'pizza-shared.jpg', desc: 'Pizza' },

  // Sushi & Rolls
  { cat: 'sushi', name: 'Philadelphia Roll', price: '100,000 UZS', img: 'philadelphia-roll.jpg', desc: 'Roll' },
  { cat: 'sushi', name: 'Canada with Eel', price: '98,000 UZS', img: 'canada-eel.jpg', desc: 'Roll' },
  { cat: 'sushi', name: 'Rainbow Roll', price: '99,000 UZS', img: 'rainbow-roll.jpg', desc: 'Roll' },
  { cat: 'sushi', name: 'Ebi Mango Roll', price: '110,000 UZS', img: 'ebi-mango-roll.jpg', desc: 'Roll' },
  { cat: 'sushi', name: 'California with Crab', price: '68,000 UZS', img: 'california-crab.jpg', desc: 'Roll' },
  { cat: 'sushi', name: 'Texas Roll', price: '84,000 UZS', img: 'texas-roll.jpg', desc: 'Roll' },
  { cat: 'sushi', name: 'Unagi Sake Roll', price: '87,000 UZS', img: 'unagi-sake-roll.jpg', desc: 'Roll' },
  { cat: 'sushi', name: 'Dragon Roll', price: '99,000 UZS', img: 'dragon-roll.jpg', desc: 'Roll' },
  { cat: 'sushi', name: 'Fried Roll with Salmon', price: '69,000 UZS', img: 'fried-roll.jpg', desc: 'Fried roll' },
  { cat: 'sushi', name: 'Fried Roll with Eel', price: '69,000 UZS', img: 'fried-roll.jpg', desc: 'Fried roll' },
  { cat: 'sushi', name: 'Fried Roll with Shrimp', price: '74,000 UZS', img: 'fried-roll.jpg', desc: 'Fried roll' },
  { cat: 'sushi', name: 'Fried Roll with Crab', price: '59,000 UZS', img: 'fried-roll.jpg', desc: 'Fried roll' },
  { cat: 'sushi', name: 'Baked Roll with Salmon', price: '78,000 UZS', img: 'baked-roll.jpg', desc: 'Baked roll' },
  { cat: 'sushi', name: 'Baked Roll with Eel', price: '75,000 UZS', img: 'baked-roll.jpg', desc: 'Baked roll' },
  { cat: 'sushi', name: 'Baked Roll with Chicken', price: '59,000 UZS', img: 'baked-roll.jpg', desc: 'Baked roll' },
  { cat: 'sushi', name: 'Baked Roll with Shrimp', price: '87,000 UZS', img: 'baked-roll.jpg', desc: 'Baked roll' },
  { cat: 'sushi', name: 'Maki Dok', price: '90,000 UZS', img: 'maki-dok.jpg', desc: 'Roll' },
  { cat: 'sushi', name: 'Tokyo Roll', price: '74,000 UZS', img: 'tokyo-roll.jpg', desc: 'Roll' },
  { cat: 'sushi', name: 'Nigiri with Salmon', price: '29,000 UZS', img: 'nigiri-set.jpg', desc: 'Nigiri, per piece' },
  { cat: 'sushi', name: 'Nigiri with Eel', price: '29,000 UZS', img: 'nigiri-set.jpg', desc: 'Nigiri, per piece' },
  { cat: 'sushi', name: 'Nigiri with Shrimp', price: '29,000 UZS', img: 'nigiri-set.jpg', desc: 'Nigiri, per piece' },
  { cat: 'sushi', name: 'Sweet Roll', price: '71,000 UZS', img: 'sweet-roll.jpg', desc: 'Dessert roll' },
  { cat: 'sushi', name: 'Premium Set', price: '393,000 UZS', desc: 'Sushi set' },
  { cat: 'sushi', name: 'Unagi Set', price: '243,000 UZS', desc: 'Sushi set' },
  { cat: 'sushi', name: 'Hot Set', price: '170,000 UZS', desc: 'Sushi set' },

  // Kebabs
  { cat: 'kebabs', name: 'Ground Meat Kebab', price: '42,000 UZS', img: 'ground-meat-kebab.jpg', desc: 'Kebab' },
  { cat: 'kebabs', name: 'Orama Ground Kebab', price: '47,000 UZS', img: 'orama-ground-kebab.jpg', desc: 'Kebab' },
  { cat: 'kebabs', name: 'Lamb Pieces', price: '58,000 UZS', img: 'lamb-pieces.jpg', desc: 'Kebab' },
  { cat: 'kebabs', name: 'Beef Pieces', price: '58,000 UZS', img: 'beef-pieces.jpg', desc: 'Kebab' },
  { cat: 'kebabs', name: 'Napoleon', price: '63,000 UZS', img: 'napoleon-kebab.jpg', desc: 'Kebab' },
  { cat: 'kebabs', name: 'Roulette', price: '57,000 UZS', img: 'roulette-kebab.jpg', desc: 'Kebab' },
  { cat: 'kebabs', name: 'Chicken Wings', price: '46,000 UZS', img: 'chicken-wings.jpg', desc: 'Kebab' },
  { cat: 'kebabs', name: 'Beshpanja', price: '108,000 UZS', img: 'beshpanja.jpg', desc: 'Kebab' },

  // Dishes for a Company
  { cat: 'company', name: 'Assorted Kebab', price: '478,000 UZS', desc: 'For the company' },
  { cat: 'company', name: 'VOHAS Assorted Platter', price: '478,000 UZS', desc: 'For the company' },
  { cat: 'company', name: 'Chuponcha, 1kg', price: '240,000 UZS', desc: 'For the company' },
  { cat: 'company', name: 'Chuponcha with Chicken', price: '90,000 UZS', desc: 'For the company' },

  // Side Dishes
  { cat: 'sides', name: 'Village-Style Potatoes', price: '24,000 UZS', img: 'village-potatoes.jpg', desc: 'Side dish' },
  { cat: 'sides', name: 'French Fries', price: '32,000 UZS', img: 'french-fries.jpg', desc: 'Side dish' },
  { cat: 'sides', name: 'Rice with Vegetables', price: '28,000 UZS', img: 'rice-vegetables.jpg', desc: 'Side dish' },
  { cat: 'sides', name: 'Grilled Vegetables', price: '22,000 UZS', img: 'grilled-vegetables.jpg', desc: 'Side dish' },
  { cat: 'sides', name: 'Grilled Mushrooms', price: '48,000 UZS', img: 'grilled-mushrooms.jpg', desc: 'Side dish' },
  { cat: 'sides', name: 'Grilled Corn', price: '36,000 UZS', img: 'grilled-corn.jpg', desc: 'Side dish' },

  // Bread
  { cat: 'bread', name: 'Lepyoshka (1 pc)', price: '7,000 UZS', img: 'lepyoshka.jpg', desc: 'Bread' },
  { cat: 'bread', name: 'White Bread', price: '8,000 UZS', img: 'white-bread.jpg', desc: 'Bread' },
  { cat: 'bread', name: 'Toast Bread', price: '11,000 UZS', img: 'toast-bread.jpg', desc: 'Bread' },
  { cat: 'bread', name: 'Assorted Bread Basket', price: '26,000 UZS', img: 'bread-assorted.jpg', desc: 'Bread' },
  { cat: 'bread', name: 'Rye Bread', price: '11,000 UZS', img: 'rye-bread.jpg', desc: 'Bread' },
  { cat: 'bread', name: 'Grissini', price: '11,000 UZS', desc: 'Breadsticks' },
];
