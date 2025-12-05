import { sum } from "./password.ts";

describe("sum function", () => {
  test("should add two numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("should not return wrong result", () => {
    expect(sum(2, 2)).not.toBe(5);
  });
});
