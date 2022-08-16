test("test toBe",() => {
    const name = "ifqy"
    const expects = `Hello ${name}`

    expect(expects).toBe("Hello ifqy")
})

test("test toEqual",() => {
    const person = {id: 1}
    Object.assign(person,{name: "ifqy"})

    expect(person).toEqual({id: 1,name: "ifqy"})
})