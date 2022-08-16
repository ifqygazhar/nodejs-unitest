test("string",() => {
    const name = "Ifqy Gifha Azhar"

    expect(name).toBe("Ifqy Gifha Azhar")
    expect(name).toMatch(/har/)
})