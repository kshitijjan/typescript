/*
TypeScript is tightly typed language meaning that if a varible is defined then that variable must have a type (any (could be any type), number, string, boolean, null. undefined)
On the other hand, JavaScript is a loosely typed language, meaning no need to define the type

JavaScript, Python is run-time programming language
C++, Java, Ruby, TypeScript is compile-time programming language

TypeScript is developed on top of JavaScript but TypeScript does not run on browser so basically TypeScript does not run, it transpile the code to JavaScript
TypeScript is backward compatible so all the JavaScript code can be written on TS file but JS does not support this

mkdir node-app
cd node-app
npm init -y  -> creates package.json
tsc --init   -> creates tsconfig.json

tsc -b   -> to convert TS to JS
*/

// const x is defining the variable and number is type (data type)
// const x = 1; Js
// int x = 1; C++
const x: number = 101;
console.log(x);

//Creating function which accepts arguments and log
function sayHello(a: string){
    console.log(`Hello ${a}`);
}
sayHello('Kshitij');


function sum(num1:number, num2:number): number{
    return num1+num2
}
const value:number = sum(1,2);
console.log(value); 

/* In sum function we explicitly defined that the function is of type 'number'
but in islegal function there isn't any type defined to the function
This is called Type Inference
Which means typescript implicitly detects that the function is returning a number or a boolean
but it's always a good practise to explicitly define types to variables, functions, etc */
function isLegal(age: number){ 
    if(age < 18){
        return false;
    }
    else{
        return true
    }
}
const val = isLegal(23)
console.log(val);


//Create a function that takes another function and returns it after 1 sec

function fn1(myName: string): string{
    return `Hello ${myName}`
}
function fn2(fn1: (myName: string) => string, myName: string): void{
    setTimeout( () => {
        console.log(fn1(myName));
    }, 1000)
}

fn2(fn1, "Kshitj")


