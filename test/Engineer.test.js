const Engineer = require("../lib/Engineer");


describe("Engineer class", () => {
        it('Returns user inputed data as an object', () => {
            const user = new Engineer('Alex',"23","alex@gmail.com","AlexWiederman")

            expect(user).toEqual(expect.objectContaining({name: 'Alex', id: "23", email:"alex@gmail.com", github: "AlexWiederman"}))
        })
    
})