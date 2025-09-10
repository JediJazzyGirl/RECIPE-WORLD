🍽️ Recipe World

A beautifully crafted, interactive web app for discovering, sharing, and reviewing recipes from around the world. Built with React, Bootstrap, and SCSS, Recipe World is your go-to hub for global flavors—whether you're a kitchen newbie or a culinary adventurer.

🌍 Project Vision

Recipe World celebrates cultural diversity through food by creating a community-driven platform. It empowers users to learn, cook, share, and enjoy authentic dishes from every corner of the globe while fostering connection through taste.

🚀 Features

- 👨‍🍳 Public & Member-Only Recipes
Basic recipes accessible to all visitors; advanced and premium dishes unlocked for registered members.

- 🧾 Filter by Culture, Type & Difficulty
Discover recipes by culture (Italian, Japanese, etc.), category (food, alcoholic/non-alcoholic drinks), and skill level with smart filters.

- 📸 Upload Recipes with Photos
Members submit recipes with ingredients, instructions, and mandatory photos of the finished dish.

- 🌟 Rating & Review System
Rate recipes from 0–5 stars and leave detailed feedback.

- 👤 User Profiles with Avatars
Recipes show author info with profile pictures for a personal community touch.

- 💾 Bookmark Your Favorites
Logged-in members can save recipes for quick future access.

- 🔥 “Top Rated This Week” Section
Highlights trending recipes based on recent user ratings.

- 🎮 Interactive Step-by-Step Mode
Converts any recipe into a guided cooking walkthrough, one step at a time.

- 🔍 Live Search
Instantly find recipes by title or ingredients without page reloads.

- 🧑‍🍳 Admin Dashboard
Admins review and approve or reject submitted recipes before publication.

- 🗃️ Local Storage Persistence
Bookmarks, login states, and custom recipes are saved in the browser for seamless offline use.

- 📱 Responsive Design
Fully optimized for desktop, tablet, and mobile devices.

- 🍹 Drinks Section
Separate browse and detail pages for drinks, expanding the culinary experience.

🧪 Technologies Used

- React (with Hooks)
- React Router v6
- Local Storage for persistence
- Context API for authentication state
- JavaScript (ES6+)
- Bootstrap & SCSS
- CSS custom properties and modern layout


📁 Project Structure

src/
├── components/        # Reusable UI components (RecipeCard, StarRating, etc.)
├── context/           # Authentication context and provider
├── data/              # Seed data for recipes, drinks, and cultures
├── pages/             # Route pages (Home, Login, Signup, Members, etc.)
├── routes/            # ProtectedRoute component
├── styles.css         # Global CSS styles
├── utils.js           # Utility functions (e.g. average)
├── storage.js         # LocalStorage helpers
└── App.js             # Main app and route definitions

🛠️ Installation

   git clone https://github.com/JediJazzyGirl/RECIPE-WORLD
   npm install
   npm start


Authentication & Usage

- Users can register and login.
- Optional admin code (letmeinadmin) grants admin privileges.
- Logged-in members can submit recipes, rate, review, and bookmark favorites
- Admins moderate submissions through a dedicated dashboard.
- Visitors can browse and filter beginner recipes without registration.

Additional Notes

- Recipe submissions support image uploads via FileReader; images are stored
  as base64 strings in LocalStorage.
- Ratings and reviews update dynamically in the UI.
- No backend API: all data persists locally in the browser’s LocalStorage.

💡 Potential Future Enhancements

- Integrate real backend API for persistent storage and user authentication
- Add social sharing features
- Implement image hosting and optimization
- Introduce meal planning and shopping list tools
- Expand drink recipes with cocktail tutorials and videos
- Push notifications for trending recipes and community events

👨‍💻 Authors

- Jazmyn Alpha
- Dylan Wilson