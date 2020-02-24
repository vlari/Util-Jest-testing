const greeting = require('../src/hello');

describe('basic greeting', () => {
    test('it should return greeting message', () => {

        const input = 'John';

        const output = `Hello World ${input}!`;

        expect(greeting(input)).toEqual(output);

    })
})