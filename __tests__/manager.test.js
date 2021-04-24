
const manager = require('../lib/manager');

const testManager = new manager('name', 'id', 'email','office');
const testRole = 'manager';

test('getName returns name', () => {
    expect(testManager.getName()).toBe('name');
});

test('getId returns id', () => {
    expect(testManager.getId()).toBe('id');
});

test('getEmail returns email', () => {
    expect(testManager.getEmail()).toBe('email');
});

test('getOffice returns office', () => {
    expect(testManager.getOfficeNumber()).toBe('office');
});

test('getRole returns Manager', () => {
    expect(testManager.getRole()).toBe(testRole);    
});