import { sum } from "./index";

test("Testing sum function returns 5 when 2,3 are given", () => {
  const result = sum(2, 3);

  expect(result).toBe(5);
});
