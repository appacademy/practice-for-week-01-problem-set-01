const { expect } = require('chai');

const threeOrSeven = require('../problems/03-three-or-seven');

describe('threeOrSeven()', function () {
	it('returns "true" for a number that is divisible by three OR seven', function () {
		const numOne = 27;
		const numTwo = -70;

		expect(threeOrSeven(numOne)).to.be.true;
		expect(threeOrSeven(numTwo)).to.be.true;
	});

	it('returns "true" for a number that is divisible by three AND seven', function () {
		const numOne = 51;
		const numTwo = -75;

		expect(threeOrSeven(numOne)).to.be.true;
		expect(threeOrSeven(numTwo)).to.be.true;
	});

	it('returns "false" for a number that is NOT divisible by three or seven', function () {
		const numOne = 4;
		const numTwo = -25;

		expect(threeOrSeven(numOne)).to.be.false;
		expect(threeOrSeven(numTwo)).to.be.false;
	});
});
