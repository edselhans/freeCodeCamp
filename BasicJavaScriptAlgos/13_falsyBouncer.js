//First iteration -IT
function bouncer(arr) {
  function truthy(v) {
    return Boolean(v);
  }
  var newArr = arr.filter(truthy);
  return newArr;
}

//First iteration -EAU
function bouncer(arr) {
  return arr.filter(Boolean);
}
