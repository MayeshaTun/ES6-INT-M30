const averageOfSquaredElements = (arr) => {
  const squaredElements = arr.map((element) => element * element);
  const sumOfSquaredElement = squaredElements.reduce(
    (total, current) => total + current,
    0
  );
  return sumOfSquaredElement / arr.length;
};

const numbers = [1, 2, 3, 4, 5];
const result = averageOfSquaredElements(numbers);
console.log(result);
