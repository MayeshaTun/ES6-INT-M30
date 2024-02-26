const findMaxInCombinedArrays = (arr1, arr2) => {
  const combinedArray = [...arr1, ...arr2];
  const maxNumber = Math.max(...combinedArray);
  return maxNumber;
};
const array1 = [3, 5, 7, 9];
const array2 = [2, 4, 6, 8];
const result = findMaxInCombinedArrays(array1, array2);
console.log(result);
