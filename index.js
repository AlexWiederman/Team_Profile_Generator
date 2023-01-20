// Include packages needed for this application
const fs = require('fs'); //for creating html and css docs
const Employee = require("./lib/Employee")

// Initialize objects in other files

const employee = new Employee();

const Manager = employee.getName();




// function createFiles() {

//     // Create HTML data from data above
//     HTMLFile = generateHTML(data)
//     fs.writeFile('../dist/website.html', HTMLFile, (err) =>
//         err ? console.log(err) : console.log('Successfully created HTML File!')
//     );
//     // Create CSS 
//     CSSFile = generateCSS(data)
//     fs.writeFile('../dist/style.css', CSSFile, (err) =>
//         err ? console.log(err) : console.log('Successfully created CSS File!')
//     );
// }

