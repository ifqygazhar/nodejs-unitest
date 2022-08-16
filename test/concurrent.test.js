import { sayHelloAsync } from "../src/async"

test.concurrent("test 1",async () => {
    await expect(sayHelloAsync("ifqy")).resolves.toBe("Hello ifqy")
})
test.concurrent("test 2",async () => {
    await expect(sayHelloAsync("ifqy")).resolves.toBe("Hello ifqy")
})
test.concurrent("test 2",async () => {
    await expect(sayHelloAsync("ifqy")).resolves.toBe("Hello ifqy")
})