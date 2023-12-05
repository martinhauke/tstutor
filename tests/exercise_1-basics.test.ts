// @ts-ignore: typings declaration for the `node:test` built-in module is not yet available.
import { describe, it } from "node:test";
// @ts-ignore: typings declaration for the `node:test` built-in module is not yet available.
import assert from "node:assert/strict";
import { exercise_1_1_helloWorld } from "../exercises/1-basics/exercise_1.1-helloWorld";
import { isSkipped } from "./skip-tests-helper";

describe("helloWorld", { skip: isSkipped(exercise_1_1_helloWorld, []) }, () => {
  it('returns "Hello, World!"', () => {
    assert.equal(
      exercise_1_1_helloWorld(),
      "Hello, World!",
      "Strings do not match",
    );
  });
});
