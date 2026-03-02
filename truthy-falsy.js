// falsy value
/**
 * 0 (zero)
 * false
 * null
 * undefined
 * "" (empty string)
 * -0 (minus zero)
 * NaN
 */

// truthy value
/**
 * Infinity / -Infinity
 * any number (except zero)
 * true
 * " " (blank space)
 * "abc" (any string except empty string)
 * {} (empty object)
 * [] (empty array)
 */

const value = 1000;

if (value) {
    console.log("value is truthy");
} else {
    console.log("value is falsy");
}

// if-else shothand using ternary operator
value ? console.log('value is truthy') : console.log("value is falsy");

// do somehting only for truthy value
value && console.log('value is truthy');

// do something only for the falsy value
value || console.log("value is falsy");