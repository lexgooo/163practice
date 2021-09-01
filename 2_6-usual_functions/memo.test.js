import memo from "./memo";

const fibnacci = i => {
  if (i === 0 || i === 1) {
    return 1;
  }
  return fibnacci(i - 1) + fibnacci(i - 2);
};

test("fibnacci(30) to equal 1346269", () => {
  expect(fibnacci(30)).toBe(1346269);
});

test("memo fibnacci(30) to equal 1346269", () => {
  expect(memo(fibnacci)(30)).toBe(1346269);
});

test("memo fibnacci(0) to equal 1", () => {
  expect(memo(fibnacci)(0)).toBe(1);
});

test("memo fibnacci(1) to equal 1", () => {
  expect(memo(fibnacci)(1)).toBe(1);
});

test("memo fibnacci(2) to equal 2", () => {
  expect(memo(fibnacci)(2)).toBe(2);
});
