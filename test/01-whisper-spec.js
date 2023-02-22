const { expect } = require('chai');

const whisper = require('../problems/01-whisper');

describe('whisper()', function () {
	it('returns a whispered version of "Hello there"', function () {
		const inputStr = 'Hello there';
		const whisperedStr = '...hello there...';

		expect(whisper(inputStr)).to.equal(whisperedStr);
	});

	it('returns a whispered version of "NOOOOOooOOoOooooooooo"', function () {
		const inputStr = 'NOOOOOooOOoOooooooooo';
		const whisperedStr = '...noooooooooooooooooooo...';

		expect(whisper(inputStr)).to.equal(whisperedStr);
	});

	it('returns a whispered version of "THIS IS THE WAY"', function () {
		const inputStr = 'THIS IS THE WAY';
		const whisperedStr = '...this is the way...';

		expect(whisper(inputStr)).to.equal(whisperedStr);
	});
});
