//Both interface and type support arrays

//Without using types
function maxVal(arr: number[]){
    let max = 0;

    for(let i = 0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

console.log(maxVal([4,2,3]));



//Using types
type array = number[]
function maxVal2(arr: array){
    let max = 0;

    for(let i = 0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}
console.log(maxVal2([5,6,4]));


//Now how using interface

interface UserArray { 
    firstName: string,
    lastName: string
    department: number[]
}

function printUsers(user: UserArray[]){    //Array of objects 

    for(let i = 0; i<user.length; i++){
        console.log(user[i].firstName, ',department: ' + user[i].department);
    }
}

printUsers([{
    firstName: 'Kshitij',
    lastName: 'Jain',
    department: [2,4]
}, {
    firstName: 'Vardhman',
    lastName: 'Jain',
    department: [1,3]
}])