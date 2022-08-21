const user = {
  id: 101,
  email: "jack@dev.com",
  personalInfo: {
    name: "Jack",
    address: {
      line1: "westwish st",
      line2: "washmasher",
      city: "wallas",
      state: "WX",
    },
  },
};

const {
  personalInfo: {
    address: { state },
  },
} = user;

console.log(state);

let array = [132, 142, 125, [234, 345], 546, 756, 7, 8];
const [, , , [a, b]] = array;

console.log(a, b);

let z = 5;
let x = 6;

[x, z] = [z, x];

console.log(x, z);
