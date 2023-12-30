import { test, expect, describe } from "vitest";
import { difference, differenceMany } from "./difference";

describe("difference", () => {
  test.each([
    { a: new Set([]), b: [], expected: new Set([]) },
    { a: new Set([1, 2, 3]), b: [3, 4, 5], expected: new Set([1, 2]) },
    { a: new Set([1, 2, 3]), b: [], expected: new Set([1, 2, 3]) },
    { a: new Set([]), b: [3, 4, 5], expected: new Set([]) },
  ])("difference($a, $b) -> $expected", ({ a, b, expected }) => {
    const ib = b[Symbol.iterator]();
    expect(difference(a, ib)).toEqual(expected);
  });
});

describe("differenceMany", () => {
  test.each([
    { main: new Set([]), sets: [], expected: new Set() },
    { main: new Set([]), sets: [[], [], []], expected: new Set() },
    {
      main: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]),
      sets: [
        [2, 3],
        [5, 6],
        [8, 9],
      ],
      expected: new Set([1, 4, 7]),
    },
  ])("differenceMany($sets) -> $expected", ({ main, sets, expected }) => {
    expect(differenceMany(main, sets)).toEqual(expected);
  });
});
