'use strict';
/* Implement a function that takes in an integer and prints out its two's complement value by following the algorithm described above. Hint: to invert the bits of a number you can use the "~" operator. For example ~25 will invert the bits of the integer 25. */

let twosComp = (int) => {
	int = ~int;
	return int = int + 1;
}

// console.log(twosComp(5));

// CONVERTS AN INTEGER INTO A 32-BIT BINARY, PASS INTEGER AND '+' OR '-'
	// TODO: FIGURE OUT HOW TO 'ADD ONE' AT THE END
let intToBinary = (int, sign, bin) => {
	var bin = bin || '';
	var remainder = int % 2;

	if (int === 0) {
		bin = remainder.toString() + bin;
		if (sign === '-') {
			return binInvert(bin);
		}
		return console.log(padBin(bin, sign));
	} else if (remainder === 1) {
		int = (int - 1);
	}
	
	int = int / 2;

	return intToBinary(int, sign, (remainder.toString() + bin));
}

let binInvert = (bin) => {
	bin = bin.split('0').join('2');
	bin = bin.split('1').join('0');
	bin = bin.split('2').join('1');
	return console.log(padBin(bin));
}

let padBin = (bin, sign) => {
	var numZeros = 32 - bin.length;
	for (var i = 0; i < (numZeros); i++) {
		if (sign === '+') {
			bin = '0'+ bin;
		} else {
			bin = '1' + bin;
		}
	}
	bin = bin.substring(0, 8) + ' ' + bin.substring(8, 16) + ' ' + bin.substring(16, 24) + ' ' + bin.substring(24);
	return bin;
}

intToBinary(514, '+');
