//Enums allow you to define a collection of related values that can be numeric or string-based. 
//They provide a way to give more meaningful names to sets of numeric or string values, making your code more readable and maintainable.

//Default enum will assign 0 to n values to the collection
enum Keys{
    Up,   //0
    Down, //1
    Left, //2
    Right //3
}

function defaultEnum(keyPressed: Keys){
    if(keyPressed == Keys.Up){
        console.log(Keys.Up);
    }
}
defaultEnum(Keys.Up)

//Manual declaration of values
//If maunally defining then it could be string or number or combination of both
enum Direction {
    North = 3,
    South = 'South',
    East = 'This is East',
    West = 'West'
}
console.log(Direction.East);
console.log(Direction.North);



//Use case of Enums: Express.js

import express, { Request, Response } from 'express'
const app = express();

//The main benifit is: If code of NotFount changes from 404 to 411 then I don't have to look into the entire codebase and change the code
// Simply change the code in this enum and it will be updated everywhere
enum ResponseStatus{
    Success = 200,
    NotFound = 404,
    Error = 500
}

app.get('/', (req: Request, res: Response) => {
    const userId: number | undefined = req.query.userId as number | undefined ;
    if(!userId){
        res.status(ResponseStatus.NotFound).json({
            msg: 'User ID not found'
        })
    }
})