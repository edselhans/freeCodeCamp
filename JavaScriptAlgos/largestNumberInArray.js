/* First iteration
function largestOfFour(arr) {
  var arr4 = [];
  for (var i = 0; i < arr.length; i++) {
    arr4.push(arr[i].sort(function(a,b){return b-a;})[0]);
  }
  return arr4;
}
*/

/* Second iteration
function largestOfFour(arr) {
  var arr4 = [],
      arrMax = 0;
  for (var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr[i].length; j++){
      if (arr[i][j] > arrMax) {
        arrMax = arr[i][j];
      }
    }
    arr4.push(arrMax);
    arrMax = 0;
  }
  return arr4;
}
*/

function largestOfFour(arr) {
  var arr4 = [],
      arrMax = 0;
  for (var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr[i].length; j++){
      if (arr[i][j] > arrMax) {
        arrMax = arr[i][j];
      }
    }
    arr4[i] = arrMax;
    arrMax = 0;
  }
  return arr4;
}
