// QA note: UI often returns text. Your check needs a number.
const priceText = "99.99";
console.log(priceText === 99.99); // return false
const priceNumber = parseFloat(priceText);
console.log(priceNumber === 99.99);
