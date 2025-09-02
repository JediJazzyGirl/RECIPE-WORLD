export const seedRecipes = [
  {
    id: 'r1',
    title: 'Garlic Butter Pasta',
    culture: 'Italian',
    difficulty: 'basic',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=1280&auto=format&fit=crop',
    ingredients: [
      '200g spaghetti',
      '3 tbsp unsalted butter',
      '3 cloves garlic, minced',
      'Salt & pepper',
      'Parmesan, chopped parsley'
    ],
    steps: [
      'Cook pasta in salted water until al dente.',
      'Melt butter, add garlic, sizzle 30s.',
      'Toss pasta with butter, season, garnish.'
    ],
    ratings: [5, 4, 5, 3],
    reviews: [
      { id: 'rv1', user: 'Kayla', text: 'Simple and tasty!', rating: 5, date: '2025-08-01' }
    ]
  },
  {
    id: 'r2',
    title: 'Chicken Tikka Masala',
    culture: 'Indian',
    difficulty: 'advanced',
    image: 'https://images.unsplash.com/photo-1633945274405-c6c9d3a1a4b7?q=80&w=1280&auto=format&fit=crop',
    ingredients: [
      'Chicken thighs',
      'Yogurt, spices',
      'Tomato sauce, cream'
    ],
    steps: [
      'Marinate chicken in yogurt & spices; grill/broil.',
      'Simmer sauce with tomatoes & cream; add chicken.'
    ],
    ratings: [5, 5, 4],
    reviews: []
  },
  {
    id: 'r3',
    title: 'Beef Bulgogi',
    culture: 'Korean',
    difficulty: 'advanced',
    image: 'https://images.unsplash.com/photo-1595278069441-2f40794a8755?q=80&w=1280&auto=format&fit=crop',
    ingredients: [
      'Beef ribeye, thinly sliced',
      'Soy sauce, sugar, sesame oil',
      'Garlic, pear, scallions'
    ],
    steps: [
      'Marinate beef 30–60 mins.',
      'Sear hot & fast, serve with rice.'
    ],
    ratings: [5, 5, 5, 4, 4],
    reviews: [{ id: 'rv2', user: 'Alex', text: 'Restaurant quality!', rating: 5, date: '2025-07-20' }]
  },
  {
    id: 'r4',
    title: 'Tacos al Pastor',
    culture: 'Mexican',
    difficulty: 'advanced',
    image: 'https://images.unsplash.com/photo-1601050690597-9a1bfaae9b1a?q=80&w=1280&auto=format&fit=crop',
    ingredients: ['Pork shoulder', 'Achiote, pineapple', 'Corn tortillas'],
    steps: ['Marinate pork with achiote & spices.', 'Grill and slice thin.'],
    ratings: [5, 4, 4],
    reviews: []
  },
  {
    id: 'r5',
    title: 'Avocado Toast',
    culture: 'American',
    difficulty: 'basic',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1280&auto=format&fit=crop',
    ingredients: ['Sourdough', 'Avocado', 'Lemon, chili flakes'],
    steps: ['Toast bread.', 'Mash avocado with lemon.', 'Spread & top with chili flakes.'],
    ratings: [3, 4],
    reviews: []
  }
];
