
/* First iteration - EAU */
function getIndexToIns(arr, num) {
  var i = 0;
  arr.sort(function(a, b) { return a - b; });
  while (num > arr[i]) {
    i++;
  }
  return i;
}
