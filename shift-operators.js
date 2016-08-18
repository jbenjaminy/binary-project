'use strict'

/*---------- LEFT SHIFT OPERATOR (<<) -----------*/
	/* Write a function that takes in a decimal value and a value that represents the number of bit positions to shift left with. Return or print out the final base 10 value after the shift. */
let leftShift = (int, shift) => {
    let bin = int.toString(2);
    for (var i = 0; i < shift; i++) {
    	bin = bin + 0;
    }
   return parseInt(bin, 2);
}
 console.log(leftShift(1, 4));
    /* How would you verify whether the above function is producing the correct value? */

/*---------- RIGHT SHIFT OPERATOR (>>) -----------*/
	/* Modify your existing shift function to also calculate a right-shifted value. Compare the values which you get from your left-shift and right-shift functions. */

/*---------- ZERO-FILL RIGHT SHIFT OPERATOR (>>>) ----------*/
	/* Modify your existing shift function to also calculate a zero-fill right-shifted value. Compare the values which you get from your three different type of shift operator. */
	/* For non-negative numbers, does the zero-fill right shift operator differ from the right shift operator in terms of producing the end result? Why or why not? Eg. 11 >>> 4 vs 11 >> 4 */ 

/*---------- INTERVIEW QUESTIONS -----------*/

    /* Write a function which doubles an integer. */
    /* Write a function which quadruples an integer. */
    /* Write a function which divides an integer by two, rounding down. */
    /* Write a function which calculates 2^n. */
    /* Write a function which calculates the Morton Number from two 8-bit integers. In a Morton Number, the bits of two numbers are interleaved. So if your inputs were: 15 (00001111) and 48 (00110000), your output would be 1450 (0000010110101010). */


