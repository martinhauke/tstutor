import { describe, it, mock } from "node:test";
import assert from "node:assert/strict";
import {
  exercise_3_1_isArray,
  exercise_3_2_logValuesToConsole,
  exercise_3_3_copyArray,
  exercise_3_4_removeAtIndex,
  exercise_3_5_pushToArray,
  exercise_3_6_addAtIndex,
} from "../exercises/3-arrays/exercise_3-arrays";
import { isSkipped } from "./skip-tests-helper";

describe(
  "exercise_3_1_isArray",
  { skip: isSkipped(exercise_3_1_isArray, [[]]) },
  () => {
    it("returns true for a simple array", () => {
      const inputArray = [1, 2, 3, 4];

      assert.equal(exercise_3_1_isArray(inputArray), true);
    });

    it("returns true for a nested array", () => {
      const inputArray = [1, 2, 3, [4, 5, [6, 7]]];

      assert.equal(exercise_3_1_isArray(inputArray), true);
    });

    it("returns false if input is not an array", () => {
      const stringInput = "not an array";
      const intInput = 42;
      const nullInput = null;
      const undefinedInput = undefined;

      assert.equal(exercise_3_1_isArray(stringInput), false);
      assert.equal(exercise_3_1_isArray(intInput), false);
      assert.equal(exercise_3_1_isArray(nullInput), false);
      assert.equal(exercise_3_1_isArray(undefinedInput), false);
    });
  },
);

describe(
  "exercise_3_2_logValuesToConsole",
  { skip: isSkipped(exercise_3_2_logValuesToConsole, [[]]) },
  () => {
    it("returns true for a simple array", () => {
      const logMock = mock.method(console, "log", () => {});
      const inputArray = ["one", "TWO", "seven"];
      const intInputArray = [1, 2, 5, 6, 9, 2];

      exercise_3_2_logValuesToConsole(inputArray);

      assert.equal(logMock.mock.calls.length, 3);
      assert.equal(
        logMock.mock.calls[0].arguments.join(),
        "value at index 0 is one",
      );
      assert.equal(
        logMock.mock.calls[1].arguments.join(),
        "value at index 1 is TWO",
      );
      assert.equal(
        logMock.mock.calls[2].arguments.join(),
        "value at index 2 is seven",
      );

      logMock.mock.resetCalls();
      exercise_3_2_logValuesToConsole(intInputArray);
      assert.equal(logMock.mock.calls.length, 6);
      assert.equal(
        logMock.mock.calls[0].arguments.join(),
        "value at index 0 is 1",
      );
      assert.equal(
        logMock.mock.calls[1].arguments.join(),
        "value at index 1 is 2",
      );
      assert.equal(
        logMock.mock.calls[2].arguments.join(),
        "value at index 2 is 5",
      );
      assert.equal(
        logMock.mock.calls[3].arguments.join(),
        "value at index 3 is 6",
      );
      assert.equal(
        logMock.mock.calls[4].arguments.join(),
        "value at index 4 is 9",
      );
      assert.equal(
        logMock.mock.calls[5].arguments.join(),
        "value at index 5 is 2",
      );
    });
  },
);

describe(
  "exercise_3_3_copyArray",
  { skip: isSkipped(exercise_3_3_copyArray, [[]]) },
  () => {
    it("returned array has the same values", () => {
      const inputArray = [1, 2, 3];
      const stringInputArray = ["one", "two"];
      const mixedNestedInputArray = [1, 2, [3, 4], "test"];
      assert.equal(exercise_3_3_copyArray(inputArray)[0], inputArray[0]);
      assert.equal(exercise_3_3_copyArray(inputArray)[1], inputArray[1]);
      assert.equal(exercise_3_3_copyArray(inputArray)[2], inputArray[2]);
      assert.equal(
        exercise_3_3_copyArray(stringInputArray)[0],
        stringInputArray[0],
      );
      assert.equal(
        exercise_3_3_copyArray(stringInputArray)[1],
        stringInputArray[1],
      );
      assert.equal(
        exercise_3_3_copyArray(mixedNestedInputArray)[0],
        mixedNestedInputArray[0],
      );
      assert.equal(
        exercise_3_3_copyArray(mixedNestedInputArray)[1],
        mixedNestedInputArray[1],
      );
      assert.equal(
        exercise_3_3_copyArray(mixedNestedInputArray)[2],
        mixedNestedInputArray[2],
      );
      assert.equal(
        exercise_3_3_copyArray(mixedNestedInputArray)[3],
        mixedNestedInputArray[3],
      );
    });

    it("returned array has a different identity", () => {
      const inputArray = [1, 2, 3];
      assert.equal(exercise_3_3_copyArray(inputArray)[0], inputArray[0]);
      assert.equal(exercise_3_3_copyArray(inputArray)[1], inputArray[1]);
      assert.equal(exercise_3_3_copyArray(inputArray)[2], inputArray[2]);
      assert.notEqual(exercise_3_3_copyArray(inputArray), inputArray);
    });
  },
);

