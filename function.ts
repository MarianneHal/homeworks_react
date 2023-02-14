const user = {
    name:"Max",
    age:18,
    gender:'male'
}

interface IUser{
    name: string;
    age:number;
    gender:string;
}

//function sum(a,b) {
//return a + b
//}

const sum = (a:number, b:number):number => {
    return a+b
}

//function showSum(a,b) {
//    console.log((a + b));
//}

const showSum = (a:number, b:number):void => {
    console.log((a + b));
}


//function incAge(someUser, inc) {
//    someUser.age+=inc
//    return someUser
//}

const incAge = (someUser:IUser, inc:number):IUser => {
    someUser.age+=inc
    return someUser
}

console.log(incAge({name: "max", age: 33, gender: 'male'}, 3));