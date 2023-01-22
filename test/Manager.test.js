const Manager = require("../lib/Manager");


describe("Manager class", () => {
        it('Returns user inputed data as an object', () => {
            const user = new Manager('Alex',"23","alex@gmail.com","1234")

            expect(user).toEqual(expect.objectContaining({name: 'Alex', id: "23", email:"alex@gmail.com", officeNumber: "1234"}))
        })
})