// Functions to make RSA work

function isPrime(n) {
	// Checks if a number is prime
	if (n == 1) {
		return false;		
	}
	if (n == 2) {
		return true;
	}
	for (let i = 2; i < n**0.5; i++) {
		if (n % i == 0) {
			return false;
		}
	}
	return true;
}

function randint(a, b) {
	// Return a random integer between a (inclusive) and b (exclusive)
	// According to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random,
	// DOES NOT return cryptographically secure prime numbers.
	return Math.floor(Math.random() * (b - a)) + a;
}

function getLargePrime(n) {
	// Returns a prime number larger than n
	let randomSteps = randint(1, 100);
	let currentStep = 0;
	let currentNumber = n;
	while (currentStep < randomSteps) {
		currentNumber += 1;
		if (isPrime(currentNumber)) {
			currentStep += 1;
		}
	}
	return currentNumber;
}

function stringToHexASCII(str) {
	// Converts a string to hexadecimal ASCII
	stringNumber = "";
	for (let letter of str) {
		asciiNumber = letter.charCodeAt(0);				// Convert letter to base 10 ASCII
		asciiHexString = asciiNumber.toString(16);		// Convert base 10 ASCII to Hexadecimal
		stringNumber = stringNumber + asciiHexString;	// Concatenate the result
	}
	return parseInt(stringNumber, 16);
}

function hexASCIItoString(x) {
	// Converts hex ASCII to string
	let hex = x.toString(16);
	let str = '';
	for (let i = 0; i < hex.length; i = i + 2) {
		twoDigits = hex.charAt(i) + hex.charAt(i + 1);
		decASCII = parseInt(twoDigits, 16);
		letter = String.fromCharCode(decASCII);
		hex += letter;
	}
	return letter;
}

function gcd(a, b) {
	// Uses Euclid's algorithm. Recursive!
	if (b == 0) {
		return a;
	}
	return gcd(b, a % b);
}

function areCoprime(a, b) {
	return gcd(a, b) == 1;
}

function 

function E(x, N, e) {
	// Encrypts x, where:
	// x is the message
	// N = p*q where p and q are (typically large) prime numbers
	// e is a number which is less than AND coprime to (p-1)*(q-1)
	
	return (x ** e) % N;	
}

function D(x, N, d) {
	// Decrypts x, where:
	// x is the message
	// N = p*q where p and q are (typically large) prime numbers
	// d is the private key of the person decrypting the message
	
	return (x ** d) % N;
}

function encryptMessage(msg, N, e) {
	let x = stringToHexASCII(msg);
	return E(x, N, e);
}

function decryptMessage(encryptedMsg, N, e) {
	
}