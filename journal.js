function greet(name) {
  return "Hello, " + name + "!";
}
// Check if a number is even
function isEven(n) {
  return n % 2 === 0;
}

// Convert Fahrenheit to Celsius (rounded to 1 decimal)
function fahrenheitToCelsius(f) {
  return Math.round(((f - 32) * 5 / 9) * 10) / 10;
}

// Count vowels in a string
function countVowels(text) {
  let count = 0;
  const vowels = "aeiou";
  for (let i = 0; i < text.length; i++) {
    const ch = text[i].toLowerCase();
    if (vowels.includes(ch)) count++;
  }
  return count;
}

// Return the largest number in an array (assumes non-empty array)
function maxInArray(nums) {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i];
  }
  return max;
}
