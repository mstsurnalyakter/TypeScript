// function signature --> define parameter number, type, what thing return

//function signature
let userInfo1:() => void;
let userInfo2:(name:string)=>void;
let userInfo3:(name:string,age:number)=>string;
// let userInfo2: ()=> string;


userInfo1 = () =>{
    console.log("Alex is 10 years old[1]");
}

userInfo2 = (name:string) =>{
    console.log(`${name} is 10 years old[2]`);
}
userInfo3 = (name:string,age:number) => `name:${name} and age:${age}[3]`;

// userInfo2 = () => "Alex";


userInfo1();
userInfo2("Alex");
console.log(userInfo3("Alex", 10));;