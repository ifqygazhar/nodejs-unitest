import { sayHelloAsync } from "../src/async.js"

test("test async",async () => {
    const result = await sayHelloAsync("Ifqy")
    expect(result).toBe("Hello Ifqy")
})

test("test async matcher",async () => {
    await expect(sayHelloAsync("ifqy")).resolves.toBe("Hello ifqy")
    await expect(sayHelloAsync()).rejects.toBe("Hello empety")
})