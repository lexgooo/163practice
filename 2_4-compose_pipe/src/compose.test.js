import compose from "./compose";

let add = n => n + 3;
let multiple = n => n * 2;
let minus = n => n - 1;

test("compose()(10) equals ", () => {
  expect(compose()(10)).toBe(10);
});

test("compose(add)(10) equals ", () => {
  expect(compose(add)(10)).toBe(13);
});

test("compose(add, multiple, minus)(10) equals ", () => {
  expect(
    compose(
      add,
      multiple,
      minus
    )(10)
  ).toBe(21);
});

test("compose(multiple, add, minus)(10) equals ", () => {
  expect(
    compose(
      multiple,
      add,
      minus
    )(10)
  ).toBe(24);
});

test("compose(minus, add, multiple)(10) equals ", () => {
  expect(
    compose(
      minus,
      add,
      multiple
    )(10)
  ).toBe(22);
});
