
const employee = require('../lib/employee');

const testEmployee = new employee('name', 'id', 'email');
const testRole = 'employee';

test('getName returns name', () => {
    expect(testEmployee.getName()).toBe('name');
});

test('getId returns id', () => {
    expect(testEmployee.getId()).toBe('id');
});

test('getEmail returns email', () => {
    expect(testEmployee.getEmail()).toBe('email');
});

test('getRole returns role', () => {
    expect(testEmployee.getRole()).toBe(testRole);
});