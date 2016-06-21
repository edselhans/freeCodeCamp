function confirmEnding(str, target) {
  var strEnd = str.substr(str.length - target.length, str.length);
  if (target == strEnd) {
    return true;    
  } else {
    return false;
  }
}
