// @ts-ignore: typings declaration for the `node:test` built-in module is not yet available.
import { describe, it } from "node:test";
// @ts-ignore: typings declaration for the `node:test` built-in module is not yet available.
import assert from "node:assert/strict";
import { isSkipped } from "./skip-tests-helper";
import {
  exercise_2_1_1_greet,
  exercise_2_1_2_advancedGreet,
  exercise_2_2_scream,
  exercise_2_3_1_countCharacters,
  exercise_2_3_2_advancedCountCharacters,
  exercise_2_4_markTheCenter,
  exercise_2_5_removePopel,
  exercise_2_6_getTagInnerHTML,
} from "../2-string-manipulation/exercise_2-string-manipulation";


describe("exercise_2_1_1_greet", {skip: isSkipped(exercise_2_1_1_greet, ["name"])}, () => {
  it("works for regular strings", () => {
    assert.equal(exercise_2_1_1_greet("Mega"), "Hello, Mega!");
    assert.equal(exercise_2_1_1_greet("Mr. Anderson"), "Hello, Mr. Anderson!");
  });
});

describe("exercise_2_1_2_advancedGreet", {skip: isSkipped(exercise_2_1_2_advancedGreet, [])}, () => {
  it("works for regular strings", () => {
    assert.equal(exercise_2_1_2_advancedGreet("Peter"), "Hello, Peter!");
    assert.equal(exercise_2_1_2_advancedGreet("Mr. Anderson"), "Hello, Mr. Anderson!");
  });

  it("works with no name given", () => {
    assert.equal(exercise_2_1_2_advancedGreet(), "Hello, You!");
  });
});

describe("exercise_2_3_1_countCharacters", {skip: isSkipped(exercise_2_3_1_countCharacters, [""])}, () => {
  it("returns the correct character count", () => {
    const inputString = "this are 22 Characters";

    assert.equal(exercise_2_3_1_countCharacters(inputString), 22);
  });

  it("returns 0 if there is no string or the string is empty", () => {
    assert.equal(exercise_2_3_1_countCharacters(), 0);
    assert.equal(exercise_2_3_1_countCharacters(""), 0);
  });
});

describe("exercise_2_3_2_advancedCountCharacters", {skip: isSkipped(exercise_2_3_2_advancedCountCharacters, ["test"])}, () => {
  it("returns the correct character count for a single word", () => {
    assert.equal(exercise_2_3_2_advancedCountCharacters("Test"), 4);
  });

  it("trims whitespaces at the beginning and end of the string", () => {
    assert.equal(exercise_2_3_2_advancedCountCharacters(" test "), 4);
  });

  it("ignores whitespaces within the string", () => {
    assert.equal(
      exercise_2_3_2_advancedCountCharacters("Test this String with white spaces"),
      29,
    );
  });

  it("ignores tabs", () => {
    assert.equal(exercise_2_3_2_advancedCountCharacters("Test\tstring"), 10);
  });

  it("ignores linebreaks", () => {
    assert.equal(exercise_2_3_2_advancedCountCharacters("Test\nstring"), 10);
  });

  it("ignores all whitespaces, no matter where in the string", () => {
    assert.equal(
      exercise_2_3_2_advancedCountCharacters(
        "\tTest this String\n with    white\t\n\nspaces   ",
      ),
      29,
    );
  });
});


describe("exercise_2_2_scream", {skip: isSkipped(exercise_2_2_scream, [""])}, () => {
  it("works for a single word", () => {
    assert.equal(exercise_2_2_scream("word"), "WORD");
  });

  it("works for multiple words", () => {
    assert.equal(exercise_2_2_scream("This is a Sentence"), "THIS IS A SENTENCE");
  });

  it("works with special characters", () => {
    assert.equal(exercise_2_2_scream("This_i5 a Sent€nce!?"), "THIS_I5 A SENT€NCE!?");
  });

  it("does not mutate the original string", () => {
    const inputString = "something";

    assert.notEqual(exercise_2_2_scream(inputString), inputString);
    assert.equal(inputString, "something");
  });
});

describe("exercise_2_4_markTheCenter", {skip: isSkipped(exercise_2_4_markTheCenter, ["test"])}, () => {
  it("Marks the center in an even string", () => {
    const inputString1 = "even";
    const expected1 = "ev[center]en";
    const inputString2 = "even but longer!";
    const expected2 = "even but[center] longer!";

    assert.equal(exercise_2_4_markTheCenter(inputString1), expected1);
    assert.equal(exercise_2_4_markTheCenter(inputString2), expected2);
  });

  it("Marks the center in an even string", () => {
    const inputString1 = "odd";
    const expected1 = "od[center]d";
    const inputString2 = "odd but longer!";
    const expected2 = "odd but [center]longer!";

    assert.equal(exercise_2_4_markTheCenter(inputString1), expected1);
    assert.equal(exercise_2_4_markTheCenter(inputString2), expected2);
  });

  it('Returns "[center]" for an empty string', () => {
    const inputString = "";
    const expected = "[center]";

    assert.equal(exercise_2_4_markTheCenter(inputString), expected);
  });
});

describe("exercise_2_5_removePopel", {skip: isSkipped(exercise_2_5_removePopel, ["Popel"])}, () => {
  it('replaces "Popel" with "foo" if only "Popel" is given', () => {
    assert.equal(exercise_2_5_removePopel("Popel"), "foo");
  });

  it('replaces "popel" with "foo" if only "popel" is given', () => {
    assert.equal(exercise_2_5_removePopel("popel"), "foo");
  });

  it('returns a copy of the original string, if it does not contain "popel"', () => {
    assert.equal(exercise_2_5_removePopel("This grass is green"), "This grass is green");
  });

  it('replaces "popel" with "foo" in a sentence', () => {
    assert.equal(exercise_2_5_removePopel("This popel is green"), "This foo is green");
  });

  it('replaces multiple instances of "popel" with "foo" in a sentence', () => {
    assert.equal(
      exercise_2_5_removePopel("This popel is popel green"),
      "This foo is foo green",
    );
  });

  it('replaces "popel" regardles of case', () => {
    assert.equal(
      exercise_2_5_removePopel("this has a poPel hidden"),
      "this has a foo hidden",
    );
    assert.equal(
      exercise_2_5_removePopel("this has a popeL hidden"),
      "this has a foo hidden",
    );
    assert.equal(
      exercise_2_5_removePopel("this has a POPEL hidden"),
      "this has a foo hidden",
    );
  });
});

describe("exercise_2_6_getTagInnerHTML", {skip: isSkipped(exercise_2_6_getTagInnerHTML, ["test"])}, () => {
  it("returns content between <body> and </body>", () => {
    const inputHtml =
      "<html><head></head><body><h1>Test</h1><div>Stuff</div></body></html>";
    const tag = "body";
    const expected = "<h1>Test</h1><div>Stuff</div>";

    assert.equal(exercise_2_6_getTagInnerHTML(inputHtml, tag), expected);
  });

  it("does not confuse tags with content", () => {
    const inputHtml =
      "<html><head><title>Find the body</title></head><body><h1>Test</h1><div>Stuff</div></body></html>";
    const tag = "body";
    const expected = "<h1>Test</h1><div>Stuff</div>";

    assert.equal(exercise_2_6_getTagInnerHTML(inputHtml, tag), expected);
  });

  it("returns empty string if tag is not found", () => {
    const inputHtml =
      "<html><head></head><body><h1>Test</h1><div>Stuff</div></body></html>";
    const tag = "footer";

    assert.equal(exercise_2_6_getTagInnerHTML(inputHtml, tag), "");
  });
});
