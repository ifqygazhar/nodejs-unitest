beforeAll(() => console.info("Before all outer"))
afterAll(() => console.info("After all outer"))
beforeEach(() => console.info("Before each outer"))
afterEach(() => console.info("After each outer"))


test("test outer", () => console.info("test outer"))

describe("inner",() => {
    beforeAll(() => console.info("Before all inner"))
    afterAll(() => console.info("After all inner"))
    beforeEach(() => console.info("Before each inner"))
    afterEach(() => console.info("After each inner"))

    test("test inner", () => console.info("test inner"))
})
