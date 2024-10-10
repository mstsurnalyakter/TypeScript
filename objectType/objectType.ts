let user:object;
let users: object[];
let user1 :{userName:string,userId?:number};



user = {name:"tisha"};
users=[
    {name:"rita"},
    {name:"ritu"},

];

user1 = {userName:"Surnaly Akter",userId:101}
console.log(user1);


let userArrOfObj: object[];
userArrOfObj=[];

let users1:{userName:string,userId:number};
users1={userName:"Surnaly", userId:101};

let users2:{userName:string,userId:number};
users2={userName:"Tisha",userId:102};



userArrOfObj.push(users1);
userArrOfObj.push(users2);

for (const key in userArrOfObj) {
   console.log(userArrOfObj[key]);
   console.log(userArrOfObj[key]["userName"]);
}

console.log(userArrOfObj);