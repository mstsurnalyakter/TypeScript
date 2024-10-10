var Users = /** @class */ (function () {
    function Users(userName, age) {
        this.userName = userName,
            this.age = age;
    }
    Users.prototype.display = function () {
        console.log("UserName: ".concat(this.userName, " && age: ").concat(this.age));
    };
    return Users;
}());
//class
//user1 --> name: Alex, age:30
//user2 ---> name: John, age:32
//user3 ---> name: Pinku, age:31
var user1 = new Users("Alex", 30);
user1.display();
var Rooms = /** @class */ (function () {
    function Rooms(no, location) {
        this.no = no,
            this.location = location;
    }
    Rooms.prototype.display = function () {
        console.log("No:".concat(this.no, " && Location:").concat(this.location));
    };
    return Rooms;
}());
var room1 = new Rooms(101, "Dhaka");
var room2 = new Rooms(102, "Narayanganj");
room1.display();
room2.display();
