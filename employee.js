class Employee {

    constructor(name, occupation) {

        this.name = name;

        this.occupation = occupation;

    }

    sayName() {

        console.log(`${name} says hello`);

    }

    sayOccupation() {

        console.log(`${name} is a ${this.occupation}`);

    }
}

module.exports = Employee;
