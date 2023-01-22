const Employee = require("../lib/Employee");


describe("Employee class", () => {
        it('Returns user inputed data as an object', () => {
            const user = new Employee('Alex',"23","alex@gmail.com")

            expect(user).toEqual(expect.objectContaining({name: 'Alex', id: "23", email:"alex@gmail.com"}))
        })
})