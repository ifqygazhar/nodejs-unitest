import { getBalance } from "../src/async.js"

test("mock async function test", async () => {
    const from = jest.fn()
    from.mockResolvedValueOnce(1000)

    await expect(getBalance("ifqy",from)).resolves.toEqual({
        name: "ifqy",
        balance: 1000
    })

    expect(from.mock.calls.length).toBe(1)

    await expect(from.mock.results[0].value).resolves.toBe(1000)
})

test.failing("mock async function failed",async () => {
    const from = jest.fn()
    from.mockRejectedValueOnce(new Error("ups"))

    await getBalance("ifqy",from)
})