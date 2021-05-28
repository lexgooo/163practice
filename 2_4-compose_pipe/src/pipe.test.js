import pipe from "./pipe";

let add = n => n + 3;
let multiple = n => n * 2;
let minus = n => n - 1;

test("pipe()(10) equals ", () => {
  expect(pipe()(10)).toBe(10);
});

test("pipe(add)(10) equals ", () => {
  expect(pipe(add)(10)).toBe(13);
});

test("pipe(add, multiple, minus)(10) equals ", () => {
  expect(
    pipe(
      add,
      multiple,
      minus
    )(10)
  ).toBe(25);
});

test("pipe(multiple, add, minus)(10) equals ", () => {
  expect(
    pipe(
      multiple,
      add,
      minus
    )(10)
  ).toBe(22);
});

test("pipe(minus, add, multiple)(10) equals ", () => {
  expect(
    pipe(
      minus,
      add,
      multiple
    )(10)
  ).toBe(24);
});
