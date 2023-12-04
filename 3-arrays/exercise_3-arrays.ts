/**
 * TODO Docs
 */

/**
 * Return true, if inputArray is an array. Return false otherwise.
 *
 * @example
 * // returns true
 * exercise_3_1_isArray(["1","2","3"])
 *
 * @example
 * // returns false
 * exercise_3_1_isArray("1, 2, 3")
 */
export const exercise_3_1_isArray = (inputArray: unknown): boolean => {
  throw Error("Not yet implemented");
};

/**
 * One common way to work with arrays is to look at every item in it and do
 * something with it. This is also called iterating over the array.
 *
 * In this exercise you will iterate over the array and log a string for every
 * item.
 *
 * Log "value at index <index> is <value>" for every value of the inputArray
 *
 * @example
 * exercise_3_2_logValuesToConsole(["foo", "BAR", "baz"])
 * // this will log the following to the console:
 * value at index 0 is foo
 * value at index 1 is BAR
 * value at index 2 is baz
 *
 */
export const exercise_3_2_logValuesToConsole = (
  inputArray: Array<any>,
): void => {
  throw Error("Not yet implemented");
};

/**
 * Return a copy of the inputArray
 *
 * @example
 * // returns ["a", "b", "c"]
 * exercise_3_3_copyArray(["a", "b", "c"])
 *
 * @see Array spread syntax {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax}
 *
 * @see slice function {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice}
 */
export const exercise_3_3_copyArray = <Type>(
  inputArray: Array<Type>,
): Array<Type> => {
  throw Error("Not yet implemented")
};

/**
 * Remove the element at index and return the resulting array
 *
 * @example
 * // returns ["a", "c"]
 * exercise_3_4_removeAtIndex(["a", "b", "c"], 1)
 *
 */
export const exercise_3_4_removeAtIndex = <Type>(
  inputArray: Array<Type>,
  index: number,
): Array<Type> => {
  throw Error("Not yet implemented");
};

export const exercise_3_5_pushToArray = <Type>(
  inputArray: Array<Type>,
  value: Type,
): Array<Type> => {
  // add the value to the end of the array
  throw Error("Not yet implemented");
};

export const exercise_3_6_addAtIndex = <Type>(
  inputArray: Array<Type>,
  value: Type,
  index: number,
): Array<Type> => {
  // add the value at the correct index
  throw Error("Not yet implemented");
};

export const exercise_3_7_removeOddNumbers = (
  numbers: Array<number>,
): Array<number> => {
  // remove all odd numbers from the array `numbers`
  throw Error("Not yet implemented");
};

export const exercise_3_8_roundNumbersToNearestMultipleOfTen = (
  numbers: Array<number>,
): Array<number> => {
  // round all numbers in `numbers` to the nearest multiple of 10 (e.g 12 -> 10, 234 -> 230, 15 -> 20)
  throw Error("Not yet implemented");
};
