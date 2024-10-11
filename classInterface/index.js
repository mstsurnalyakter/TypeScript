// class User {
//     userName:string;
//     userAge:number;
var User = /** @class */ (function () {
    function User(userName, userAge) {
        var _this = this;
        this.userName = userName;
        this.userAge = userAge;
        this.formatUser = function () {
            return "Name:".concat(_this.userName, " and Age:").concat(_this.userAge);
        };
    }
    return User;
}());
var user1 = new User("Alex", 10);
console.log(user1.formatUser());
