//built-in-type :number, string,boolean, void, undefined, null

let userId: number;
let firstName: string;
let lastName:string;
let fullName:string;
let isActivated: boolean;

userId=101;
firstName = "Mst Surnaly";
lastName = " Akter";
fullName = firstName.concat(lastName);
isActivated = true;
console.log(userId);
console.log(fullName);
console.log(isActivated);

console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

const display = ():void =>{
    console.log("object");
}

display()