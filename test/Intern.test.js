const Intern = require("../lib/Intern");


describe("Intern class", () => {  
        it('Returns user inputed data as an object', () => {
            const user = new Intern('Alex',"23","alex@gmail.com","IU University")

            expect(user).toEqual(expect.objectContaining({name: 'Alex', id: "23", email:"alex@gmail.com", school:"IU University"}))
        })
})