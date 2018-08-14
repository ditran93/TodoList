export function arrayToObject(arr, key = "id") {
  return arr.reduce((acc, curr) => {
    acc[curr[key]] = curr;
    return acc;
  }, {});
}
