"use strict";
function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
 
  for(let i = 0; i < arr.length; i++){
   if(arr[i] > max){
   max = arr[i]
   }
    if(arr[i] < min){
   min = arr[i]
   }
   
    sum += arr[i]
   
  }
  let avg = sum / arr.length 
  
  
  
  return { min: min, max: max, avg: +avg.toFixed(2) };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
