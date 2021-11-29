// const addToBatch = (array, number) => {
//   if (array.length > 5) {
//     return array;
//   }
//   return array.concat(number);
// };

// console.log(addToBatch([], 8));

// const checkLength = (phoneNumber) => {
//   if (phoneNumber.length < 11) {
//     return true;
//   }
// };

// const filterLongNumbers = (phoneNumbers) => {
//   return phoneNumbers.filter(checkLength);
// };

// console.log(
//   filterLongNumbers([
//     "077555574773",
//     "1763687364",
//     "4763687363",
//     "AAAA#####AAAA#87@768767382672",
//   ])
// );

// const namesAndDiscounts = [
//   ["Anna", 50],
//   ["Laura", 40],
//   ["Josh", 30],
//   ["Min", 50],
//   ["Karla", 60],
// ];

// const generateMessages = (namesAndDiscounts) => {
//   return namesAndDiscounts.map((namesAndDiscount) => {
//     const name = namesAndDiscount[0];
//     const discount = namesAndDiscount[1];
//     return `Hi ${name} ${discount}% off our best candies for you today!`;
//   });
// };

// console.log(generateMessages(namesAndDiscounts));

const candies = [
  ["Aero", 1.99],
  ["Skitties", 2.99],
  ["Maltesers", 3.49],
  ["Mars", 1.49],
  ["Skittles", 1.49],
  ["Starburst", 5.99],
  ["Ricola", 1.99],
  ["Polkagris", 5.99],
  ["Pastila", 4.99],
  ["Mentos", 8.99],
  ["Raffaello", 7.99],
  ["Gummi bears", 10.99],
  ["Fraise Tagada", 5.99],
];

const searchCandies = (searchCritea, price) => {
  return candies
    .filter((candy) => {
      return candy[0].toLowerCase().startsWith(searchCritea.toLowerCase());
    })
    .filter((candy) => {
      return candy[1] <= price;
    })
    .map((candy) => candy[0]);
};

console.log(searchCandies("MA", 10));
