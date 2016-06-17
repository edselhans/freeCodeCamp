/* First iteration
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
*/

/* Second iteration
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
*/

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
