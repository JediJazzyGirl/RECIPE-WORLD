export function average(nums) {
  if (!nums || nums.length === 0) return 0;
  return Number((nums.reduce((a,b)=>a+b,0) / nums.length).toFixed(2));
}
