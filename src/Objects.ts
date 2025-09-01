
interface UserInterface  {
    name : string,
    job : string,
    age? : number
    greet(a:number,b:number):number
}


const user : UserInterface ={
    name : 'Abdullah',
    job : 'SWE',
    age : 24,
    greet(a:number,b:number):number{
        return a + b
    }
}

console.log(user.age)
console.log(user.greet(1,4))