import { describe, expect, it } from "vitest";
import { sum } from "../helpers/sum";

describe("Test sum function ", () => {
  it(" add 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
