const memoizedCalculation = <T>(
  callback: (arg: T) => T,
  results: Map<T, T>,
  value: T
) => {
  if (!results.has(value)) {
    results.set(value, callback(value));
  }
  return results.get(value);
};

export function memoize<T>(callback: (arg: unknown) => T) {
  if (typeof callback !== "function")
    throw new Error("Function to be memoized must be a function.");

  const results = new Map<T, T>();

  return memoizedCalculation.bind(null, callback, results);
}
