export const seedRecipes = [
  {
    id: 'r1',
    title: 'Garlic Butter Pasta',
    culture: 'Italian',
    difficulty: 'basic',
    image: 'https://scarlatifamilykitchen.com/wp-content/uploads/2024/01/garlic-butter-pasta-1200x1200-2.jpg',
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
    image: 'https://cafedelites.com/wp-content/uploads/2018/04/Best-Chicken-Tikka-Masala-IMAGE-2.jpg',
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
    image: 'https://s23209.pcdn.co/wp-content/uploads/2019/04/240124_DD_korean-beef-bulgogi_274.jpg',
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
    image: 'https://plus.unsplash.com/premium_photo-1681406995086-e60e5c306e6c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    image: 'https://images.unsplash.com/photo-1603046891726-36bfd957e0bf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ingredients: ['Sourdough', 'Avocado', 'Lemon, chili flakes'],
    steps: ['Toast bread.', 'Mash avocado with lemon.', 'Spread & top with chili flakes.'],
    ratings: [3, 4],
    reviews: []
  }
];
