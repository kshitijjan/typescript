//The purpose of having Interface is that whichever class implements Person are forced to have the types defined in Interface
//I can add more funtions inside any class but I need to atleast define all the types and funtions defined in Interface
interface Person{
    name: string,
    age: number,
    greet(phrase: string): void
}

class Employee implements Person{

    name: string;
    age: number;

    constructor(a: string, n: number){
        this.name = a;
        this.age = n;
    }
    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}`)
    }
}

const e = new Employee('Kshitij', 22);
e.greet('Mr.')