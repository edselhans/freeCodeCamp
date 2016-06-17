/* First iteration
function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return "";
  } else if (num === 0) {
    return str;
  } else {
    return str.repeat(num);
  }
}
*/

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
