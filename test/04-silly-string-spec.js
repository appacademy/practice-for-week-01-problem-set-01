const { expect } = require('chai');

const sillyString = require('../problems/04-silly-string');

describe('sillyString()', function () {
	it('returns silly a word with vowels', function () {
		const inputStr = 'cats';
		const outputStr = 'cabats';

		expect(sillyString(inputStr)).to.equal(outputStr);
	});

	it('returns silly a word with multiple different vowels', function () {
		const inputStr = 'mouse';
		const outputStr = 'moboubusebe';

		expect(sillyString(inputStr)).to.equal(outputStr);
	});

	it('returns an unmodified word with no vowels', function () {
		const inputStr = 'brrrrr';
		const outputStr = 'brrrrr';

		expect(sillyString(inputStr)).to.equal(outputStr);
	});
});
