type CSSClass = string | number | object | undefined | CSSClass[] | [boolean, CSSClass] | [boolean, CSSClass, CSSClass];
/**
 * Concatenates strings of class names together to form a class name string.
 * Useful for breaking up long tailwind class strings.
 * Also adds conditional rendering. [condition, 'classes'] will only add the
 * classes if condition is true. [condition, 'classes1', 'classes2'] adds
 * classes1 or classes2 conditionally. Also supports recursive conditionals.
 * [condition1, [condition2, 'classes1', 'classes2'], 'classes3'].
 *
 * @param args string or array of strings of classnames. Also supports condition c
 * @returns a space separated string of class names.
 */
export default function cn(...args: CSSClass[]): string | undefined;
export {};
