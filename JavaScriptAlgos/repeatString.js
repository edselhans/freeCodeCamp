//First iteration -EUA
function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return "";
  } else if (num === 0) {
    return str;
  } else {
    return str.repeat(num);
  }
}

//Second iteration - EUA
function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return "";
  } else if (num === 0) {
    return str;
  } else {
    for (var i = num, repStr = str; i > 1; i--) {
      repStr += str;
    }
    return repStr;
  }
}

//Third iteration -IT
function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return "";
  } else 
  return str.repeat(num);
}
