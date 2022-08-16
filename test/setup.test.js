import { sum } from "../src/sum.js"

beforeAll(() => {
    console.info("Before all")
})

afterAll(() => {
    console.info("After all")
})

beforeEach(() => {
    console.info("Before each")
})

afterEach(() => {
    console.info("After each")
})

test("first test", () =>{
    expect(sum(10,10)).toBe(20)
    console.info("first test")
})

test("second test", () =>{
    expect(sum(10,10)).toBe(20)
    console.info("second test")
})