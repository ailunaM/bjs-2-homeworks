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
    const roott = Math.round((-b + Math.sqrt(b)) / (2 * a));
    const root = Math.round((-b - Math.sqrt(b)) / (2 * a));
    arr.push(roott);
    arr.push(root);
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {}
