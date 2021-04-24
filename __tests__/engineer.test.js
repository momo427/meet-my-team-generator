const engineer = require('../lib/engineer');

const testEngineer = new engineer('name', 'id', 'email', 'github');
const testRole = 'engineer';

test('getName returns name', () => {
    expect(testEngineer.getName()).toBe('name');
});

test('getId returns id', () => {
    expect(testEngineer.getId()).toBe('id');
});

test('getEmail returns email', () => {
    expect(testEngineer.getEmail()).toBe('email');
});

test('getUsername returns username', () => {
    expect(testEngineer.getUsername()).toBe('username');
});

test('getRole returns role', () => {
    expect(testEngineer.getRole()).toBe(testRole);
});