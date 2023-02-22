const { expect } = require('chai');

const isSubstring = require('../problems/02-is-substring');

describe('isSubstring()', function () {
	it('returns "true" with partial substrings', function () {
		const searchString = 'Never tell me the odds.';
		const subString = 'ever tell m';

		expect(isSubstring(searchString, subString)).to.be.true;
	});

	it('returns "true" for substrings with different cases', function () {
		const searchString = 'TRY NOT. Do or do not. There is NO TRY.';
		const subString = 'IS no';

		expect(isSubstring(searchString, subString)).to.be.true;
	});

	it('returns "false" if a substring is not present', function () {
		const searchString = 'I am one with the Force and the Force is with me.';
		const subString = 'We are one with the force';

		expect(isSubstring(searchString, subString)).to.be.false;
	});
});
