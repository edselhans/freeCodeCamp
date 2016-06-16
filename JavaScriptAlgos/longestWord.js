function findLongestWord(str) {
  return str.split(" ").sort(function(a, b) {
    return b.length - a.length;
  })[0].length;
}
