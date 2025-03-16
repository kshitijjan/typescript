//Types and Interfaces are almost same but have subtle differences
//1. Interfaces can be used to implement a class but types can not.
//2. A type props can have multiple types, string and number at same time but interface do not
// basically types and interfaces are same thing but with few differnces which makes them having their own use cases
//Interface can be use to implement class and types can be use to do &'s and |'s (key difference -> interview question)

//Union in Types
type StringOrNumber = {
    phrase: string
    id: string | number
}

function greetId(id: StringOrNumber){
    console.log(id.phrase, id.id);
}

greetId({phrase: 'Mr.', id: '1221'});
greetId({phrase: 'Mrs.', id: 1221})

//Intersection in Types
type EmployeeType ={ 
    name: string,
    startDate: Date
}
interface ManagerType {   //Type will also do the same thing
    name: string,
    department: string
}
type TeamLead = EmployeeType & ManagerType
// type TeamLead = {        //Both are same thing but using & allows us to intersect 2 types or 1 type/1 interface or both interface
//     name: string,        //The intersection must be a type and not interface
//     startDate: Date,
//     department: string
// }

const t: TeamLead = {
    name: 'Kshitij',
    startDate: new Date(),
    department: 'Tech'
}
greetId({phrase: 'Mr.', id: t.name})
console.log(t.department);

