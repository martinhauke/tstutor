# tstutor

Learn the basics of programming in TypeScript. Complete progressively more
complex exercises and check your solution by runnning the included tests.


## Prerequisites

- [git][git]
- [node][node]


## Setup

To clone the repository (only use one of the following two commands):
```bash
# Use this command if you don't have ssh setup (or don't know what that means)
git clone https://github.com/martinhauke/tstutor.git

# using ssh - If you don't know what that means, you probably want to use the
# first command instead
git clone git@github.com:martinhauke/tstutor.git
```

To install dependencies:

```bash
npm install
```

To run tests:

```bash
npm test
```

## How to use this tutorial

Follow the setup guide and open the project in the editor or IDE of your choice.
Navigate to the `exercises` directory, where you can find the different chapters.
Start with the first chapter `1-string-manipulation`. Open the `1-string-manipulation.ts`
file and you can see all the exercises in this chapter. This first one will look
like this:

```typescript
/**
 * Returns the text it receives as parameter.
 *
 * @example
 * // returns "Hello"
 * exercise_1_0_echo("Hello")
 *
 */
export function exercise_1_0_echo(text: string): string {
  throw Error("Not yet implemented")
}
```

The part in the comments (between `/**` and `*/`) is the description of the exercise.
It will usually tell you what to do and give some examples on how your solution
should work.

In this case you are expected to implement the function `exercise_1_0_echo()`, which
expects a string as parameter and returns a string. In this case, we want to simply
return the string from the parameter.

To start this exercise, remove the `throw Error("Not yet implemented")` and write
your code there instead.

A solution could look like this:

```ts
export function exercise_1_0_echo(text: string): string {
  return text
}
```

Once you remove the `throw Error("Not yet implemented")` you can run the tests for
this exercise. To do this, execute `npm test` in your console (make sure you are in
the root directory of the project). 

The output will look like this:

```
npm test

> test
> node --import tsx --test ./**/*.test.ts --test-reporter tap

▶ exercise_1_0_echo
  ✔ returns the input string (0.12525ms)
▶ exercise_1_0_echo (0.700125ms)

﹣ exercise_1_1_1_greet (0.033542ms) # SKIP
﹣ exercise_1_1_2_advancedGreet (0.031541ms) # SKIP
﹣ exercise_1_3_1_countCharacters (0.028708ms) # SKIP
﹣ exercise_1_3_2_advancedCountCharacters (0.078125ms) # SKIP
﹣ exercise_1_2_scream (0.024292ms) # SKIP
﹣ exercise_1_4_markTheCenter (0.028333ms) # SKIP
﹣ exercise_1_5_removePopel (0.072417ms) # SKIP
﹣ exercise_1_6_getTagInnerHTML (0.03475ms) # SKIP
﹣ exercise_2_1_isArray (0.192791ms) # SKIP
﹣ exercise_2_2_logValuesToConsole (0.040167ms) # SKIP
﹣ exercise_2_3_copyArray (0.031709ms) # SKIP
﹣ exercise_2_4_removeAtIndex (0.031125ms) # SKIP
﹣ exercise_2_5_pushToArray (0.083959ms) # SKIP
﹣ exercise_2_6_addAtIndex (0.02475ms) # SKIP
﹣ exercise_2_7_removeOddNumbers (0.03075ms) # SKIP
ℹ tests 1
ℹ suites 16
ℹ pass 1
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 133.868334
```

This list shows you which tests did run:

`exercise_1_0_echo` has one test called `returns the input string`, which was successful
(it is green with a checkmark).

We also skipped a bunch of tests.

When a test fails, it can get a bit more complicated:

```
npm test

> test
> node --import tsx --test ./**/*.test.ts --test-reporter tap

▶ exercise_1_0_echo
  ✖ returns the input string (1.740209ms)
    AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
    + actual - expected

    + 'example!'
    - 'example'
              ^
        at TestContext.<anonymous> (/Users/martinhauke/workspace/private/tstutor/tests/exercise_1-string-manipulation.test.t
        at Test.runInAsyncScope (node:async_hooks:206:9)
        at Test.run (node:internal/test_runner/test:631:25)
        at Test.start (node:internal/test_runner/test:542:17)
        at node:internal/test_runner/test:946:71
        at node:internal/per_context/primordials:488:82
        at new Promise (<anonymous>)
        at new SafePromise (node:internal/per_context/primordials:456:29)
        at node:internal/per_context/primordials:488:9
        at Array.map (<anonymous>) {
      generatedMessage: true,
      code: 'ERR_ASSERTION',
      actual: 'example!',
      expected: 'example',
      operator: 'strictEqual'
    }

▶ exercise_1_0_echo (2.322625ms)

﹣ exercise_1_1_1_greet (0.033875ms) # SKIP
﹣ exercise_1_1_2_advancedGreet (0.0295ms) # SKIP
﹣ exercise_1_3_1_countCharacters (0.025584ms) # SKIP
﹣ exercise_1_3_2_advancedCountCharacters (0.076208ms) # SKIP
﹣ exercise_1_2_scream (0.024375ms) # SKIP
﹣ exercise_1_4_markTheCenter (0.02825ms) # SKIP
﹣ exercise_1_5_removePopel (0.068208ms) # SKIP
﹣ exercise_1_6_getTagInnerHTML (0.075375ms) # SKIP
﹣ exercise_2_1_isArray (0.197375ms) # SKIP
﹣ exercise_2_2_logValuesToConsole (0.032125ms) # SKIP
﹣ exercise_2_3_copyArray (0.028458ms) # SKIP
﹣ exercise_2_4_removeAtIndex (0.029291ms) # SKIP
﹣ exercise_2_5_pushToArray (0.074125ms) # SKIP
﹣ exercise_2_6_addAtIndex (0.028167ms) # SKIP
﹣ exercise_2_7_removeOddNumbers (0.023083ms) # SKIP
ℹ tests 1
ℹ suites 16
ℹ pass 0
ℹ fail 1
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 134.882417

✖ failing tests:

test at file:/Users/martinhauke/workspace/private/tstutor/tests/exercise_1-string-manipulation.test.ts:1:515
✖ returns the input string (1.740209ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
  + actual - expected

  + 'example!'
  - 'example'
            ^
      at TestContext.<anonymous> (/Users/martinhauke/workspace/private/tstutor/tests/exercise_1-string-manipulation.test.ts:23:14)
      at Test.runInAsyncScope (node:async_hooks:206:9)
      at Test.run (node:internal/test_runner/test:631:25)
      at Test.start (node:internal/test_runner/test:542:17)
      at node:internal/test_runner/test:946:71
      at node:internal/per_context/primordials:488:82
      at new Promise (<anonymous>)
      at new SafePromise (node:internal/per_context/primordials:456:29)
      at node:internal/per_context/primordials:488:9
      at Array.map (<anonymous>) {
    generatedMessage: true,
    code: 'ERR_ASSERTION',
    actual: 'example!',
    expected: 'example',
    operator: 'strictEqual'
  }
```

The important part is

```
▶ exercise_1_0_echo
  ✖ returns the input string (1.740209ms)
    AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:
    + actual - expected

    + 'example!'
    - 'example'
```

This shows which test failed (`exercise_1_0_echo` -> `returns the input string`),
what the test expected (`'example'`) and what was actually returned
(`'example!` note the extra exclamation mark).

Once a test is green (e.g. there are no errors) the exercise is complete and you
can move to the next one.

[git]: https://git-scm.com/
[node]: https://nodejs.org/
