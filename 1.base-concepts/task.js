'use strict';
function solveEquation(a, b, c) {
  let discriminantFormula = Math.pow(b, 2) - 4 * a * c;
  // console.log(discriminantFormula);
  let arr = [];
  if (discriminantFormula < 0) {
    return arr;
  } else if (discriminantFormula === 0) {
    const root = -b / (2 * a);
    arr.push(root);
    return arr;
  } else if (discriminantFormula > 0) {
    const root = Math.round((-b + Math.sqrt(b)) / (2 * a));
    const rootTwo = Math.round((-b - Math.sqrt(b)) / (2 * a));
    arr.push(root);
    arr.push(rootTwo);
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let S = amount - contribution;
  let n = countMonths;
  let P = percent / 100 / n;

  let payment = S * (P + P / (Math.pow(1 + P, n) - 1));
  let totalAmount = payment * n;

  return +parseFloat(totalAmount).toFixed(2);
}
