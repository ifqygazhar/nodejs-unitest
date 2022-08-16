import { sumAll } from "../src/sum.js"

describe("when i call sumAll()",() => {
    it("should be 30 with parameter [10,10,10]", () => {
        expect(sumAll([10,10,10])).toBe(30)
    })

    it("should be 50 with parameter [10,10,10,10,10]", () => {
        expect(sumAll([10,10,10,10,10])).toBe(50)
    })
})