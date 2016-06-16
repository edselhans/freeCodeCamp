function palindrome(str) {
  var normalStr = str.replace(/[^a-z\d]/gi, "").toLowerCase();
  return normalStr === normalStr.split("").reverse().join("");
}
