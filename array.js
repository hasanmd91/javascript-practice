/**
 * Task description: Write a method that creates a new array with given values
 * Expected Result: (3, 'a') => ['a', 'a', 'a']
 * Task Complexity: 1 of 5
 * @param {number} arraySize - size of array
 * @param {?} value - value to fill
 * @returns {Array}
 */
const fill = (arraysize, datatofill) => new Array(arraysize).fill(datatofill);

console.log(fill(3, "a"));

/**
 * Task description: Write a method that reverts input array
 * Expected Result: [1, 2, 3] => [3, 2, 1]
 * Task Complexity: 1 of 5
 * @param {Array} array - Array of any elements
 * @returns {Array}
 */

const reverse = (array) => {
  return array.sort((a, b) => b - a);
};
const data = [1, 2, 3];
console.log(reverse(data)); // [3, 2, 1]
