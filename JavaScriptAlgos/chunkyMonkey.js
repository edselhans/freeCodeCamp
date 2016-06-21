//First Iteration -IT
function chunkArrayInGroups(arr, size) {
  var chunk = [];
  while (size < arr.length) {
    chunk.push(arr.splice(0, size));
  }  
  if (size >= arr.length) {
    chunk.push(arr);
    return chunk;
  } 
}
