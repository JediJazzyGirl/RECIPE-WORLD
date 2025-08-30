🍽️ Recipe World

A beautifully crafted, interactive web app for discovering, sharing, and reviewing recipes from around the world. Built with React, Bootstrap, and SCSS, Recipe World is your go-to hub for global flavors—whether you're a kitchen newbie or a culinary adventurer.

🌍 Project Vision

To create a community-driven recipe platform that celebrates cultural diversity through food. Recipe World empowers users to learn, cook, and contribute delicious dishes from every corner of the globe.

🚀 Features

👨‍🍳 Public & Member-Only Recipes
Basic recipes are available to all visitors, while advanced and premium dishes are unlocked for registered users.

🧾 Filter by Culture, Type & Difficulty
Apply smart filters to discover recipes by culture (e.g., Italian, Japanese), type (food, alcoholic/non-alcoholic drinks), and skill level.

📸 Upload Recipes with Photos
Members can submit their own recipes, complete with ingredients, steps, and a required photo of the finished dish.

🌟 Rating & Review System
Rate recipes from 0–5 stars and leave helpful feedback on your favorite meals.

👤 User Profiles with Avatars
Each recipe displays its author and profile picture, creating a personal touch across the platform.

🎲 “What Should I Cook?” Spinner
Feeling indecisive? Use the fun randomizer to pick a recipe for you!

💾 Bookmark Your Favorites
Save and revisit recipes you love—only for logged-in members.

🔥 “Top Rated This Week” Section
See which dishes are trending based on user reviews.

🎮 Interactive Step-by-Step Mode
Turn any recipe into an engaging walkthrough experience, one step at a time.

🔍 Live Search
Search recipes instantly by title or ingredients without reloading the page.

🧑‍🍳 Admin Dashboard
Admins can approve or reject submitted recipes before they appear on the site.

🗃️ Local Storage
Everything (bookmarks, login state, custom recipes) is saved in the browser.

📱 Responsive Design
Enjoy a seamless experience across desktops, tablets, and mobile devices.

🧪 Technologies Used

React (with Hooks & Context API)

React Router DOM

Bootstrap 5 + SCSS

LocalStorage API

Vite (bundler)

Custom JSON data storage

JavaScript (ES6+)

📁 Project Structure
src/
├── components/
│   ├── RecipeCard.jsx
│   ├── FilterPanel.jsx
│   ├── StarRating.jsx
│   ├── StepByStep.jsx
│   └── BookmarkButton.jsx
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── SubmitRecipe.jsx
│   ├── MemberRecipes.jsx
│   ├── AdminDashboard.jsx
│   └── RecipeDetail.jsx
├── context/
│   └── AuthContext.jsx
├── utils/
│   └── storage.js
├── App.jsx
├── main.jsx
└── styles.scss

🛠️ Installation & Setup

Clone the repository:

git clone https://github.com/your-username/recipe-world.git
cd recipe-world
npm install
npm run dev

📚 Data Sources / Inspiration

AllRecipes

Tasty

Serious Eats

Reddit’s r/recipes

Cultural cookbooks and contributors

💡 Potential Future Enhancements

🧾 Firebase or Supabase backend for multi-user support

🧑‍🤝‍🧑 Community forums and comments

📱 PWA (Progressive Web App) support for offline cooking

🍽️ Meal planner and grocery list generator

🔒 OAuth (Google/Facebook) login

📸 AI-powered image tagging and search

🧠 Smart recipe recommendations