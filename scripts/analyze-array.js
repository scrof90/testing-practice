const getAverage = (arr) => {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const average = sum / arr.length;
  return Number(average.toFixed(2));
};

const getMin = (arr) => arr.sort((a, b) => a - b)[0];

const getMax = (arr) => arr.sort((a, b) => b - a)[0];

const analyzeArray = (arr) => ({
  average: getAverage(arr),
  min: getMin(arr),
  max: getMax(arr),
  length: arr.length,
});

export default analyzeArray;
