/* First Iteration
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)[a-z]/g, function(a) {return a.toUpperCase()});
}
*/

/* Second Iteration */

function titleCase(str) {
  var i = 0,
  str = str[0].toUpperCase() + str.substr(1).toLowerCase();
  while (i < str.length) {
    if (str[i] === " ") {
      str = str.substring(0, i+1) + str[i+1].toUpperCase() + str.substr(i+2);
    }
    i++;
  }
  return str;
}
