const { deepCopy, sum } = require('./copy');

const x = {
  a: [1, 2, 3],
  b: {
    a: 3, 
    b: 3
  }
};

const ar = [1, 2, 3];

const y = {
  a: 'z',
  [Symbol('z')]: 'd',
  ar
};

const z = {
  a: 'z',
  z: () => 'd',
  y
};

var r = {
  a: 'z',
  z
};

r.r = r;

test('should deeply copy right', () => {
  // expect(sum(1, 2)).toBe(3);
  expect(deepCopy(x)).toStrictEqual(x);
  expect(deepCopy(r)).toStrictEqual(r);
})