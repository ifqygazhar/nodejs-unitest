test("string.not",() => {
    const name = "Ifqy Gifha Azhar"

    expect(name).not.toBe("joko")
    expect(name).not.toMatch(/jok/)
})

test("number.not",() => {
    const value = 2 + 2
    expect(value).not.toBeGreaterThan(6)
    expect(value).not.toBeLessThan(3)

    expect(value).not.toBe(10)
})