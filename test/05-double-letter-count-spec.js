const { expect } = require('chai');

const doubleLetterCount = require('../problems/05-double-letter-count');

describe('doubleLetterCount()', function () {
	it('returns "1" for a single instance of double letters', function () {
		const inputStr = 'let the wookie win';
		const outputCount = 1;

		expect(doubleLetterCount(inputStr)).to.equal(outputCount);
	});

	it('returns "2" for two instances of double letters', function () {
		const inputStr = 'the bigger the galaxy, the sweeter the homecoming';
		const outputCount = 2;

		expect(doubleLetterCount(inputStr)).to.equal(outputCount);
	});

	it('returns "0" for zero instances of double letters', function () {
		const inputStr = 'reality does not care if you believe it';
		const outputCount = 0;

		expect(doubleLetterCount(inputStr)).to.equal(outputCount);
	});
});
