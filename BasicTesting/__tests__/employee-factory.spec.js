const Manager = require('../src/manager');
const Clerk = require('../src/clerk');
const createEmployee = require('../src/employee-management'); 

describe('Employee tests', () => {
    test('it should return a manager instance', () => {
        const input = 'manager'

        const employee = createEmployee(input);

        expect(employee instanceof Manager).toBeTruthy();
    });

    test('it should return a clerk instance', () => {
        const input = 'clerk'

        const employee = createEmployee(input);

        expect(employee instanceof Clerk).toBeTruthy();
    });
});