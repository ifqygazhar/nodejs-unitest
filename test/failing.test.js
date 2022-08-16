import { sayHello } from "../src/sayhello.js"

test("sayHello success",() => {
    expect(sayHello("ifqy")).toBe("Hello ifqy")
})

test.failing("sayHello error",() =>{
    sayHello(null)
})