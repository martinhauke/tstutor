/**
 * TODO Docs
 */

/**
 * Return true, if inputArray is an array. Return false otherwise.
 *
 * @example
 * // returns true
 * exercise_2_1_isArray(["1","2","3"])
 *
 * @example
 * // returns false
 * exercise_2_1_isArray("1, 2, 3")
 */
export const exercise_2_1_isArray = (inputArray: unknown): boolean => {
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
 * exercise_2_2_logValuesToConsole(["foo", "BAR", "baz"])
 * // this will log the following to the console:
 * value at index 0 is foo
 * value at index 1 is BAR
 * value at index 2 is baz
 *
 */
export const exercise_2_2_logValuesToConsole = (
  inputArray: Array<any>,
): void => {
  throw Error("Not yet implemented");
};

/**
 * Return a copy of the inputArray
 *
 * @example
 * // returns ["a", "b", "c"]
 * exercise_2_3_copyArray(["a", "b", "c"])
 *
 * @see Array spread syntax {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax}
 *
 * @see slice function {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice}
 */
export const exercise_2_3_copyArray = <Type>(
  inputArray: Array<Type>,
): Array<Type> => {
  throw Error("Not yet implemented")
};

/**
 * Remove the element at index and return the resulting array
 *
 * @example
 * // returns ["a", "c"]
 * exercise_2_4_removeAtIndex(["a", "b", "c"], 1)
 *
 */
export const exercise_2_4_removeAtIndex = <Type>(
  inputArray: Array<Type>,
  index: number,
): Array<Type> => {
  throw Error("Not yet implemented");
};

/**
 * Add value to the end of an array.
 *
 * @example
 * // returns [2, 1, 4]
 * exercise_2_5_pushToArray([2, 1], 4)
 *
 */
export const exercise_2_5_pushToArray = <Type>(
  inputArray: Array<Type>,
  value: Type,
): Array<Type> => {
  throw Error("Not yet implemented");
};

/**
 * Add a value at the specified index to the array.
 * If the index does not exist in the array, a copy of the original array
 * is returned.
 *
 * @example
 * // returns [1, 2, 8, 3]
 * exercise_2_6_addAtIndex([1, 2, 3], 8, 2)
 */
export const exercise_2_6_addAtIndex = <Type>(
  inputArray: Array<Type>,
  value: Type,
  index: number,
): Array<Type> => {
  throw Error("Not yet implemented");
};

/**
 * This function receives an array of numbers and returns a copy
 * of that array without any odd numbers
 *
 * @example
 * // returns [2, 4, 8]
 * exercise_2_7_removeOddNumbers([1,2,3,4,5,8,9])
 */
export const exercise_2_7_removeOddNumbers = (
  numbers: Array<number>,
): Array<number> => {
  throw Error("Not yet implemented");
};

/**
 * This function receives an array and will round each value to the nearest
 * multiple of 10.
 *
 * @example
 * // returns [0, 0, 20, 100]
 * exercise_2_8_roundNumbersToNearestMultipleOfTen([1,3,18,95])
 *
 */
export const exercise_2_8_roundNumbersToNearestMultipleOfTen = (
  numbers: Array<number>,
): Array<number> => {
  throw Error("Not yet implemented");
};
