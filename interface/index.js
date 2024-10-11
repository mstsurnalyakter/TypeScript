// type User={
//     id:number;
//     name:string;
//     age:number
// }
var users = [];
var user1 = {
    id: 1,
    name: "Alex",
    age: 20
};
var user2 = {
    id: 2,
    name: "John",
    age: 10,
};
users.push(user1);
users.push(user2);
var printUserInfo = function (user) { return console.log("id:".concat(user.id, " && name:").concat(user.name, " && age:").concat(user.age)); };
users.forEach(function (user) { return printUserInfo(user); });
