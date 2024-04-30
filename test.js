const Employee = require('./employee');

const newEmployee = new Employee("John Wick", "Dog Lover");


setTimeout(() => {
    newEmployee.sayName(); // This will be called after 2 seconds
  }, 2000);
