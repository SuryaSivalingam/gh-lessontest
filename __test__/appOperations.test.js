const appOperations = require('../src/appOperations');

test("multiplication of two numbers", ()=>{
    expect(appOperations(12,0).toBe(0));
});