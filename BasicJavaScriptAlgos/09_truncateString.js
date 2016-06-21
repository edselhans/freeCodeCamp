//First iteration -EUT
function truncateString(str, num) {
  if (str.length > num) {
    if (num > 3) {
      return str.substr(0, num - 3) + "...";
    } else {
      return str.substr(0, num) + "...";
    }
  } else {
    return str;
  }
}

//Second iteration -EUT
function truncateString(str, num) {
  if (str.length > num) {
    var i = 1,
        truncStr = str[0];
    if (num > 3) {
      for (; i < num - 3; i++) {
        truncStr += str[i];
      }
    } else {
      for (; i < num; i++) {
        truncStr += str[i];
      }
    }
    return truncStr + "...";
  } else {
    return str;
  }
}

//Thirs iteration -EUT
function truncateString(str, num) {
  if (str.length > num) {
    var i = 1,
        j = num,
        truncStr = str[0];
    if (num > 3) {
      j -= 3;
    }
    for (; i < j; i++) {
      truncStr += str[i];
    }
    return truncStr + "...";
  } else {
    return str;
  }
}

//Fourth iteration - IT
function truncateString(str, num) {
  if (str.length > num && num > 3) {
    var long = str.slice(0, num - 3);    
    return long += "...";
  } else if  (str.length > num && num <= 3) {
      var short = str.slice(0, num);
      return short += "...";
  } else {
      return str;
  }
}
