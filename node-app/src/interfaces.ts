//Create a function isLegal() which takes user as an input

interface User{
    firstName: string,
    lastName: string,
    age: number;
    email?: string  //Optional, user may or may not provide
}
//Now use this interface anywhere
//Function does not necessarily require all the variables to be declared inside it, but class do

function isLegal2(user: User){

    if(user.age > 18){
        return true;
    }
    else{
        return false;
    }
}
function greet(user: User){
    return `Hello ${user.firstName}`
}


console.log(isLegal2({
    firstName: 'Kshitij',
    lastName: 'Jain',
    age: 17,
    email: 'kj@gmail.com '
 }));

console.log(greet({
    firstName: 'Kshitij',
    lastName: 'Jain',
    age: 23
}));



//Extend

interface EmployeeInter {
    name: string
}
interface ManagerInter {
    department: string
}

interface PersonInter extends EmployeeInter, ManagerInter{
    age: number,
    address: string,
    goodMorning: () => void
}

class UserInter implements PersonInter{
    name: string;
    department: string;
    age: number;
    address: string;

    constructor(name: string, department: string, age: number, address: string){
        this.name = name;
        this.department = department;
        this.age = age;
        this.address = address;
    }

    goodMorning() {
        return `Good Morning ${this.name}`
    }
}
const u = new UserInter('Kshitij', 'Tech', 22, 'Kota')
console.log(u);
console.log((u.goodMorning()));
