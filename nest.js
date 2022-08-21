let number = [12, 13, 34, 46, 67, 87, 89, 89, 34, 23, 65, 57, 68, 34];
for (let i = 0; i < number.length; i++) {
  delete number[i];
}
console.log(number);
console.log(number.length);

let array = ["i", "love", "javaScript"];
console.log(array);

array.splice([-1], -1, "hellow", "hate", "more", "hate");

console.log(array);

let array2 = ["a", "b", "c", "d", "e", "f", "j"];
let array3 = array2.slice([1], [5]);

console.log(array3);

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let user = users.find((item) => item.name === "Pete");

console.log(user.id);

let array4 = [12, 12, 12, 12324, 453, 56, 57, 423, 63, 41, 63, 13];

array4.sort((a, b) => a - b);

console.log(array4);

function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
listArrayItems(colors);
