var user;
var users;
var user1;
user = { name: "tisha" };
users = [
    { name: "rita" },
    { name: "ritu" },
];
user1 = { userName: "Surnaly Akter", userId: 101 };
console.log(user1);
var userArrOfObj;
userArrOfObj = [];
var users1;
users1 = { userName: "Surnaly", userId: 101 };
var users2;
users2 = { userName: "Tisha", userId: 102 };
userArrOfObj.push(users1);
userArrOfObj.push(users2);
for (var key in userArrOfObj) {
    console.log(userArrOfObj[key]);
    console.log(userArrOfObj[key]["userName"]);
}
console.log(userArrOfObj);
