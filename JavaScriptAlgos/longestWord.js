//First Iteration -EAU
function findLongestWord(str) {
  return str.split(" ").sort(function(a, b) {
    return b.length - a.length;
  })[0].length;
}

//Second Iteration - IT
function findLongestWord(str) {
  var array = [];
  var lengthy = [];
  array = str.split(' ');
  for (i = 0;  i < array.length; i++) {
    lengthy[i] = array[i].length;
  }
  lengthy.sort(function(a, b){
    return b - a;
  });
  lengthy.slice(0,1).join('');
  return parseInt(lengthy);
}
