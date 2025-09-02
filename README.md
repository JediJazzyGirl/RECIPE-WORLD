# Recipe World (React, .js files only)

A complete recipe website starter built with **React + Vite**, using **only `.js` files** (no `.jsx`).  
It includes:
- Public page with basic recipes
- Sign up & login (localStorage demo)
- Members-only page with **advanced** recipes + **culture filter**
- Drinks section (Alcoholic / Non-Alcoholic)
- **0–5 star** rating + **reviews** on each recipe & drink
- **Submit** page that **requires a photo**
- **Admin** page to approve/reject submissions (role protected)

## Quick Start

```bash
# 1) Unzip this project
# 2) Install deps
npm install

# 3) Run the dev server
npm run dev
```

Open the URL that Vite prints (usually `http://localhost:5173`).

> This project configures Vite/Esbuild to parse JSX **inside .js files** via `vite.config.js`.

### Demo Admin Login
- Email: `admin@example.com`
- Password: `admin123`
- Or sign up with any email, and enter admin code `letmeinadmin` during signup to become an admin.

## How it works

- **Auth** is a simple localStorage demo (see `src/context/AuthContext.js`)
- **Data** seeds live in `src/data` and are saved to localStorage on first run
- **Ratings & Reviews** are stored per item and averaged
- **Submissions** are stored in `localStorage` under the key `rw_submissions_pending_v1`
- Approving a submission moves it into `rw_recipes_v1`

## Only .js files
All React components use JSX syntax **in .js files**. The Vite config forces `.js` to be handled by JSX loader.

## Folder Structure
```
recipe-world-js/
  ├─ index.html
  ├─ package.json
  ├─ vite.config.js
  └─ src/
     ├─ index.js
     ├─ App.js
     ├─ styles.css
     ├─ utils.js
     ├─ storage.js
     ├─ context/
     │  └─ AuthContext.js
     ├─ routes/
     │  └─ ProtectedRoute.js
     ├─ components/
     │  ├─ Navbar.js
     │  ├─ RecipeCard.js
     │  ├─ StarRating.js
     │  └─ ReviewList.js
     ├─ data/
     │  ├─ recipes.js
     │  └─ drinks.js
     └─ pages/
        ├─ Home.js
        ├─ Login.js
        ├─ Signup.js
        ├─ Members.js
        ├─ Drinks.js
        ├─ SubmitRecipe.js
        ├─ Admin.js
        ├─ RecipeDetail.js
        └─ DrinkDetail.js
```

## Notes
- This is a front‑end demo. Swap localStorage for your real backend (Firebase/Auth/Firestore) when ready.
- Images dropped on **Submit** are encoded as base64 for preview & storage.
- You can easily restyle via `src/styles.css`.
