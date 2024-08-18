'use strict';
function solveEquation(a, b, c) {
  let discriminantFormula = Math.pow(b, 2) - 4 * a * c;
  // console.log(discriminantFormula);
  let arr = [];
  if (discriminantFormula === 0) {
    const root = -b / (2 * a);
    arr.push(root);
    
  } else if (discriminantFormula > 0) {
    const root = Math.round((-b + Math.sqrt(b)) / (2 * a));
    const rootTwo = Math.round((-b - Math.sqrt(b)) / (2 * a));
    arr.push(root);
    arr.push(rootTwo);
    
  }

  return arr
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let amountReturnedBank = amount - contribution;
  let countRate = percent / 100 / 12;

  let payment =  amountReturnedBank * (countRate + countRate / (Math.pow(1 + countRate, countMonths) - 1));
  let totalAmount = payment * countMonths;

  return +parseFloat(totalAmount).toFixed(2);
}
