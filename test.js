const Employee = require('./employee');

class Employees extends Employee {};

const newEmployee = new Employees("John Wick", "Dog Lover");

// let announceSelf = newEmployee.sayName;

// let boundAnnoounce = announceSelf.bind(newEmployee);

// boundAnnoounce();



// console.log(newEmployee);

// setTimeout(() => {
//     newEmployee.sayName(); // This will be called after 2 seconds
//   }, 2000);

setTimeout(() => {
    newEmployee.sayOccupation();
}, 3000);
