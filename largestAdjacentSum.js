function largestAdjacentSum(arr) {
    largeAdjSum = arr[0] + arr[1];
    for (let j = 1; j < arr.lengt; j++) {
      let adjSum = arr[j] + arr[j + 1]
      if (largeAdjSum < adjSum) {
        largeAdjSum = adjsum
      }
    }
    return largeAdjSum;
  }
  console.log(largestAdjacentSum([2,10,3,4,5,6]));