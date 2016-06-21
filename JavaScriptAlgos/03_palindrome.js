//First iteration -EAU
function palindrome(str) {
  var normalStr = str.replace(/[^a-z\d]/gi, "").toLowerCase();
  return normalStr === normalStr.split("").reverse().join("");
}

//Second iteration - IT
function palindrome(str) {
  var lowerStr = str.toLowerCase().replace(/[^a-zA-Z\d]/g, "");
  var array = [];
  array = str.split('');
  var revStr = array.reverse().join().toLowerCase().replace(/[^a-zA-Z\d]/g, "");
  if (lowerStr == revStr) {
  return true;
  } else { 
    return false;  
  }
}
