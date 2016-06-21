//First iteration - IT
function mutation(arr) {
  arrRight = arr[1].toLowerCase();
  arrLeft = arr[0].toLowerCase();
  for (i = 0; i < arrRight.length; i++) {
    if (arrLeft.indexOf(arrRight[i]) < -0) 
      return false;
    }
    return true;
}

//Second iteration -EUA
function mutation(arr) {
  var i = 0,
      letters = arr[1].toLowerCase(),
      string = arr[0].toLowerCase();
  while (i < string.length) {
    if (string.match(letters[i])) {
      i++;
    } else {
      return false;
    }
  }
  return true;
}
