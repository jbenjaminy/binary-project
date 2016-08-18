'use strict';
/* ----------- THE AND (&) OPERATOR -----------*/
/* Write a function that takes an integer value and checks to see if it is even or odd using the big-wise AND operator. Hint: Think about what the value of the least-significant bit will be for even and odd numbers. */

let evenOrOdd = (int) => {
	let valueA = 1;
	let valueB = int;
	let aAndB = (valueA&valueB);
	if (aAndB === valueA) {
		return 'odd';
	}
	return 'even';
}
// console.log(evenOrOdd(2));


/* Why would using bit-wise operations be potentially faster for checking whether a number is even or odds as opposed to using something like the modulo operator (for example randInt % 2)? */

    // Because binary operations are inherently faster, because its the native format the data is being stored, and it doesnt have to translate it back and forth.
    // 
/*---------- ADD PADDING TO BINARY NUMBERS ----------*/
let padBin = (bin) => {
var numZeros = 8 - bin.length;
    for (var i = 0; i < (numZeros); i++) {
            bin = '0'+ bin;
    }
    return bin;
}


/* ---------- FORMAT RESULTS ---------- */
let format = (int1, int2, op, result) => {
    return [int1 + ' (', padBin(int1.toString(2)), ') ', op, ' ', int2 + ' (', padBin(int2.toString(2)), ') => ', result, ' (', padBin(result.toString(2)), ')'].join('');
}

/* ----------- THE OR (|) OPERATOR -----------*/
/* Write a function that takes in two integer values and prints out the resultant value when you AND the two input values and then also when you OR the two input values. */

let andOr =(int1, int2) => {
    let and = (int1&int2);
    let or = (int1|int2);

    return {AND: format(int1, int2, '&', and), 
            OR: format(int1, int2, '|', or)}
}
 // console.log(andOr(15, 5));


/* ---------- THE XOR OPERATOR (^) ----------- */
    /* Extend the previous function further by adding logic for the XOR operation when two integer values are input. Add a third parameter which denotes which type of operation to execute. Print out the resultant value for the associated operation type. */

let andOrXor =(int1, int2, op) => {
    let operation = [int1, op, int2];
    let result = eval(operation.join(''));

    return format(int1, int2, op, result);
}
console.log(andOrXor(15, 5, '^'));





/*---------- ALTERNATE SOLUTION FOR 'evenOrOdd' ----------*/
let evenOrOddAlt = (int) => {
 let valueA = 1;
 let valueB = int;
 let aAndB = (valueA&valueB).toString(2);
 let leastSigBit = aAndB.substring(aAndB.length - 1);
 if (leastSigBit == 1) {
     return 'odd';
 }
 return 'even';
}
// console.log(evenOrOddAlt(-3));

