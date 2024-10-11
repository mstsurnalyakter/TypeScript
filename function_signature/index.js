// function signature --> define parameter number, type, what thing return
//function signature
var userInfo1;
var userInfo2;
var userInfo3;
// let userInfo2: ()=> string;
userInfo1 = function () {
    console.log("Alex is 10 years old[1]");
};
userInfo2 = function (name) {
    console.log("".concat(name, " is 10 years old[2]"));
};
userInfo3 = function (name, age) { return "name:".concat(name, " and age:").concat(age, "[3]"); };
// userInfo2 = () => "Alex";
userInfo1();
userInfo2("Alex");
console.log(userInfo3("Alex", 10));
;
