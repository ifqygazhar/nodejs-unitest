import { callMe, MyException } from "../src/exception.js"

test("exception",() => {
    expect(() => callMe("ifqy")).toThrow()
    expect(() => callMe("ifqy")).toThrow(MyException)
    expect(() => callMe("ifqy")).toThrow("ups")
})

test("exception not happen",() => {
    expect(callMe("budi")).toBe("OK")
})