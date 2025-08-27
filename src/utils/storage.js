export function getAllRecipes() {
  return JSON.parse(localStorage.getItem('recipes')) || [];
}

export function saveAllRecipes(recipes) {
  localStorage.setItem('recipes', JSON.stringify(recipes));
}

export function getApprovedRecipes() {
  return getAllRecipes().filter(r => r.approved);
}

export function getTopRated(limit = 3) {
  return getApprovedRecipes().sort((a, b) => (b.rating || 0) - (a.rating || 0)).slice(0, limit);
}

export function addPending(recipe) {
  const all = getAllRecipes();
  all.push(recipe);
  saveAllRecipes(all);
}

export function approveRecipeById(id) {
  const all = getAllRecipes();
  const idx = all.findIndex(r => r.id === id);
  if (idx !== -1) { all[idx].approved = true; saveAllRecipes(all); }
}

export function deleteRecipeById(id) {
  const all = getAllRecipes().filter(r => r.id !== id);
  saveAllRecipes(all);
}

export function getRecipeById(id) {
  return getAllRecipes().find(r => r.id === id);
}
