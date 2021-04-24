
const intern = require('../lib/intern');

const testIntern = new intern('name', 'id', 'email', 'school');
const testRole = 'intern';

test('getName returns name', () => {
    expect(testIntern.getName()).toBe('name');
});

test('getId returns id', () => {
    expect(testIntern.getId()).toBe('id');
});

test('getEmail returns email', () => {
    expect(testIntern.getEmail()).toBe('email');
});

test('getSchool returns school', () => {
    expect(testIntern.getSchool()).toBe('school');
});

test('getRole returns role', () => {
    expect(testIntern.getRole()).toBe(testRole);
});