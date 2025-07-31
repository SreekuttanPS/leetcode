export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>(); // val -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // the number we need
    if (map.has(complement)) {
      return [map.get(complement)!, i]; // found it
    }
    map.set(nums[i], i); // store current num for future checks
  }

  return [];
}
