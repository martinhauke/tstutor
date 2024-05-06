/**
 * Exercise 1 - String manipulation
 *
 * In this exercise, you will learn how to work with strings.
 * Tasks will include putting strings together, searching in strings and
 * transforming them.
 *
 * @see String documentation: {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String}
 * 
 * @packageDocumentation
 */

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

/**
 * Returns a greeting containing `name` in the following format:
 * "Hello, <name>!"
 *
 * @example
 * // returns "Hello, Peter!"
 * exercise_1_1_1_greet("Peter")
 *
 * @see String operators: {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#string_operators}
 *
 * @see Template literals/Template strings: {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals}
 */
export function exercise_1_1_1_greet(name: string): string {
  throw Error("Not yet implemented")
}

/**
 * Returns a greeting containing `name` in the following format:
 * "Hello, <name>!"
 *
 * Returns "Hello, You!" if no name is given
 *
 * @example
 * // returns "Hello, Peter!"
 * exercise_1_1_2_advancedGreet("Peter")
 *
 * @example
 * // returns "Hello, You!"
 * exercise_1_1_2_advancedGreet()
 *
 * @see Default parameters: {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters}
 *
 */
export function exercise_1_1_2_advancedGreet(name?: string): string {
  throw Error("Not yet implemented")
}

/**
 * Returns the input text in all upper case.
 *
 * @example
 * // returns "THIS IS AN EXAMPLE"
 * exercise_1_2_scream("This is an Example")
 */
export function exercise_1_2_scream(text: string): string {
  throw Error("Not yet implemented")
}

/**
 * Return the number of characters in a given string.
 *
 * @example
 * // returns 5
 * exercise_1_3_1_countCharacters("Hello")
 */
export function exercise_1_3_1_countCharacters(text?: string): number {
  throw Error("Not yet implemented")
}

/**
 * Return the number of characters in text. Ignore any white space characters.
 *
 * @example
 * // returns 5
 * exercise_1_3_2_advancedCountCharacters("Hello")
 *
 * @example
 * // returns 5
 * exercise_1_3_2_advancedCountCharacters(" Hello ")
 *
 * @example
 * // returns 29
 * exercise_1_3_2_advancedCountCharacters("Test this String with white spaces")
 */
export function exercise_1_3_2_advancedCountCharacters(text: string): number {
  throw Error("Not yet implemented")
}

/**
 * Add the string "[center]" to the middle of the input string.
 * If the string has an uneven amount of characters, add it directly after the
 * middle character.
 *
 * @example
 * //returns "te[center]st"
 * exercise_1_4_markTheCenter("test")
 *
 * @example
 * //returns "tes[center]ts"
 * exercise_1_4_markTheCenter("tests")
 */
export function exercise_1_4_markTheCenter(text: string): string {
  throw Error("Not yet implemented")
}

/*
 * My friend Theo likes to sneak in the word "Popel" a lot. We cannot
 * allow that and have to replace this word with "foo" instead.
 *
 * @example
 * // returns "this is foo"
 * exercise_1_5_removePopel("this is popel")
 */
export const exercise_1_5_removePopel = (text: string): string => {
  throw Error("Not yet implemented")
};

/**
 * Return the text between the start and end tag.
 *
 * This function expects a string containing html and another string containing
 * the name of a tag.
 * For this example assume that each tag only exists once.
 *
 * @example
 * // returns "<h1>Test</h1><div>Stuff</div>"
 * exercise_1_6_getTagInnerHTML("<html><head></head><body><h1>Test</h1><div>Stuff</div></body></html>", "body")
 */
export const exercise_1_6_getTagInnerHTML = (
  htmlString: string,
  tagName: string,
): string => {
  throw Error("Not yet implemented")
}
