module.exports = function reverse(arr) {
  let leftIndex = 0, rightIndex = arr.length - 1

  while (leftIndex < rightIndex) {
    const temp = arr[leftIndex]
    arr[leftIndex] = arr[rightIndex]
    arr[rightIndex] = temp

    leftIndex++
    rightIndex--
  }
}
