"use strict";
const arr = [20, 35, -15, 7, 55, 1, -22];
const merge = (left, right) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    let resultIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result[resultIndex++] = left[leftIndex++];
        }
        else {
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
};
const mergeSort = (arr) => {
    if (arr.length === 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
};
console.log(arr);
console.log(mergeSort(arr));
//# sourceMappingURL=index.js.map