test("array",() => {
    const names = ["ifqy","gifha","azhar"]
    expect(names).toContain("gifha")
    expect(names).toEqual(["ifqy","gifha","azhar"])

    const persons = [{name:"ifqy"},{name:"azhar"}]
    expect(persons).toContainEqual({name:"ifqy"})
    expect(persons).toEqual([{name:"ifqy"},{name:"azhar"}])
})