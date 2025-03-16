//Generic is like I don't know the type at the time of function declation but i could send either a string or number or boolean
//Generics in TypeScript provide a way to create reusable components that can work with a variety of data types while maintaining type safety. 
// They allow you to define functions, classes, and interfaces that can operate on different types without sacrificing the benefits of type checking.
function genericFun<T>(prop: T){
    return prop;
}

//At the time of calling the function I can declare that this is a string or a number
const resp1:string = genericFun<string>('Kshitij');  //The type here is string
const resp2:number = genericFun<number>(900)        //The type here is number

console.log(resp1, resp2);


// Generic Interface

interface In<T>{
    firstName: T;
    lastName: T;
}

function calling<T>(props: In<T>){
    return `${props.firstName} ${props.lastName}`
}

const calling2 = calling<string>({firstName: 'Kshitij', lastName: "Jain"})
const calling3 = calling<number>({firstName: 124, lastName: 345})

console.log(calling2, calling3);



