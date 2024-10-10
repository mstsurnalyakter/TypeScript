var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UsersInfo = /** @class */ (function () {
    function UsersInfo(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    UsersInfo.prototype.display = function () {
        console.log("userName:".concat(this.userName, " && age:").concat(this.age));
    };
    return UsersInfo;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName, age, studentId) {
        var _this = this;
        _this = _super.call(this, userName, age) || this,
            _this.studentId = studentId;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("UserName:".concat(this.userName, " && age:").concat(this.age, " && studentId:").concat(this.studentId));
    };
    return Student;
}(UsersInfo));
var student1 = new Student("hello", 32, 101);
student1.display();
// const user1 = new UsersInfo("alex",30);
// const user2 = new UsersInfo("ritu",32);
// user1.display()
