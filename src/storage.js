export const KEYS = {
  RECIPES: 'rw_recipes_v1',
  DRINKS: 'rw_drinks_v1',
  SUBMISSIONS: 'rw_submissions_pending_v1'
};

export function load(key, fallback) {
  try { const v = JSON.parse(localStorage.getItem(key)); return v ?? fallback; }
  catch { return fallback; }
}
export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
