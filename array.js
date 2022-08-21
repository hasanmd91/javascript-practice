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

/**
 * Task description: Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null
 * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
 * Task Complexity: 1 of 5
 * @param {Array} array - An array of any elements
 * @returns {Array}
 */
const compact = (array) => {
  return array.filter((item) => item > 0);
};
const data2 = [0, 1, false, 2, undefined, "", 3, null];
console.log(compact(data2)); // [1, 2, 3]

/**
 * Task description: Write a method that returns an object composed of key-value pairs.
 * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
 * Task Complexity: 2 of 5
 * @param {Array} array - a deep array of pairs
 * @returns {Array}
 */
const fromPairs = (array) => {
  array.forEach((element) => {
    if (Array.isArray(element)) {
      const [key, value] = element;
      return { [key]: value };
    }
  });
};
const data3 = [
  ["a", 1],
  ["b", 2],
];
console.log(fromPairs(data3)); // { 'a': 1, 'b': 2 }

/**
 * Task description: Write a method that returns an array without listed values
 * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3]
 * Task Complexity: 2 of 5
 * @param {Array} array - Array of primitive data types
 * @param {?} args list of values to remove
 * @returns {Array}
 */
const without = (array, ...args) => {
  let NewArray = [...array];

  for (let i = 0; i < NewArray.length; i++) {}

  console.log(NewArray);
};
const data4 = [1, 2, 3, 1, 2];
console.log(without(data4, 1, 2)); // [3]
