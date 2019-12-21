module.exports = function reverse(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    const left = arr[i]
    const right = arr[arr.length - (1 + i)]
    arr[i] = right
    arr[arr.length - (1 + i)] = left
  }
}
