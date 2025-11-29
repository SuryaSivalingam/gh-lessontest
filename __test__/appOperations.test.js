const appOperations = require('../src/appOperations');

test("multiplication of two numbers", ()=>{
    expect(appOperations.multiply(12,0)).toBe(0);
});

test("addition of two numbers", ()=>{
    expect(appOperations.add(12,27)).toBe(39);
});

test("subtraction of two numbers", ()=>{
    expect(appOperations.subtract(27,12)).toBe(15);
});