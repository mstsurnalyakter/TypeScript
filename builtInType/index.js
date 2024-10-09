//built-in-type :number, string,boolean, void, undefined, null
var userId;
var firstName;
var lastName;
var fullName;
var isActivated;
userId = 101;
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
var display = function () {
    console.log("object");
};
display();
