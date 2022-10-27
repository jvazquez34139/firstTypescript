const arr: number[] = [20, 35, -15, 7, 55, 1, -22];

const merge = (left: number[], right: number[]): number[] => {
  let result: number[] = [];
  let leftIndex: number = 0;
  let rightIndex: number = 0;
  let resultIndex: number = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result[resultIndex++] = left[leftIndex++];
    } else {
      result[resultIndex++] = right[rightIndex++];
    }
  }
  while (leftIndex < left.length) {
    result[resultIndex++] = left[leftIndex++];
  }
  while (rightIndex < right.length) {
    result[resultIndex++] = right[rightIndex++];
  }
  return result;
}

const mergeSort = (arr: number[]): number[] => {
  if (arr.length === 1) {
    return arr;
  }
  const middle: number = Math.floor(arr.length / 2);
  const left: number[] = arr.slice(0, middle);
  const right: number[] = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(arr);
console.log(mergeSort(arr));