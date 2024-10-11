// type User={
//     id:number;
//     name:string;
//     age:number
// }

interface IUser{
    id:number;
    name:string;
    age:number
}

let users: IUser[]=[];


let user1:IUser = {
    id:1,
    name:"Alex",
    age:20
}

let user2: IUser = {
  id: 2,
  name: "John",
  age: 10,
};

users.push(user1);
users.push(user2);


const printUserInfo = (user:IUser):void=> console.log(`id:${user.id} && name:${user.name} && age:${user.age}`);

users.forEach(user=>printUserInfo(user))