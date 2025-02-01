/** Exercise 01 - Coins **/

// Add your function here
var dollar_amt;

function convertTocents(dollar_amt) {
  let cents = dollar_amt * 100;
  cents = Math.round(cents);
  return cents;
}

const coin_value = {
  dollars: 100,
  quarters: 25,
  dimes: 10,
  nickels: 5,
  pennies: 1,
};

function calculateChange(dollar_amt) {
  if (isNaN(dollar_amt) || typeof dollar_amt !== "number" || dollar_amt < 0) {
    return "Error: Invalid input, please enter a valid number";
  }
  let cents = convertTocents(dollar_amt);

  if (cents > 10000) {
    return "Error: the number is too large";
  }

  let result = {
    dollars: 0,
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  };

  for (let coin in coin_value) {
    result[coin] = Math.floor(cents / coin_value[coin]);
    cents %= coin_value[coin];
  }

  //return result;
  return `${dollar_amt} conversion is ${JSON.stringify(result)}`;
}

// Example usage:

// Sample test cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(150.11));
// $150.11 ==> Error: the number is too large
// Add additional test cases here
console.log(calculateChange("Hello"));
//hello ==> is not a number
console.log(calculateChange(-2.56));
