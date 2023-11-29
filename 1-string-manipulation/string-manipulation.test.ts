import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  helloWorld,
  greet,
  advancedGreet,
  scream,
  countCharacters,
  markTheCenter,
  advancedCountCharacters,
  removePopel,
  getTagInnerHTML,
} from "./string-manipulation";


function isSkipped(fn: Function, args: any[]): boolean {
  try {
    fn(...args)
  } catch (err: unknown) {
    if (err instanceof Error && err.message === "Not yet implemented") {
      return true
    }
  }
  return false
}

describe("helloWorld", {skip: isSkipped(helloWorld, [])}, () => {
  it('returns "Hello, World!"', () => {
    assert.equal(helloWorld(), "Hello, World!", "Strings do not match");
  });
});

describe("greet", {skip: isSkipped(greet, ["name"])}, () => {
  it("works for regular strings", () => {
    assert.equal(greet("Peter"), "Hello, Peter!");
  });
});

describe("advancedGreet", {skip: isSkipped(advancedGreet, [])}, () => {
  it("works for regular strings", () => {
    assert.equal(advancedGreet("Peter"), "Hello, Peter!");
  });

  it("works with no name given", () => {
    assert.equal(advancedGreet(), "Hello, You!");
  });
});

describe("scream", {skip: isSkipped(scream, [""])}, () => {
  it("works for a single word", () => {
    assert.equal(scream("word"), "WORD");
  });

  it("works for multiple words", () => {
    assert.equal(scream("This is a Sentence"), "THIS IS A SENTENCE");
  });

  it("works with special characters", () => {
    assert.equal(scream("This_i5 a Sent€nce!?"), "THIS_I5 A SENT€NCE!?");
  });

  it("does not mutate the original string", () => {
    const inputString = "something";

    assert.notEqual(scream(inputString), inputString);
    assert.equal(inputString, "something");
  });
});

describe("countCharacters", {skip: isSkipped(countCharacters, [""])}, () => {
  it("returns the correct character count", () => {
    const inputString = "this are 22 Characters";

    assert.equal(countCharacters(inputString), 22);
  });

  it("returns 0 if there is no string or the string is empty", () => {
    assert.equal(countCharacters(), 0);
    assert.equal(countCharacters(""), 0);
  });
});

describe("markTheCenter", {skip: isSkipped(markTheCenter, ["test"])}, () => {
  it("Marks the center in an even string", () => {
    const inputString = "even";
    const expected = "ev[center]en";

    assert.equal(markTheCenter(inputString), expected);
  });

  it("Marks the center in an even string", () => {
    const inputString = "odd";
    const expected = "od[center]d";

    assert.equal(markTheCenter(inputString), expected);
  });

  it('Returns "[center]" for an empty string', () => {
    const inputString = "";
    const expected = "[center]";

    assert.equal(markTheCenter(inputString), expected);
  });
});

describe("advancedCountCharacters", {skip: isSkipped(advancedCountCharacters, ["test"])}, () => {
  it("returns the correct character count for a single word", () => {
    assert.equal(advancedCountCharacters("Test"), 4);
  });

  it("trims whitespaces at the beginning and end of the string", () => {
    assert.equal(advancedCountCharacters(" test "), 4);
  });

  it("ignores whitespaces within the string", () => {
    assert.equal(
      advancedCountCharacters("Test this String with white spaces"),
      29,
    );
  });

  it("ignores tabs", () => {
    assert.equal(advancedCountCharacters("Test\tstring"), 10);
  });

  it("ignores linebreaks", () => {
    assert.equal(advancedCountCharacters("Test\nstring"), 10);
  });

  it("ignores all whitespaces, no matter where in the string", () => {
    assert.equal(
      advancedCountCharacters(
        "\tTest this String\n with    white\t\n\nspaces   ",
      ),
      29,
    );
  });
});

describe("removePopel", {skip: isSkipped(removePopel, ["Popel"])}, () => {
  it('replaces "Popel" with "foo" if only "Popel" is given', () => {
    assert.equal(removePopel("Popel"), "foo");
  });

  it('replaces "popel" with "foo" if only "popel" is given', () => {
    assert.equal(removePopel("popel"), "foo");
  });

  it('returns a copy of the original string, if it does not contain "popel"', () => {
    assert.equal(removePopel("This grass is green"), "This grass is green");
  });

  it('replaces "popel" with "foo" in a sentence', () => {
    assert.equal(removePopel("This popel is green"), "This foo is green");
  });

  it('replaces multiple instances of "popel" with "foo" in a sentence', () => {
    assert.equal(
      removePopel("This popel is popel green"),
      "This foo is foo green",
    );
  });

  it('replaces "popel" regardles of case', () => {
    assert.equal(
      removePopel("this has a poPel hidden"),
      "this has a foo hidden",
    );
    assert.equal(
      removePopel("this has a popeL hidden"),
      "this has a foo hidden",
    );
    assert.equal(
      removePopel("this has a POPEL hidden"),
      "this has a foo hidden",
    );
  });
});

describe("getTagInnerHTML", {skip: isSkipped(getTagInnerHTML, ["test"])}, () => {
  it("returns content between <body> and </body>", () => {
    const inputHtml =
      "<html><head></head><body><h1>Test</h1><div>Stuff</div></body></html>";
    const tag = "body";
    const expected = "<h1>Test</h1><div>Stuff</div>";

    assert.equal(getTagInnerHTML(inputHtml, tag), expected);
  });

  it("does not confuse tags with content", () => {
    const inputHtml =
      "<html><head><title>Find the body</title></head><body><h1>Test</h1><div>Stuff</div></body></html>";
    const tag = "body";
    const expected = "<h1>Test</h1><div>Stuff</div>";

    assert.equal(getTagInnerHTML(inputHtml, tag), expected);
  });

  it("returns empty string if tag is not found", () => {
    const inputHtml =
      "<html><head></head><body><h1>Test</h1><div>Stuff</div></body></html>";
    const tag = "footer";

    assert.equal(getTagInnerHTML(inputHtml, tag), "");
  });
});
