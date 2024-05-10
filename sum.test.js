import { sum } from "./src/sum";


test("should add two numbers", () => {
    const result = sum(3,4);

    expect(result).toBe(7);
});