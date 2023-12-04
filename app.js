//countZeros
function firstZero(arr, leftIdx = 0, rightIdx = arr.length - 1) {
  if (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (arr[leftIdx] === 0) {
      return leftIdx;
    } else if (middleVal === 0 && arr[middleIdx - 1] === 0) {
      return firstZero(arr, leftIdx, middleIdx - 1);
    } else if (middleVal === 1 && arr[middleIdx + 1] === 1) {
      return firstZero(arr, middleIdx + 1, rightIdx);
    } else if (middleVal === 1 && arr[middleIdx + 1] === 0) {
      return firstZero(arr, middleIdx + 1, rightIdx);
    } else if (middleVal === 0 && arr[middleIdx - 1] === 1) {
      return firstZero(arr, middleIdx, rightIdx);
    }
  }
  return -1;
}

function countZeroes(arr) {
  let left = firstZero(arr);
  if (left === -1) {
    return 0;
  }
  let right = arr.length - 1;
  return right - left + 1;
}

//sortedFrequency
function leftIndex(arr, num, leftIdx = 0, rightIdx = arr.length - 1) {
  if (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (arr[leftIdx] === num) {
      return leftIdx;
    } else if (middleVal > num) {
      return leftIndex(arr, num, leftIdx, middleIdx - 1);
    } else if (middleVal < num) {
      return leftIndex(arr, num, middleIdx + 1, rightIdx);
    } else if (middleVal === num && arr[middleIdx - 1] === middleVal) {
      return leftIndex(arr, num, 0, middleIdx - 1);
    } else if (middleVal === num && arr[middleIdx - 1] < middleVal) {
      return leftIndex(arr, num, middleIdx, rightIdx);
    }
  }
  return -1;
}

function rightIndex(arr, num, leftIdx = 0, rightIdx = arr.length - 1) {
  if (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (arr[rightIdx] === num) {
      return rightIdx;
    } else if (middleVal > num) {
      return rightIndex(arr, num, leftIdx, middleIdx - 1);
    } else if (middleVal < num) {
      return rightIndex(arr, num, middleIdx + 1, rightIdx);
    } else if (middleVal === num && arr[middleIdx + 1] === middleVal) {
      return rightIndex(arr, num, middleIdx + 1, rightIdx);
    } else if (middleVal === num && arr[middleIdx + 1] > middleVal) {
      return rightIndex(arr, num, leftIdx, middleIdx);
    }
  }
  return -1;
}

function sortedFrequency(arr, num) {
  const left = leftIndex(arr, num);
  if (left === -1) {
    return -1;
  }
  const right = rightIndex(arr, num);
  return right - left + 1;
}

//findRotatedIndex
function findLowestIndex(arr, leftIdx = 0, rightIdx = arr.length - 1) {
  if (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal <= arr[middleIdx - 1] || middleVal === arr[leftIdx]) {
      if (middleVal <= arr[rightIdx]) {
        return middleIdx;
      } else if (middleVal >= arr[rightIdx]) {
        return rightIdx;
      }
    } else if (middleVal <= arr[leftIdx] || middleVal <= arr[rightIdx]) {
      return findLowestIndex(arr, leftIdx, middleIdx - 1);
    } else if (middleVal >= arr[rightIdx] || middleVal >= arr[rightIdx]) {
      return findLowestIndex(arr, middleIdx + 1, rightIdx);
    }
  }
  return -1;
}

function BinarySearch(arr, num, leftIdx, rightIdx) {
  if (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (middleVal === num) {
      return middleIdx;
    } else if (middleVal < num) {
      return BinarySearch(arr, num, middleIdx + 1, rightIdx);
    } else if (middleVal > num) {
      return BinarySearch(arr, num, leftIdx, middleIdx - 1);
    }
  }
  return -1;
}

function findRotatedIndex(arr, num, leftIdx = 0, rightIdx = arr.length - 1) {
  let lowest = findLowestIndex(arr);

  if (arr[leftIdx] <= num && num <= arr[lowest - 1]) {
    rightIdx = lowest - 1;
  } else if (arr[lowest] <= num && num <= arr[rightIdx]) {
    leftIdx = lowest;
  }
  const search = BinarySearch(arr, num, leftIdx, rightIdx);
  return search;
}

//findRotationCount
function findSmallestIndex(arr, leftIdx = 0, rightIdx = arr.length - 1) {
  if (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal <= arr[middleIdx - 1] || middleVal === arr[leftIdx]) {
      if (middleVal <= arr[rightIdx]) {
        return middleIdx;
      } else if (middleVal >= arr[rightIdx]) {
        return rightIdx;
      }
    } else if (middleVal <= arr[leftIdx] || middleVal <= arr[rightIdx]) {
      return findSmallestIndex(arr, leftIdx, middleIdx - 1);
    } else if (middleVal >= arr[rightIdx] || middleVal >= arr[rightIdx]) {
      return findSmallestIndex(arr, middleIdx + 1, rightIdx);
    }
  }
  return -1;
}

function findRotationCount(arr) {
  let small = findSmallestIndex(arr);
  return small;
}

//findFloor
function floorIt(arr, num, leftIdx = 0, rightIdx = arr.length - 1) {
  if (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    if (middleVal <= num && arr[middleIdx + 1] > num) {
      return middleVal;
    } else if (num >= arr[rightIdx]) {
      return arr[rightIdx];
    } else if (num < arr[leftIdx]) {
      return -1;
    } else if (middleVal < num && arr[middleIdx + 1] < num) {
      return floorIt(arr, num, middleIdx, rightIdx);
    } else if (middleVal > num && arr[middleIdx - 1] > num) {
      return floorIt(arr, num, leftIdx, middleIdx);
    } else if (middleVal > num && arr[middleIdx - 1] < num) {
      return floorIt(arr, num, leftIdx, middleIdx);
    }
  }
  return -1;
}

function findFloor(arr, num) {
  let floorVal = floorIt(arr, num);
  return floorVal;
}