describe(
  "exercise_3_4_removeAtIndex",
  { skip: isSkipped(exercise_3_4_removeAtIndex, [[]]) },
  () => {
    it("removes the correct element", () => {
      const inputArray = [1, 2, 3];
      const deleteIndex = 1;

      const expected = [1, 3];
      const actual = exercise_3_4_removeAtIndex(inputArray, deleteIndex);

      assert.equal(actual[0], expected[0]);
      assert.equal(actual[1], expected[1]);
    });

    it("does not remove the element if the index is out of bounds", () => {
      const inputArray = [4, 5, 6];
      const negativeIndex = -1;
      const outOfBoundsIndex = 3;

      const actual_negativeIndex = exercise_3_4_removeAtIndex(
        inputArray,
        negativeIndex,
      );
      const actual_outOfBoundsIndex = exercise_3_4_removeAtIndex(
        inputArray,
        outOfBoundsIndex,
      );

      assert.equal(actual_negativeIndex.length, inputArray.length);
      assert.equal(actual_negativeIndex[0], inputArray[0]);
      assert.equal(actual_negativeIndex[1], inputArray[1]);
      assert.equal(actual_negativeIndex[2], inputArray[2]);
      assert.equal(actual_outOfBoundsIndex.length, inputArray.length);
      assert.equal(actual_outOfBoundsIndex[0], inputArray[0]);
      assert.equal(actual_outOfBoundsIndex[1], inputArray[1]);
      assert.equal(actual_outOfBoundsIndex[2], inputArray[2]);
    });

    it("does not mutate/return the original array", () => {
      const inputArray = [4, 5, 6];
      const clonedInputArray = [...inputArray];
      const outOfBoundsIndex = 3;
      const validIndex = 1;

      assert.ok(
        exercise_3_4_removeAtIndex(inputArray, outOfBoundsIndex) !== inputArray,
      );
      assert.ok(
        exercise_3_4_removeAtIndex(inputArray, validIndex) !== inputArray,
      );
      assert.equal(inputArray.length, clonedInputArray.length);
      assert.equal(inputArray[0], clonedInputArray[0]);
      assert.equal(inputArray[1], clonedInputArray[1]);
      assert.equal(inputArray[2], clonedInputArray[2]);
    });
  },
);

describe(
  "exercise_3_5_pushToArray",
  { skip: isSkipped(exercise_3_5_pushToArray, [[]]) },
  () => {
    it("adds the element at the end of the array", () => {
      const inputArray = [1, 2, 4];
      const value = 9;

      const actual = exercise_3_5_pushToArray(inputArray, value);
      const expected = [1, 2, 4, 9];

      assert.equal(actual.length, expected.length);
      assert.equal(actual[0], expected[0]);
      assert.equal(actual[1], expected[1]);
      assert.equal(actual[2], expected[2]);
      assert.equal(actual[3], expected[3]);
    });

    it("does not mutate the original array", () => {
      const inputArray = [1, 2, 4];
      const value = 9;
      const modifiedArray = exercise_3_5_pushToArray(inputArray, value);

      assert.ok(inputArray !== modifiedArray);
      assert.equal(inputArray[0], 1);
      assert.equal(inputArray[1], 2);
      assert.equal(inputArray[2], 4);
    });
  },
);

describe(
  "exercise_3_6_addAtIndex",
  { skip: isSkipped(exercise_3_6_addAtIndex, [[]]) },
  () => {
    it("adds the element at the correct index of the array", () => {
      const inputArray = [1, 2, 4];
      const value = 9;
      const index = 1;

      const actual = exercise_3_6_addAtIndex(inputArray, value, index);
      const expected = [1, 9, 2, 4];

      assert.equal(actual.length, expected.length);
      assert.equal(actual[0], expected[0]);
      assert.equal(actual[1], expected[1]);
      assert.equal(actual[2], expected[2]);
      assert.equal(actual[3], expected[3]);
    });

    it("does not add item if index is out of bounds", () => {
      const inputArray = [1, 2, 4];
      const value = 9;
      const negativeIndex = -1;
      const outOfBoundsIndex = 10;

      const actualNegative = exercise_3_6_addAtIndex(
        inputArray,
        value,
        negativeIndex,
      );
      const actualOutOfBounds = exercise_3_6_addAtIndex(
        inputArray,
        value,
        outOfBoundsIndex,
      );
      const expected = [...inputArray];

      assert.equal(actualOutOfBounds.length, expected.length);
      assert.equal(actualOutOfBounds[0], expected[0]);
      assert.equal(actualOutOfBounds[1], expected[1]);
      assert.equal(actualOutOfBounds[2], expected[2]);
      assert.equal(actualNegative.length, expected.length);
      assert.equal(actualNegative[0], expected[0]);
      assert.equal(actualNegative[1], expected[1]);
      assert.equal(actualNegative[2], expected[2]);
    });

    it("does not mutate the original array", () => {
      const inputArray = [1, 2, 4];
      const value = 9;
      const index = 1;
      const negativeIndex = -1;

      const actual = exercise_3_6_addAtIndex(inputArray, value, index);
      const expected = [1, 9, 2, 4];
      const actualNegative = exercise_3_6_addAtIndex(
        inputArray,
        value,
        negativeIndex,
      );

      assert.notEqual(actual, inputArray);
      assert.notEqual(actualNegative, inputArray);
      assert.equal(actual.length, expected.length);
      assert.equal(actual[0], expected[0]);
      assert.equal(actual[1], expected[1]);
      assert.equal(actual[2], expected[2]);
      assert.equal(actual[3], expected[3]);
    });
  },
);
