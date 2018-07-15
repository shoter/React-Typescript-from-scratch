class Person {
    firstName: string;
    secondName: string;

    constructor(firstName:string, secondName:string)
    {
        this.firstName = firstName;
        this.secondName = secondName;
    }

    hello() {
        return "Hello, I am " + this.firstName + " " + this.secondName;
    }
}

let person = new Person("Damian", "Damianowski");

let greeting = person.hello();
console.log(greeting);
